

//dont edit this file, let me handle it 


var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


var data_global;

var items = [];

var uni_data = [];

var month = 5;
var year = 2002;

var y_num = function(d) { return d["number"] * 8;}
var x_num = function(d) { return d["frequency"] * 2;}

var xValue = function(d) { return d["frequency"];},
    xScale = d3.scaleLinear().range([0, width]),
    xMap = function(d) { return xScale(xValue(d));}, // value -> display
    xAxis = d3.axisBottom(xScale);


var yValue = function(d) { return d["number"];},
  yScale = d3.scaleLinear().range([height, 0]), // value -> display
  yMap = function(d) { return yScale(yValue(d));}, // value -> display
  yAxis = d3.axisLeft(yScale);

var chart = function(dataset) {
  console.log("xxxxx");
  var i;
  
  for(i = 0; i<75;i++){
    uni_data.push({
      number: 0,
      frequency: 0
    });
  }

 // const svg = d3.select('svg');
  //console.log(svg);
  data_global = dataset;

for (var i = 0; i < 75; i++){
  items[i] = 0;
}





var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","chart")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //get_month(dataset[0][0]);

  let month_1 = svg.append("text")
      .text("month: " + month)
      .attr('class','title')
      .attr('y', '500')
      .attr('x', '150')
      .attr('id','month')
      
  let year_1 = svg.append("text")
    .text("year: " + year)
    .attr('class','title')
    .attr('y', '500')
    .attr('x', '50')
    .attr('id','year')

    then = Date.now();

    do_lottery_number();
















////////////////////////////////////////////////////////////////









// setup y







// add the graph canvas to the body of the webpage



  // don't want dots overlapping axis, so add in buffer to data domain

  //https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  var p_min = Math.min.apply(null, uni_freq_array()),
      p_max = Math.max.apply(null, uni_freq_array());
/*
  var m_min = Math.min.apply(null, mpgc),
      m_max = Math.max.apply(null, mpgc);

  xScale.domain([p_min,p_max]);
  //yScale.domain([0,6]);


  // x-axis
  svg.append("g")
      .attr("class", "x_axis")
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
  /*
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
    .text("Lottery Number")
      .attr("class", "label")
      //.attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("x",100)
      .attr("dy", ".71em")
    .attr("fill","black")
      .style("text-anchor", "end")
*/

  // draw dots
  
  
  
  svg.selectAll(".bar")
      .data(uni_data)
    .enter()
        .append("rect")
           // .attr("class", "dot")
            .attr("width", x_num)
            .attr("height",5)
            .attr("x", 0)//function(d) { return d["power"];})
            .attr("y", (y_num))
            .style("fill", function(d) { return "red";})
        .append("text")
        	.text(y_num)
    	    .attr("x", 50)
      		.attr("y", y_num)
      		.attr("fill","black")
      

 //console.log("kaljsdalkjshfdaskjdhasl");


/////////////////////////////////////////////////////////////////////




    animation();

}

var id;

var fps, fpsInterval, startTime, now, then, elapsed;
fpsInterval = 700;

var uni_freq_array = function(){
  var ok = [];
  for(var i = 0; i < uni_data.length; i++){
    ok[i] = uni_data[i].frequency;
  }
  return ok;
}

var uni_num_array = function(){
  var ok = [];
  for(var i = 0; i < uni_data.length; i++){
    ok[i] = uni_data[i].number;
  }
  return ok;
}

var animation = function(){
  cancelAnimationFrame(id);

  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
////////////////////////////////////////////////////////////////////////////////////////
    //code to iterate

          const svg = d3.select('svg');
          if(month > 12){
              month = 1;
              year++;
            svg.selectAll('#year')
             .text("year: " + year)
          }else if(year >= 2019 && month > 3){
            cancelAnimationFrame(id);
            exit();
          }

          svg.selectAll('#month')
             .text("month: " + month)

          do_lottery_number();
          top_6();

          month++;

		svg.selectAll("rect")
      		.data(uni_data)
           // .attr("class", "dot")
            .attr("width", x_num)
            .attr("height",5)
            .attr("x", 0)//function(d) { return d["power"];})
            .attr("y", (y_num))
            .style("fill", function(d) { return "red";})
        /*.append("text")
        	.text(y_num)
    	    .attr("x", 50)
      		.attr("y", y_num)
      		.attr("fill","black")
		*/


  var p_min = Math.min.apply(null, uni_freq_array()),
      p_max = Math.max.apply(null, uni_freq_array());

  xScale.domain([p_min,p_max]);

  svg.selectAll(".x_axis")
      .call(xAxis)







//////////////////////////////////////////////////////////////////////////////////////
      then = now - (elapsed % fpsInterval);
  }

  id = requestAnimationFrame(animation);
}

var get_year = function(year){
  year = year.substring(0,4);
  return parseInt(year);
}

var get_month = function(year){
  year = year.substring(5,7);
  //console.log(year);
  return parseInt(year);
}

var increment_arr = function(dataset_arr,arr){
  for(var i = 0;i < 6; i++){
    arr[parseInt(dataset_arr[i]) - 1] += 1;
  }
}


var top_1 = function(){
  var big = 0;
  var index = 0;
  var i = 0;
  
  while(i < items.length){
    if(big < items[i]){
      big = items[i];
      index = i;
    }
    i++;
  }
  console.log("Current Top 1 number is: " + (index + 1));
}

var holder = [];
var holder_d = [];

var top_6 = function(){
  var big_1 = 0;
  var big_2 = 0;
  var big_3 = 0;
  var big_4 = 0;
  var big_5 = 0;
  var big_6 = 0;

  var num_1 = 0;
  var num_2 = 0;
  var num_3 = 0;
  var num_5 = 0;
  var num_6 = 0;
  var num_4 = 0;

  var i = 0;
  var t;

  while(i < items.length){
      if(big_6 <= items[i]){
        big_6 = items[i];
        num_6 = i + 1;
      }
      if(big_6 >= big_5){
        t = big_5;
        big_5 = big_6;
        big_6 = t;
       
        t = num_5;
        num_5 = num_6
        num_6 = t;
      }
      if(big_5 >= big_4){
        t = big_4;
        big_4 = big_5;
        big_5 = t;
       
        t = num_4;
        num_4 = num_5
        num_5 = t;
      }
      if(big_4 >= big_3){
        t = big_3;
        big_3 = big_4;
        big_4 = t;
       
        t = num_3;
        num_3 = num_4
        num_4 = t;
      }
      if(big_3 >= big_2){
        t = big_2;
        big_2 = big_3;
        big_3 = t;
       
        t = num_2;
        num_2 = num_3
        num_3 = t;
      }
      if(big_2 >= big_1){
        t = big_1;
        big_1 = big_2;
        big_2 = t;
       
        t = num_1;
        num_1 = num_2
        num_2 = t;
      } i++
    }
  holder[0] = num_1;
  holder[1] = num_2;
  holder[2] = num_3;
  holder[3] = num_4;
  holder[4] = num_5;
  holder[5] = num_6;
  
  holder_d[0] = big_1;
  holder_d[1] = big_2;
  holder_d[2] = big_3;
  holder_d[3] = big_4;
  holder_d[4] = big_5;
  holder_d[5] = big_6;
  


  console.log("Current Top 6 number is: " + holder[0].toString() + " " + 
    holder[1].toString() + " " + holder[2].toString() + " " + holder[3].toString() +
    " " + holder[4].toString() + " " + holder[5].toString());
}


var do_lottery_number = function(something){
  var i = 0;
  var j = 0;

  for(i;i < data_global.length;i++){


    if(get_year(data_global[i][0]) == year){
        if(get_month(data_global[i][0]) == month){
          //console.log(dataset[i][1]);
          increment_arr(data_global[i][1],items);

        }
    }
    i++;
  }

  for(j; j < items.length; j++){
    uni_data[j].number = j + 1;
    uni_data[j].frequency = items[j];
  }

  //console.log(items);
  //console.log(year);
  /*
  console.log(get_year(year));
  console.log(get_month(month));
  */
}
