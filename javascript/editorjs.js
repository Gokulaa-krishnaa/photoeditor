var image= null;
function upload(){
  var x1=document.getElementById("imageme");
  image=new SimpleImage(x1);
  var canx=document.getElementById("inputimg");
  image.drawTo(canx);
}
function changegrey()
{
  for (var pix of image.values()){
    var avg=(pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    pix.setRed(avg);
    pix.setBlue(avg);
    pix.setGreen(avg);
    }
  var canx=document.getElementById("resimg");
  image.drawTo(canx);
  }
function changered()
{
	for (var pix of image.values())
	{
    pix.setRed(255);
    }
    var canx=document.getElementById("resimg");
    image.drawTo(canx);
}
function changeindianflag()
{
	var l=image.getHeight();var w=image.getWidth()
    for (var pix of image.values()){
        var x=pix.getX(); var y=pix.getY()
        if (y<=l/3){
            pix.setRed(255);
            pix.setBlue(69)
        }
        if (y>l/3 && y<l*(2/3)){
        pix.setRed(pix.getRed()*2)
        pix.setGreen(pix.getBlue()*2)
        pix.setBlue(pix.getGreen()+50)
        }
        if (y>=l*(2/3)){
            pix.setGreen(128)
        }
    }
    var canx=document.getElementById("resimg");
    image.drawTo(canx);
}