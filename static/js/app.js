// Note: This code was adapted from the Homework 14 tutorial Dom gave on 27Sep2022

console.log('This is app.js');

// Define global variable to hold URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function DrawBargraph(sampleId)
{
    console.log(`DrawBargraph ${sampleId}`);

    d3.json(url).then(data => {
        console.log(data)

        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
        // create trace object
        let barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            type: 'bar',
            text: otu_labels.slice(0, 10).reverse(),
            orientation: 'h'
        };

        // Put the trace object into an array
        let barArray = [barData];

        // create the layout object
        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            // margin: (t: 30, l: 150)
        };

        // call the Plotly function
        Plotly.newPlot("bar", barArray, barLayout);

    });

}

function DrawBubblechart(sampleId)
{
    console.log(`DrawBubblechart ${sampleId}`);

}

function ShowMetadata(sampleId)
{
    console.log(`ShowMetadata ${sampleId}`);

}

function optionChanged(sampleId)
{
    console.log(`optionChanged ${sampleId}`);
    
    DrawBargraph(sampleId);
    DrawBubblechart(sampleId);
    ShowMetadata(sampleId);
}


function InitDashboard()
{
    console.log('InitDashboard()');

    // Get a handle to the dropdown
    let selector = d3.select("#selDataset");

    

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
