
var x=200, y=400;//coordenadas iniciales de la imagen
var xDisparo=200, yDisparo=400;
var x_nave=10, y_nave=10;
var temporizador;
var disparado=false;
//var movimientoNave=false;

function play () {
  whichButton(event);
  nave_enemiga();
}

function lienzo(){

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("ima");
var imge=document.getElementById("disparo");
var nave = document.getElementById("nave_enemiga");
ctx.clearRect(0,0,500,500);//limpia todo el canvas 
ctx.drawImage(img,x,y);//dibuja la imagen
ctx.drawImage(imge,xDisparo,yDisparo);//dibuja la imagen
ctx.drawImage(nave,x_nave,y_nave);//dibuja la imagen

}

//cuando presione una tecla
function whichButton(event){
  
	if(event.keyCode=='39'){//si la tecla presionada es direccional derecho
		x+=5;//mueve la nave 5 pixeles a la derecha
		xDisparo+= (disparado)?0:+5;
		lienzo();
	}

	if(event.keyCode=='37'){//si la tecla presionada es direccional izquierdo
		x-=5;//mueve la nave 5 pixeles a la izquierda
		xDisparo+= (disparado)?0:-5;
		lienzo();
	}

	if(x < 0){//aporta límites al recorrido de la imagen 
		x=0;
	}

	if(x > 390){//aporta límites al recorrido de la imagen
		x=390;
	}

  if(xDisparo < 0){//aporta límites al recorrido de la imagen 
    xDisparo=0;
  }

  if(xDisparo > 390){//aporta límites al recorrido de la imagen
    xDisparo=390;
  }

	if(event.keyCode=='13') {
		//disparar();
    if (disparado==false) {
      disparar();
    } else{
      alert("Espera que explote el disparo");
    };
  }

}

function moverDisparo(){//Falta separar el movimiento del torpedo con el barco

  lienzo();
  yDisparo -= 10;
  obj=document.getElementById("disparo");
  //obj.style.left=xDisparo;     
  obj.style.top=yDisparo +"px";
  	if (yDisparo < 10){
    	clearInterval(temporizador);
  	}
}

function disparar () {//Falta separar el movimiento del torpedo con el barco
  disparado=true;
	//xDisparo = x;
  yDisparo = y;
  obj=document.getElementById("disparo");
  //obj.style.left=xDisparo;     
  obj.style.top=yDisparo -"px";
  temporizador=setInterval("moverDisparo()",200);
}

function nave_enemiga () {
  if(event.keyCode=='13') {
    movimiento(),60;
  }
  if(x_nave < 0){//aporta límites al recorrido de la imagen 
    x_nave=0;
  }

  if(x_nave > 390){//aporta límites al recorrido de la imagen
    x_nave=390;
  }
}

function movimiento () {//modificar. 

  x_nave+=20;
  lienzo();  

}

