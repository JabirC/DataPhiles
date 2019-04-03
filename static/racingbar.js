var chart = function(dataset) {
  var startYear = 2002;
  var height = 600;

  var nTop = 75;
  var width = 1000;
  var height = 500;

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

  var xScale = d3.scaleLinear()
                 .domain([0, 200])
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

  // Get list of all lottery numbers
  var lottery_list = dataset.map(x => x[1]).flat().map(x => +x).sort(function(a, b) {return a-b;});
  var counts = {};
  for (var i = 0; i < lottery_list.length; i++) {
    var num = lottery_list[i];
    counts[num] = counts[num] ? counts[num] + 1: 1;
  }

 // this is broken
  var x = d3.scaleLinear().domain([0, d3.max(d3.values(counts))]).range([0,width]);
  var y = d3.scaleLinear().domain([0, d3.max(d3.keys(counts))]).range([0,50]);
  svg.selectAll("g")
     .data(d3.values(counts))
     .enter()
     .append("rect")
         .attr("x", margin.left)
         .attr("y", y)
         .attr("width", x)
         .attr("height", 5);
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
