
var vetorFotos = new Array ('galeria/arquivos_fotos/bolo_festa/bolo_festa_1.jpg', 'galeria/arquivos_fotos/bolo_festa/bolo_festa_2.jpg', 'galeria/arquivos_fotos/bolo_festa/bolo_festa_3.jpg'); // vetor de fotos
var vVetor = new Array ('item1', 'item2', 'item3', 'item4', 'item5' );//vetor de botoes
var nCont = 0;

	//aumentar imagem, quando clicada
function mostrarImg(imagem){

	document.getElementById("imagemDeDestaque").src = imagem;
	document.getElementById("imagemDeDestaque").style = "display: block;position:relative; width:70%; height:70%; margin-left: 14%; margin-top: -2.5%; transition: all ease-in 2s;";
	document.getElementById("exibidor").style="display: block; position: fixed; top: 0%; left: 0%; width: 100%; height: 100%;";
}
	setInterval('mostrarImg(imagem)', 5000);

	//botao fechar imagem no exibidor
function fechar(){
	document.getElementById("exibidor").style = "display: none"; 
}

	//muda de imagem no exibidor, voltar e avançar
function fnTrocaImagem(posicao){
	nCont += posicao;

	if (nCont > vetorFotos.length -1){
		nCont = 0;
	}if (nCont < 0) {
		nCont = vetorFotos.length -1;
	}

	document.getElementById("imagemDeDestaque").src = vetorFotos[nCont];

}

	setInterval('fnTrocaImagem(1)');


	//abrir campo informação ou compra
	function abrirInfo(){
	document.getElementById('info').style.display = 'block';
	}

	function mostra(aparecer){
		//document.getElementById(aparecer).style.display = "block";
		//^^funfou
		w = document.getElementById(aparecer);
			if (w.style.display=="block"){
				w.style.display='none';
			}else{
				for (i=0; i<vVetor.length; i++){
					if (vVetor[i] == aparecer){
						w.style.display='block';
					}else{
						document.getElementById(vVetor[i]).style.display='none';
					}
				}
			}
	}