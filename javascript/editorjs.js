var image= null;var resimage=null
function upload(){
  var x1=document.getElementById("imageme");
  image=new SimpleImage(x1);
  var canx=document.getElementById("inputimg");
  image.drawTo(canx);
}
function changegrey()
{
	resimage= new SimpleImage(image.getWidth(),image.getHeight())
	for (var pix of image.values()){
		var x=pix.getX(); var y=pix.getY()
		resimage.setPixel(x,y,pix)
	}
    for (var pix of resimage.values()){
    var avg=(pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    pix.setRed(avg);
    pix.setBlue(avg);
    pix.setGreen(avg);
    }
  var canx=document.getElementById("resimg");
  resimage.drawTo(canx);
  }
function changeindianflag()
{
	resimage= new SimpleImage(image.getWidth(),image.getHeight())
	for (var pix of image.values()){
		var x=pix.getX(); var y=pix.getY()
		resimage.setPixel(x,y,pix)
	}
	var l=resimage.getHeight();var w=resimage.getWidth()
    for (var pix of resimage.values()){
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
    resimage.drawTo(canx);
}
function changered()
{
	resimage= new SimpleImage(image.getWidth(),image.getHeight())
	for (var pix of image.values()){
		var x=pix.getX(); var y=pix.getY()
		resimage.setPixel(x,y,pix)
	}
	for (var pix of resimage.values())
	{
    pix.setRed(255);
    }
    var canx=document.getElementById("resimg");
    resimage.drawTo(canx);
}
function changedodger(){
	resimage= new SimpleImage(image.getWidth(),image.getHeight())
	for (var pix of image.values()){
		var x=pix.getX(); var y=pix.getY()
		resimage.setPixel(x,y,pix)
	}
	for (var pix of resimage.values()){
		var blue=pix.getBlue()
		pix.setBlue(blue+20)

	}
	var canx=document.getElementById("resimg");
    resimage.drawTo(canx);
}
function setfinalimage(){
  var canx=document.getElementById("finalimg");
  resimage.drawTo(canx);
}