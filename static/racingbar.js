

//dont edit this file, let me handle it 

var data_global;

var items = [];

var chart = function(dataset) {
  var startYear = 2002;
  var height = 600;

 // const svg = d3.select('svg');
  //console.log(svg);
  data_global = dataset;

for (var i = 0; i < 70; i++){
  items[i] = 0;
}

console.log(items);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","chart")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let year = startYear;
  var month_counter = 1;
  var month_txt = 5;
  var year_txt = 2002;
  //get_month(dataset[0][0]);

  let month_1 = svg.append("text")
      .text("month: " + month_txt)
      .attr('class','title')
      .attr('y', '500')
      .attr('x', '150')
      .attr('id','month')
      
  let year_1 = svg.append("text")
    .text("year: " + year_txt)
    .attr('class','title')
    .attr('y', '500')
    .attr('x', '50')
    .attr('id','year')

    then = Date.now();
    animation();



////////////////////////////////////////////////////////////////


var model = ["acura integra","acura legend","audi 90","audi 100","bmw 535i","buick century","buick lesabre","buick roadmaster","buick riviera","cadillac deville"];
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

var dates = ["2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"];
var nums







var xValue = function(d) { return d["power"];},
  xScale = d3.scaleLinear().range([0, width]),
  xMap = function(d) { return xScale(xValue(d));}, // value -> display
    xAxis = d3.axisBottom(xScale);

// setup y
/*
var yValue = function(d) { return d["mpgc"];},
  yScale = d3.scaleLinear().range([height, 0]), // value -> display
  yMap = function(d) { return yScale(yValue(d));}, // value -> display
    yAxis = d3.axisLeft(yScale);
*/



// add the graph canvas to the body of the webpage



  // don't want dots overlapping axis, so add in buffer to data domain

  //https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  var p_min = Math.min.apply(null, power),
      p_max = Math.max.apply(null, power);

  var m_min = Math.min.apply(null, mpgc),
      m_max = Math.max.apply(null, mpgc);

  xScale.domain([0,10]);
  //yScale.domain([0,6]);


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

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // draw dots
  /*
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

 */


/////////////////////////////////////////////////////////////////////

}

var id;
var month = 5;
var year = 2002;

var fps, fpsInterval, startTime, now, then, elapsed;
fpsInterval = 700;

var animation = function(){
  cancelAnimationFrame(id);

  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {

    //code to iterate

          const svg = d3.select('svg');
          if(month > 12){
              month = 1;
              year++;
            svg.selectAll('#year')
             .text("year: " + year)
          }else if(year >= 2019 && month > 6){
            cancelAnimationFrame(id);
            exit();
          }

          svg.selectAll('#month')
             .text("month: " + month)

          do_lottery_number(data_global,year,month);
          top_6();

          month++;

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
  var holder = [];
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
  console.log("Current Top 6 number is: " + holder[0].toString() + " " + 
    holder[1].toString() + " " + holder[2].toString() + " " + holder[3].toString() +
    " " + holder[4].toString() + " " + holder[5].toString());
}

var do_lottery_number = function(dataset,year,month){
  var i = 0;
  var j = 0;

  while(i < dataset.length){

    if(get_year(dataset[i][0]) == year){
        if(get_month(dataset[i][0]) == month){
          //console.log(dataset[i][1]);
          increment_arr(dataset[i][1],items);
        }
    }
    i++;

  }
  //console.log(items);
  //console.log(year);
  /*
  console.log(get_year(year));
  console.log(get_month(month));
  */
}