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

    // Takes in a projection to use and plots each earthquake on the map
    var plotQuakes = function (projection) {
        d3.tsv(earthquake_data_path).then(function (data) {
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
                    .transition()
                    .duration(2000)
                        // EQ_PRIMARY denotes the magnitude of the earthquake
                        .style("fill", function(d) {
                            return c(d["EQ_PRIMARY"]);
                        })
                        .attr("r", function(d) {
                            return r(d["EQ_PRIMARY"]);
                        });
        });
    };
      // Simple
      var data = [0, 0.005, 0.01, 0.015, 0.02, 0.1];

      var sliderSimple = d3
        .sliderBottom()
        .min(d3.min(data))
        .max(d3.max(data))
        .width(300)
        .tickFormat(d3.format('.2%'))
        .ticks(5)
        .default(0.015)
        .on('onchange', val => {
          d3.select('p#value-simple').text(d3.format('.2%')(val));
        });

      var gSimple = d3
        .select('div#slider-simple')
        .append('svg')
        .attr('width', 500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');

      gSimple.call(sliderSimple);

      d3.select('p#value-simple').text(d3.format('.2%')(sliderSimple.value()));
      // Time
      var dataTime = d3.range(0, 420).map(function(d) {
        return new Date(1600 + d, 10, 3);
      });

      var sliderTime = d3
        .sliderBottom()
        .min(d3.min(dataTime))
        .max(d3.max(dataTime))
        .step(1000 * 60 * 60 * 24 * 365)
        .width(300)
        .tickFormat(d3.timeFormat('%Y'))

        .default(new Date(1998, 10, 3))
        .on('onchange', val => {
          d3.select('p#value-time').text(d3.timeFormat('%Y')(val));
        });

      var gTime = d3
        .select('div#slider-time')
        .append('svg')
        .attr('width', 500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');

      gTime.call(sliderTime);

      d3.select('p#value-time').text(d3.timeFormat('%Y')(sliderTime.value()));

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
