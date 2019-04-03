var line = function(dataset) {


var lottery_list = dataset.map(x => x[1]).flat().map(x => +x).sort(function(a, b) {return a-b;});
console.log(lottery_list)

var counts = {};

for (var i = 0; i < lottery_list.length; i++) {
  var num = lottery_list[i];
  counts[num] = counts[num] ? counts[num] + 1: 1;
}

var even = function(winningnum){
  str = winningnum.split(' ').join(' ');
  num = 0;
  for (i = 0; i< str.length; i++) {
    num += parseInt(str[i])
  }
  return (num / 2 == 0)
}

var countevens

}
