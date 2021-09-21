//Use the D3 library to read in `samples.json`.
function getids(Ids){
    d3.json("sample.json").then((data) => {
        //filter by ids
        var outcome = data.samples.filter(row => row.id== id);
        var outs = outcome[0]
        console.log(outs);

    // get top 10 of the sample 
        var sampleValues = outs.sample_values.slice(0,10).reverse();
        console.log(sampleValues);

    //get top 10 otu_ids as the labels for the bar chart.
        var otuIds = outs.otu_ids.slice(0, 10).reverse();
        console.log(otuIds);
    //get top 10 otu_labels
        var otuLabels =  outs.otu_labels.slice(0, 10).reverse();
        console.log(otuLabels);

    //Create a bubble chart that displays each sample.
        var trace = {
            x : otuIds,
            y : sampleValues,
            Text : otuLabels,
            type : "bar",
            orientation : "h",            
        }

        var layout = {
            title : "top 10  of the  microbial species",
            margin : {
                        l: 100,
                        r: 100,
                        t: 100,
                        b: 100
                    },
    }
    // create data variable 
        var datas = [trace];

//create plot 
plotly.newPlot("plot", datas, layout);

//Create a bubble chart that displays each sample.
    var trace1 = {
        x: otuIds,
        y: sampleValues,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIds
        },
        text: otuLabels
    }
    // set the layout for the bubble plot
    var layout = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1300
    };
    var traceData = [trace1]; 
});
    //create plot 
plotly.newPlot("plot", traceData, layout)};

//Display the sample metadata, i.e., an individual's demographic information.
// function getinfo(form){
//     d3.json("data/sample.json").then((post) => {
//         var demographicInfoBox = d3.select("#sample-metadata");
//         var demo = post.metadata;
//         var set_id = demo.filter((row)=> row.id == id)[0];
        
//Display each key-value pair from the metadata JSON object somewhere on the page.
//Update all of the plots any time that a new sample is selected.