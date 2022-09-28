// Note: This code was adapted from the Homework 14 tutorial Dom gave on 27Sep2022

console.log('This is app.js');

function DrawBargraph(sampleId)
{
    console.log(`DrawBargraph ${sampleId}`);

}

function DrawBubblechart(sampleId)
{
    console.log(`DrawBubblechart ${sampleId}`);

}

function ShowMetadata(sampleId)
{
    console.log(`ShowMetadata ${sampleId}`);

}


function InitDashboard()
{
    console.log('InitDashboard()');

    // Get a handle to the dropdown
    let selector = d3.select("#selDataset");

    let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    d3.json(url).then(data => {
        // This is what I want to run with my data
        console.log(data);

        let sampleNames = data.names;
        console.log(sampleNames);

        // Populate the dropdown box
        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            console.log(`sampleID = ${sampleId}`);
            selector.append("option").text(sampleId).property("value", sampleId);

        // Read the current value from the dropdown
        let initialId = selector.property("value");
        console.log("initialID:", initialId)

        // Draw bar graph for selected sample ID
        DrawBargraph(initialId);

        // Draw the bubble chart for selected sample ID
        DrawBubblechart(initialId);

        // Show the metadata for the selected sample ID
        ShowMetadata(initialId);

        };


    })

}

InitDashboard();
