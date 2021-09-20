//Use the D3 library to read in `samples.json`.
function get(IDS){
    d3.json("data/sample.json").then((xo) => {
        var file = xo.samples;
        var outcome = file.filter((row)=> row.id ==id)[0];
    // get top 10 of the sample value
        var sampleValues = outcome.sample_values.slice(0,10).reverse();

    //get top 10 otu_ids as the labels for the bar chart.
        var otu_ids = outcome.otu_ids.slice(0, 10).reverse();

    //get top 10 otu_labels
        var otu_labels =  outcome.otu_labels.slice(0, 10).reverse();

    //Create a bubble chart that displays each sample.
        var trace = {
            x : otu_ids,
            y : sampleValues,
            Text : otu_labels,
            type : "bar",
            orientation : "h",
            marker: {
                size: outcome.sample_values,
                color: outcome.otu_ids,}
        }
    // create data variable 
        var datas = [trace];

        layout = {
            title : "top 10  of the  microbial species"
    }
    margin = {
        l: 100,
        r: 100,
        t: 100,
        b: 100},
    )};

//create plot 
plotly.newPlot("plot", datas, layout);