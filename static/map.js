var chart = function(data) {
    var margin = {top : 0, left: 0, right: 0, bottom: 0},
        height = 800 - margin.top - margin.bottom,
        width = 1200 - margin.left - margin.right;

    var svg = d3.select("#map")
                .append("svg")
                .attr("height", height + margin.top + margin.bottom)
                .attr("width", width + margin.left + margin.right)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Function for projecting longitude/latitude into a map
    var projection = d3.geoMercator()
                       .translate([width / 2, height / 2])

    // Function for mapping the magnitude of an earthquake to radius of the dot
    var r  = d3.scaleLinear()
               .domain([2, 12])
               .range([1, 10]);

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
           .attr("r", function(d) {
               return r(d["EQ_PRIMARY"]);
           })
           .attr("fill", "black");
};
