$('.tag a').addClass(function() {
  var colorArr = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'];
  var index = Math.floor(Math.random()*colorArr.length);  
  returnClass = colorArr[index] + ' ui label';
  return returnClass;
});