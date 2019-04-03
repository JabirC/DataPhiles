var chart = function(dataset) {
  var startYear = 2002;
  var height = 600;

  var nTop = 75;
  var width = 1000;
  var height = 800;

  const svg = d3.select('svg');

  const margin = {
    top: 80,
    right: 10,
    bottom: 10,
    left: 30
  };
  
  let title = svg.append('text')
    .attr('class', 'title')
	.attr('y', '24')
    .text('Lottery Numbers');
  
  // Get list of all lottery numbers
  var lottery_list = dataset.map(x => x[1]).flat().map(x => +x).sort(function(a, b) {return a-b;});
  var counts = {};
  for (var i = 0; i < lottery_list.length; i++) {
    var num = lottery_list[i];
    counts[num] = counts[num] ? counts[num] + 1: 1;
  }

  var xScale = d3.scaleLinear()
                 .domain([0, d3.max(d3.values(counts))])
                 .range([margin.left, width - margin.right]);
  var yScale = d3.scaleLinear()
                 .domain([0, nTop])
                 .range([margin.top, height - margin.bottom]);

  var xAxis = d3.axisTop().scale(xScale);
  var yAxis = d3.axisLeft().ticks(0).scale(yScale);
  svg.append("g")
      .attr("transform", "translate(0," + margin.top + ")")
      .call(xAxis);
  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(yAxis);

  var barHeight = 5;

  var x = d3.scaleLinear()
            .domain([0, d3.max(d3.values(counts))])
            .range([0, width - margin.right - margin.left]);
  var y = d3.scaleLinear()
            .domain([0, 75])
            .range([0, height - margin.bottom - margin.top]);

  var bar = svg.selectAll("g")
     .data(d3.keys(counts))
     .enter()
     .append("g")
     .attr("transform", function(d, i) { return "translate(" + margin.left + "," + margin.top + ")" });

  bar.append("rect")
     .style("fill", "steelblue")
     .attr("y", function(d) {return y(d);})
     .attr("width", function(d) {return x(counts[d]);})
     .attr("height", barHeight)
  bar.append("text")
     .attr("x", function(d) {return x(counts[d]);})
     .attr("y", function(d) {return 5 + y(d);})
     .style("font-size", "7px")
     .style("text-anchor", "end")
     .text(function(d) {return d;});
}


var get_year = function(year){
  year = year.substring(0,3);
  return parseInt(year);
}

var get_month = function(year){
  year = year.substring(5,7);
  //console.log(year);
  return parseInt(year);
}
