console.log('it works')

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// var sample_values;
let sample_values = [];
let id = [];
let labels = [];

d3.json(url).then(function(data) {
    
    console.log("Data:", data);

    dataSample = Object.values(data.samples);

    samples = data.samples

    console.log("data_sample:", dataSample);

    for (let i = 0; i < dataSample.length; i++) {

        sample_values.push(dataSample[i].sample_values);
        id.push(dataSample[i].otu_ids);
        labels.push(dataSample[i].otu_labels);
    }
    // let selector = d3.select('#selDataset');    
    
});

console.log("type:", typeof sample_values)

console.log("sample_values:", sample_values);
console.log("otu_ids", id);
console.log("otu_labels", labels);

let sampleMap = sample_values.map(function(item) {
    return item;
})

console.log("sampleMap: ", sampleMap);



function bar_chart_function(participant) {

    let x_axis = sample_values[0];
    let y_axis = id[0];

    barChart ={
    x: x_axis,
    y: y_axis,
    type: "bar",
    orientation: "h"
    };

    let chart = [barChart];

    let layout = {
        margin: {
          l: 100,
          r: 100,
          t: 0,
          b: 100,
        },
        height: 500,
        width: 600,
      };

      Plotly.newPlot("bar", chart, layout);
}

let x_axis = sample_values;
let y_axis = id;

barChart ={
x: x_axis,
y: y_axis,
type: "bar",
orientation: "h"
};

let chart = [barChart];

let layout = {
    margin: {
      l: 100,
      r: 100,
      t: 0,
      b: 100,
    },
    height: 500,
    width: 600,
  };

  Plotly.newPlot("bar", chart, layout);








