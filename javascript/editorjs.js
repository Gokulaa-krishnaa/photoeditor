var image= null;
function upload(){
  var x1=document.getElementById("imageme");
  image=new SimpleImage(x1);
  var
 canx=document.getElementById("inputimg");
  image.drawTo(canx);
}
function changegrey(){
var x1=document.getElementById("imageme");
  image=new SimpleImage(x1);
  for (var pix of image.values()){
    pix.setRed(255);
    }
canx=document.getElementById("outputpicbox");
  image.drawTo(canx);
  }