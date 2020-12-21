import calendar
import json
import csv
from googleapiclient.discovery import build
import googleapiclient.errors


def categorize():
    api_key = '' # Hiding my API key :)
    youtube = googleapiclient.discovery.build('youtube', 'v3', developerKey=api_key)

    f = csv.writer(open('C:/Users/Jerry/portfolio/files/watch-history.csv', 'w', encoding='utf-8', newline=''))
    f.writerow(['Channel', 'Videos', 'Category', 'Dates'])

    with open('C:/Users/Jerry/Desktop/portfolio/files/watch-history.json', encoding='utf8') as youtube_history:
        data = json.load(youtube_history)
        titles, dates, channels, vids = [], [], [], []
        for item in range(len(data)):
            # Checks if the video exists. Deleted/Unavailable videos don't have these fields
            if 'subtitles' in data[item] and 'titleUrl' in data[item]:
                # Adds each detail to their respective list after extracting the proper values
                titles.append(data[item]['title'].split(' ', 1)[1])
                dates.append(data[item]['time'].split('T')[0])
                channels.append(data[item]['subtitles'][0]['name'])
                # The vids list are the unique ids of each video
                vids.append(data[item]['titleUrl'].split('=', 1)[1])
                if len(vids) == 50:
                    # Calls the YouTube API to get the required data
                    # I send 50 requests at once because the input is a comma-separated string and calling the API for
                    # each video will use up your quota
                    try:
                        ids = ','.join(vids)
                        # I only want the category ids from youtube
                        # You can find the list of category ids and their names from youtube
                        # Later, I will match each id to a name that will be used in the visualization
                        categoryIDs = youtube.videos().list(
                            part="snippet",
                            id=ids,
                            fields="items(snippet(categoryId))").execute()
                        ids = [item['snippet']['categoryId'] for item in categoryIDs['items']]
                        # Writes the video details to the csv file.
                        for i in range(len(ids)):
                            f.writerow([channels[i], titles[i], ids[i], dates[i]])
                    # The YouTube API will throw errors if inputs are wrong. This will only happen if the inputs weren't
                    # formatted properly from the youtube history file you downloaded.
                    except:
                        print('Errors in here: ' + ','.join(vids))

                    titles, dates, channels, vids = [], [], [], []
                # This is just to account for the last item in your history
                elif item == len(data) - 1:
                    try:
                        categoryIDs = youtube.videos().list(
                            part="snippet",
                            id=','.join(vids),
                            fields="items(snippet(categoryId))").execute()
                        ids = [item['snippet']['categoryId'] for item in categoryIDs['items']]
                        for i in range(len(ids)):
                            f.writerow([channels[i], titles[i], ids[i], dates[i]])
                    except:
                        print('Errors in here (end): ' + ','.join(vids))
    return 'Done'


def getTop50Channels():
    channels = {}

    # Counts how much videos I've watched for each channel
    with open('C:/Users/Jerry/Desktop/portfolio/files/watch-history.csv', encoding='utf8') as youtube_history:
        reader = csv.reader(youtube_history)
        next(reader, None)

        for row in reader:
            if row[0] in channels:
                channels[row[0]] += 1
            else:
                channels[row[0]] = 1

    # Sorts the channels in descending order and replaces the values with the channel.
    # I do this to make my top channels a dropdown to filter the visuals
    topChannelsDict = dict(sorted(channels.items(), key=lambda item: item[1], reverse=True)[:50])
    topChannelsList = []
    for key in topChannelsDict:
        topChannelsList.append({'label': key, 'value': key})

    with open('C:/Users/Jerry/Desktop/portfolio/files/top50Channels.json', 'w') as outfile:
        json.dump(topChannelsList, outfile)

    return topChannelsDict


# Formats the data so that it's searchable from year to channel (You can do whatever, I just wanted this format)
# Formatting is based on what recharts requires for its graphs (https://recharts.org/en-US/)
def topChannelsDetails():
    # You can use the video dates to set up the year filter. Since I only have 3 years of data I just hardcoded this
    data = [{'year': 2018}, {'year': 2019}, {'year': 2020}]
    topChannels = getTop50Channels().keys()

    with open('C:/Users/Jerry/Desktop/portfolio/files/youtube_categories.json', encoding='utf8') as categories:
        categories = json.load(categories)

    with open('C:/Users/Jerry/Desktop/portfolio/files/watch-history.csv', encoding='utf8') as data_file:
        reader = csv.reader(data_file)
        next(reader, None)

        for row in reader:
            if row[0] in topChannels:
                date = row[3].split('-')
                year, month = date[0], date[1]
                category = categories[str(row[2])]
                month = calendar.month_name[int(month)]
                if year == '2018':
                    index = 0
                elif year == '2019':
                    index = 1
                else:
                    index = 2
                added = False
                # Looks for the channel in the year the video was watched
                if row[0] in data[index].keys():
                    # Step 1 (line 135): Creates a list (value) for the channel (key) which holds the months that I
                    # watched their videos and the categories the videos belonged to.
                    #
                    # Step 2 (line 126): For each video, add 1 to the number of video categories based on when I
                    # watched the video
                    for entry in range(len(data[index][row[0]])):
                        if data[index][row[0]][entry]['month'] == month:
                            if category in data[index][row[0]][entry].keys():
                                data[index][row[0]][entry][category] += 1
                            else:
                                data[index][row[0]][entry][category] = 1
                            # The "added" variable indicates whether or not the video was counted
                            added = True
                    # Step 1: If the video is the first of its kind, add the dictionary of its month and category to
                    # the channels list.
                    if not added:
                        data[index][row[0]].append({'month': month, category: 1})
                # Same as above, adds the dictionary if the video is the first of its kind
                else:
                    data[index][row[0]] = [{'month': month, category: 1}]

    with open('C:/Users/Jerry/Desktop/portfolio/files/formatted-history.json', 'w') as outfile:
        json.dump(data, outfile)


if __name__ == "__main__":
    topChannelsDetails()
