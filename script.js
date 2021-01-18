var image = null;
var can = document.getElementById("canvas");

function upload(){
  var fi = document.getElementById("fi");
  image = new SimpleImage(fi);
  image.drawTo(canvas);
}
function imageLoad(){
  if(image == null || !image.complete()){
    alert ("Images Not Loaded");
    return;
  }
}

function makegray(){
  imageLoad();
  var imageG = new SimpleImage(image);
  for ( var px of imageG.values()){
    var avg = (px.getBlue() + px.getRed() + px.getGreen())/3;
    px.setRed(avg);
    px.setBlue(avg);
    px.setGreen(avg);
  }
  imageG.drawTo(can);
}

function makered(){
  imageLoad();
  var imageR = new SimpleImage(image);
  for ( var px of imageR.values()){
    var avg = (px.getBlue() + px.getRed() + px.getGreen())/3;
    if (avg < 128){
      px.setRed(2*avg);
      px.setBlue(0);
      px.setGreen(0);
    }else {
      px.setRed(255);
      px.setBlue((2*avg)-255);
      px.setGreen((2*avg)-255);
    }
  }
  imageR.drawTo(can);
}

function reset(){
  imageLoad();
  image.drawTo(can);
}


function border(){
  imageLoad();
  var imageB = new SimpleImage(image);
  var w = imageB.getWidth();
  var h = imageB.getHeight();
  for(var px of imageB.values()){
    var x = px.getX();
    var y = px.getY();
    if ((x < w/20) || (x> w-(w/20)) || (y < h/20) || (y>h-(h/20))){
      px.setBlue(0);
      px.setGreen(0);
      px.setRed(0);
    }
  }
  imageB.drawTo(can);
}

function rainbow(){
  imageLoad();
  var imageW = new SimpleImage(image);
  var h = imageW.getHeight();
  for(var px of imageW.values()){
    var y = px.getY();
    var avg = (px.getBlue() + px.getRed() + px.getGreen())/3;
    if(y<h/7){
      if (avg < 128){
        px.setRed(2*avg);
        px.setBlue(0);
        px.setGreen(0);
      }else {
        px.setRed(255);
        px.setBlue((2*avg)-255);
        px.setGreen((2*avg)-255);
      }
    }
    if(y>=h/7 && y<2*(h/7)){
      if (avg < 128){
        px.setRed(2*avg);
        px.setGreen(0.8*avg);
        px.setBlue(0);
      }else {
        px.setRed(255);
        px.setGreen((1.2*avg)-51);
        px.setBlue((2*avg)-255);
      }
    }
   if(y>=2*(h/7) && y<3*(h/7)){
     if (avg < 128){
        px.setRed(2*avg);
        px.setGreen(2*avg);
        px.setBlue(0);
      }else {
        px.setRed(255);
        px.setGreen(255);
        px.setBlue((2*avg)-255);
      }
   }
   if(y>=3*(h/7) && y<4*(h/7)){
     if (avg < 128){
        px.setRed(0);
        px.setGreen(2*avg);
        px.setBlue(0);
      }else {
        px.setRed((2*avg)-255);
        px.setGreen(255);
        px.setBlue((2*avg)-255);
      }
   }
   if(y>=4*(h/7) && y<5*(h/7)){
     if (avg < 128){
        px.setRed(0);
        px.setGreen(0);
        px.setBlue(2*avg);
      }else {
        px.setRed((2*avg)-255);
        px.setGreen((2*avg)-255);
        px.setBlue(255);
      }
   }
   if(y>=5*(h/7) && y<6*(h/7)){
     if (avg < 128){
        px.setRed(0.8*avg);
        px.setGreen(0);
        px.setBlue(2*avg);
      }else {
        px.setRed((1.2*avg)-51);
        px.setGreen((2*avg)-255);
        px.setBlue(255);
      }
   }
   if(y>=6*(h/7)){
     if (avg < 128){
        px.setRed(1.6*avg);
        px.setGreen(0);
        px.setBlue(1.6*avg);
      }else {
        px.setRed((0.4*avg)+153);
        px.setGreen((2*avg)-255);
        px.setBlue((0.4*avg)+153);
      }
    }
  }
  imageW.drawTo(can);
}