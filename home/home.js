


	//criando um vetor com o caminho das imagens
var vetor = new Array ("home/home_photos/destaque/bolo_festa_1.jpg", "home/home_photos/destaque/bolo_pote_1.jpg", "home/home_photos/destaque/pao_mel_2.jpg", "home/home_photos/destaque/bolo_barco_.jpg");
	//variavel contador
var nCont = 0;


var texto = new Array("Bolo de Festa", "Bolo de Pote","Pão de Mel", "Bolo na Barca");

var i = 0;

var segundo = setInterval(function (){ exibeImg()}, 3000);


function exibeImg(){

	document.getElementById('documento').style = 'display:none' ;

	    nCont ++;
	
		i ++;

	while ((nCont > vetor.length -1) && (i > texto.length -1)) {

		nCont = 0;

		i = 0;

	}  

document.all.imagem.src = vetor[nCont];

document.all.texto.value = texto[i];
}

function fnTrocaImagem(posicao){
	nCont += posicao;
	i += posicao;

	if ((nCont > vetor.length -1 ) && (i > texto.length -1 )){
		nCont = 0;
		i = 0;
	}if ((nCont < 0) && (i < 0)){
		nCont = vetor.length -1;
		i = texto.length -1;
	}
	document.getElementById("imagem").src = vetor[nCont]; 
	document.all.texto.value = texto[i];

}

	setInterval(fnTrocaImagem(1));

function sairDaHome(pagina){

	document.getElementById('texto').style = 'display:none';
	
	document.getElementById('botao').style = 'display:none';
	document.getElementById('botao1').style = 'display:none';
	
	window.documento.location.href = pagina ;

	document.getElementById('imagem').style = 'display:none';

	document.getElementById('documento').style = 'display:inline';


	clearInterval(segundo);

}



/*

function mudar_foto(){

	document.getElementById('topo').style.backgroundColor = 'white'; 	

}
function voltar_foto(){
	document.getElementById('topo').style.backgroundColor = 'black'; 	


	//document.getElementById('topo').style.backgroundImage = 'url(teste/teste4.jpg)'	
}

*/

