import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import MultiSelect from "react-multi-select-component";


const youtube_history = require('../../files/youtube_history.json');
const categories = require('../../files/Categories.json');
const topChannels = require('../../files/Top Channels by Video Count.json');


var channels = [];
for (var channel of Object.keys(topChannels[0])) {
    channels.push({'label': channel, 'value': channel});
}

const years = [{"label": 2018, "index": 0}, {"label": 2019, "index": 1}, {"label": 2020, "index": 2}];
const monthsDict = {"January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5, "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11};
const monthsList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
const colors = ['#0C2A58', '#041408', '#58125D', '#46E718', '#BA79C2', '#EB10A5', '#A1EE79', '#C13CCD', '#8CA373', '#4E29E1', '#26DABB', '#0EACD3', '#0F6066', '#5569BE'];


function YouTubeProject() {
    const [selectedCategories, setSelectedCategories] = useState(categories);
    const [selectedChannels, setSelectedChannels] = useState(channels);
    const [selectedYears, setSelectedYears] = useState(years);


    var selectedData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    var detailedData = {};
    var index = 0;
    years.forEach(function (year) {
        selectedChannels.forEach(function (channel) {
            const cats_by_month = youtube_history[year['index']][channel['value']];
            if (cats_by_month) {
                cats_by_month.forEach(function (item) {
                    const index = monthsDict[item['month']]
                    var detailedData = selectedData[index];
                    for (var key in item) {
                        if (key !== 'month') {
                            if (detailedData[key]) {
                                detailedData[key] += item[key]
                            } else {
                                detailedData[key] = item[key]
                            }
                        }
                    }
                })
            }
            selectedData[index] = detailedData
        })
    })
    for (var i = 0; i < selectedData.length; i++) {
        selectedData[i]['month'] = monthsList[i]
    }


    var pieCats = []
    var totalVids = 0
    selectedCategories.forEach(function (category) {
        var catData = 0;
        selectedData.forEach(function (group) {
            if (group[category['value']]) {
                catData += group[category['value']];
                totalVids += group[category['value']];
            };
        });
        pieCats.push({'name': category['value'], 'value': catData});
    });

    // function handleClick(e) {
    //     console.log(e);
    //     console.log('The link was clicked.');
    // }

    return (
        <div>
            <div class="sideByside">
                <MultiSelect options={categories} value={selectedCategories} onChange={setSelectedCategories} disableSearch={true} />
                <MultiSelect options={channels} value={selectedChannels} onChange={setSelectedChannels} />
                <MultiSelect options={years} value={selectedYears} onChange={setSelectedYears} disableSearch={true} />
            </div>
            <div>
            	<LineChart width={1500} height={800} data={selectedData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Legend layout='vertical' verticalAlign='middle' align='right' wrapperStyle={{paddingLeft: "10px"}}/>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    {selectedCategories.map((entry, index) => <Line type="linear" dataKey={entry.value} stroke={colors[index]} />)}
                </LineChart>
            </div>

            <div>
                <PieChart width={800} height={800}>
                    <Legend layout='vertical' verticalAlign='middle' align='right' wrapperStyle={{paddingLeft: "10px"}}/>
                    <Tooltip formatter={(value) => {
                        const percent = (value/totalVids*100).toFixed(2)
                        return `${value} (${percent}%)`}}
                    />
                    <Pie data={pieCats} isAnimationActive={false} label>
                        {selectedCategories.map((entry, index) => <Cell fill={colors[index]} />)}
                    </Pie>

                </PieChart>
            </div>

    </div>

    );
}

export default YouTubeProject;
