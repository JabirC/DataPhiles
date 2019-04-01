
//Uncomment code below will show data of scatter plot (i use this as a backbone)

var model = ["acura	integra","acura	legend","audi 90","audi 100","bmw 535i","buick century","buick lesabre","buick roadmaster","buick riviera","cadillac deville"];
var power = [140,200,172,172,208,110,170,180,170,200];
var mpgc = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];

var data = [{"model":model[0],"power":power[0],"mpgc":mpgc[0]}, 
			{"model":model[1],"power":power[1],"mpgc":mpgc[1]}, 
			{"model":model[2],"power":power[2],"mpgc":mpgc[2]}, 
			{"model":model[3],"power":power[3],"mpgc":mpgc[3]}, 
			{"model":model[4],"power":power[4],"mpgc":mpgc[4]}, 
			{"model":model[5],"power":power[5],"mpgc":mpgc[5]}, 
			{"model":model[6],"power":power[6],"mpgc":mpgc[6]}, 
			{"model":model[7],"power":power[7],"mpgc":mpgc[7]}, 
			{"model":model[8],"power":power[8],"mpgc":mpgc[8]}, 
			{"model":model[9],"power":power[9],"mpgc":mpgc[9]}, 
			]



function chart(){
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */ 

// setup x 
var xValue = function(d) { return d["power"];}, 
	xScale = d3.scaleLinear().range([0, width]),
	xMap = function(d) { return xScale(xValue(d));}, // value -> display
    xAxis = d3.axisBottom(xScale);

// setup y
var yValue = function(d) { return d["mpgc"];}, 
	yScale = d3.scaleLinear().range([height, 0]), // value -> display
	yMap = function(d) { return yScale(yValue(d));}, // value -> display
    yAxis = d3.axisLeft(yScale);


// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","chart")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  // don't want dots overlapping axis, so add in buffer to data domain

  //https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  var p_min = Math.min.apply(null, power),
      p_max = Math.max.apply(null, power);

  var m_min = Math.min.apply(null, mpgc),
      m_max = Math.max.apply(null, mpgc);

  xScale.domain([p_min - 1,p_max + 1]);
 // yScale.domain([m_min - 1,m_max + 1]);


  // x-axis  
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
	  .text("Number of Appearance")
	  .attr("class","label")
	  .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .attr("fill","black")
      .style("text-anchor", "end")
      

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
	  .text("Lottery Number")
      .attr("class", "label")
      //.attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
 	  .attr("fill","black")
      .style("text-anchor", "end")
      
      
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // draw dots
  svg.selectAll(".bar")
      .data(data)
	  .enter()
	  		.append("rect")
			     // .attr("class", "dot")
			      .attr("width", xMap)
			      .attr("height",30)
			      .attr("x", 0)//function(d) { return d["power"];})
			      .attr("y", yMap)
			      .style("fill", function(d) { return "red";})
			      .on("mouseover", function(d) {
				          tooltip.transition()
				               .duration(200)
				               .style("opacity", .9);
				          tooltip.html(d["model"] + "<br/> (" + xValue(d) 
					        + ", " + yValue(d) + ")")
				               .style("left", (d3.event.pageX + 5) + "px")
				               .style("top", (d3.event.pageY - 28) + "px");
				      })
				      .on("mouseout", function(d) {
				          tooltip.transition()
				               .duration(500)
				               .style("opacity", 0);
				      })
				   .on("click",function(d){
				   	console.log(d["model"]);
				   });


}

window.onload = chart();

