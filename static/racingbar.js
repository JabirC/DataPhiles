var chart = function(dataset) {
  var startYear = 2002;
  var height = 600;

  const svg = d3.select('svg');
  console.log(svg);
  
  const margin = {
    top: 80,
    right: 0,
    bottom: 5,
    left: 0
  };
  
  let title = svg.append('text')
    .attr('class', 'title')
	.attr('y', '24')
    .text('insert title here');

  let year = startYear;
  
  // code below is copied from the demo and most of it should be changed tbh
  // dataset.forEach(d => {
    // d.value = +d.value,
    // d.lastValue = +d.lastValue,
    // d.value = isNaN(d.value) ? 0 : d.value,
    // d.year = +d.year,
    // // d.colour = d3.hsl(Math.random()*360,0.75,0.75)
    // d.colour = "#C8BDFF"
  // });
  
  // let yearSlice = dataset.filter(d => d.year == year && !isNaN(d.value))
    // .sort((a,b) => b.value - a.value)
    // .slice(0,top_n);
  
  // yearSlice.forEach((d,i) => d.rank = i);
  
  // let x = d3.scaleLinear()
    // .domain([0, d3.max(yearSlice, d => d.value)])
    // .range([margin.left, width-margin.right-65]);
  
  // let y = d3.scaleLinear()
    // .domain([top_n, 0])
    // .range([height-margin.bottom, margin.top]);
  
  // let colourScale = d3.scaleOrdinal()
    // .range(["#adb0ff", "#ffb3ff", "#90d595", "#e48381", "#aafbff", "#f7bb5f", "#eafb50"])
    // .domain(["India","Europe","Asia","Latin America","Middle East","North America","Africa"]);
    // // .domain(groups);
  
  // let xAxis = d3.axisTop()
    // .scale(x)
    // .ticks(width > 500 ? 5:2)
    // .tickSize(-(height-margin.top-margin.bottom))
    // .tickFormat(d => d3.format(',')(d));
  
  // svg.append('g')
    // .attrs({
      // class: 'axis xAxis',
      // transform: `translate(0, ${margin.top})`
    // })
    // .call(xAxis)
      // .selectAll('.tick line')
      // .classed('origin', d => d == 0);
  
  // svg.selectAll('rect.bar')
    // .data(yearSlice, d => d.name)
    // .enter()
    // .append('rect')
    // .attrs({
      // class: 'bar',
      // x: x(0)+1,
      // width: d => x(d.value)-x(0)-1,
      // y: d => y(d.rank)+5,
      // height: y(1)-y(0)-barPadding
    // })
    // .styles({
      // fill: d => colourScale(d.group)
      // // fill: d => d.colour
    // });
  
  // svg.selectAll('text.label')
    // .data(yearSlice, d => d.name)
    // .enter()
    // .append('text')
    // .attrs({
      // class: 'label',
      // transform: d => `translate(${x(d.value)-5}, ${y(d.rank)+5+((y(1)-y(0))/2)-8})`,
      // 'text-anchor': 'end'
    // })
    // .selectAll('tspan')
    // .data(d => [{text: d.name, opacity: 1, weight:600}, {text: d.subGroup, opacity: 1, weight:400}])
    // .enter()
    // .append('tspan')
    // .attrs({
      // x: 0,
      // dy: (d,i) => i*16
    // })
    // .styles({
      // // opacity: d => d.opacity,
      // fill: d => d.weight == 400 ? '#444444':'',
      // 'font-weight': d => d.weight,
      // 'font-size': d => d.weight == 400 ? '12px':''
    // })
    // .html(d => d.text);
  
  // svg.selectAll('text.valueLabel')
    // .data(yearSlice, d => d.name)
    // .enter()
    // .append('text')
    // .attrs({
      // class: 'valueLabel',
      // x: d => x(d.value)+5,
      // y: d => y(d.rank)+5+((y(1)-y(0))/2)+1,
    // })
    // .text(d => d3.format(',')(d.lastValue));
  
}
