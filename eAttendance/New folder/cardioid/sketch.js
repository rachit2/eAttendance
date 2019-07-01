var values;
var i=parseInt(0);
var j=parseInt(0);
function setup() {
  createCanvas(800, 500);
  values=new Array(width);
  var i;
  for(i=0;i<values.length;i++)
    values[i]=random(height);

  //values=sort(values);

/*for(i=0;i<values.length;i++)
{
  
for(j=0;j<values.length-i-1;j++)
{
    var a=values[j];
    var b= values[j+1];
    if(a>b)
    {
      var temp=a;
      a=b;
      b=temp;
    }
}
}*/
}
function draw() {
  background(0);

values=sort(values);
    /*if(i<values.length){
      for(j=0;j<values.length-i-1;j++)
  {
    var a=values[j];
    var b= values[j+1];
    if(a>b)
    {
      var temp=a;
      a=b;
      b=temp;
    }
    }
    i++;
  }*/



  for(i=0;i<values.length;i++)
  {
    stroke(255);
    line(i,height,i,height-values[i]);
  }
}
