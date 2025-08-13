var coresBotoes = ["red", "blue", "green", "yellow"];
var padraoDeJogo = [];
var padraoBotoesClicados = [];
var inicio = true;
var level = 0;

$("html").keydown(function(){
  $("#level-title").text("Level " + level)
  proximaSequencia();
  inicio = false;
  })


$(".btn").click(function(){
  var corEscolhidaPeloJogador = $(this).attr("id");
  padraoBotoesClicados.push(corEscolhidaPeloJogador);
  tocarMusica(corEscolhidaPeloJogador)
  animarBotao(corEscolhidaPeloJogador)
  conferirResposta(padraoBotoesClicados.length-1)
})


function proximaSequencia (){

  var numeroRandomizado = Math.floor(Math.random() * 4);
  var corRondomizada = coresBotoes[numeroRandomizado];
  padraoDeJogo.push(corRondomizada);

  $("#"+corRondomizada).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  tocarMusica(corRondomizada);
  
  level++;
  $("#level-title").text("Level " + level);
  padraoBotoesClicados = [];
}

function tocarMusica (name){
  var som = new Audio ("sounds/"+ name + ".mp3");
  som.play();
}

function animarBotao (corAtual){
  $("#" + corAtual).addClass("pressed");
  setTimeout(function(){
    $("#" + corAtual).removeClass("pressed");}, 300);

  }

function conferirResposta (levelAtual){
  if (padraoDeJogo[levelAtual] === padraoBotoesClicados[levelAtual]){
    console.log("Sucesso");
   
    if(padraoDeJogo.length === padraoBotoesClicados.length){
        setTimeout(function(){
          proximaSequencia();
        }, 2000);
      }
    }

   else {console.log("Erroooooooou");
         tocarMusica("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");}, 200)
        
        $("#level-title").text("Fim de Jogo. Quer tentar outra vez?")
        reset();};
   }

function reset(){
  padraoDeJogo = [];
  inicio = false;
  level = 0;
}