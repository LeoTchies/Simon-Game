var coresBotoes = ["red", "blue", "green", "yellow"];
var padraoDeJogo = [];


function proximaSequencia (){

  var numeroRandomizado = Math.floor(Math.random() * 4);
  var corRondomizada = coresBotoes[numeroRandomizado];
  padraoDeJogo.push(corRondomizada);

  $("#"+corRondomizada).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var somVerde = new Audio ("sounds/"+ corRondomizada + ".mp3");
  somVerde.play();

}




