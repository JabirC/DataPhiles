var chart = function(data) {
    var margin = {top : 0, left: 0, right: 0, bottom: 0},
        height = 600 - margin.top - margin.bottom,
        width = 1200 - margin.left - margin.right;

    var svg = d3.select("#map")
                .append("svg")
                .attr("height", height + margin.top + margin.bottom)
                .attr("width", width + margin.left + margin.right)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Function for mapping the magnitude of an earthquake to radius of the dot
    var r = d3.scaleLinear()
              .domain([0, 12])
              .range([0, 10]);

    var worldmap = d3.json("static/geodata.json").then(function (geojson) { 

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

        // Plot earthquakes
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
                .style("fill", "rgb(250, 50, 50)")
                .style("stroke", "#555555")
                .transition()
                .duration(2000)
                    .attr("r", function(d) {
                        return r(d["EQ_PRIMARY"]);
                    });
    });
};
