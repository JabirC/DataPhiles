var yearRange;
var magRange;

// Returns whether n is included in a range of numbers (inclusive)
var inRange = function (n, range){
    return range[1] >= n && n >= range[0]
}

var chart = function(data) {
    var earthquake_data_path = "/earthquakesdata";
    var worldmap_data_path = "/worldmapdata";


    var margin = {top : 0, left: 0, right: 0, bottom: 0},
        height = 600 - margin.top - margin.bottom,
        width = 1200 - margin.left - margin.right;

    var svg = d3.select("#map")
                .append("svg")
                .attr("height", height + margin.top + margin.bottom)
                .attr("width", width + margin.left + margin.right)
                // this allows the svg to be zoomed and dragged with black magic
                .call(d3.zoom().on("zoom", function () {
                    svg.attr("transform", d3.event.transform)
                }))
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Function for mapping the magnitude of an earthquake to radius of the dot
    var r = d3.scaleLinear()
              .domain([2, 10])
              .range([0, 10]);

    var c = d3.scaleLinear()
              .domain([2, 10])
              .range(["#00FF00", "#FF0000"]);

    var updatePlot = function () {
        let dots = svg.selectAll("circle")
        dots.filter(function (d) {
                return !(inRange(d["YEAR"], yearRange) && inRange(d["EQ_PRIMARY"], magRange));
            })
            .transition()
            .duration(1000)
                .attr("r", 0);
        dots.filter(function (d) {
                return inRange(d["YEAR"], yearRange) && inRange(d["EQ_PRIMARY"], magRange);
            })
            .transition()
            .duration(1000)
                .attr("r", function(d) {
                    return r(d["EQ_PRIMARY"]);
                });
    };

    // Takes in a projection to use and plots each earthquake on the map
    var plotQuakes = function (projection) {
        d3.tsv(earthquake_data_path).then(function (data) {
            earthquake_data = data;
            svg.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                    .attr("cx", function(d) {
                        let point = [d["LONGITUDE"], d["LATITUDE"]];
                        return projection(point)[0];
                    })
                    .attr("cy", function(d) {
                        let point = [d["LONGITUDE"], d["LATITUDE"]];
                        return projection(point)[1];
                    })
                    .style("stroke", "#555555")
                    .style("fill", function(d) {
                        return c(d["EQ_PRIMARY"]);
                    })
                    .transition()
                    .duration(2000)
                        // EQ_PRIMARY denotes the magnitude of the earthquake
                        .attr("r", function(d) {
                            return r(d["EQ_PRIMARY"]);
                        });
        });
    };

    // Time
    var sliderTime = d3.sliderBottom()
        .domain([1600, 2019])
        .width(400)
        .tickFormat(d3.format("d"))
        .default([1600, 2019])
        .fill("#2196f3")
        .on('onchange', val => {
            yearRange = val;
            updatePlot();
        });

    var sliderMag = d3.sliderBottom()
        .domain([0, 10])
        .step(0.1)
        .width(400)
        .tickFormat(d3.format('.2s'))
        .fill("#2196f3")
        .default([0, 10])
        .on('onchange', val => {
            magRange = val;
            updatePlot();
        });

    var sliders = d3
        .select('#slider')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 70)
    var gTime = sliders.append('g').attr('transform', 'translate(30,30)');
    var gMag = sliders.append('g').attr('transform', 'translate(530,30)');

    gTime.call(sliderTime);
    gTime.append('text')
         .attr("y", -10)
         .text("Filter by year")
         .style('font-family', 'sans-serif');
    gMag.call(sliderMag);
    gMag.append('text')
         .attr("y", -10)
         .text("Filter by magnitude")
         .style('font-family', 'sans-serif');

    var drawWorldmap = d3.json(worldmap_data_path).then(function (geojson) {

        // Function for projecting longitude/latitude into a flat map
        let projection = d3.geoEquirectangular()
                           .fitSize([width, height], geojson);

        let path = d3.geoPath()
                     .projection(projection);

        // Draw the world map
        svg.selectAll("path")
            .data(geojson.geometries)
            .enter()
            .append("path")
                .attr("d", path)
                .style("fill", "#cccccc")
                .style("stroke", "#888888");
        plotQuakes(projection);
    });
};

