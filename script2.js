var tamanho;
var fim = 1;
var padrao = "none";
var cor = "1px solid black";


function criar(){
  
  tamanho = document.getElementById("txttamanho").value;
 
  desCriar();

  for(var i = 1;i<=tamanho;i++){
    document.getElementById("caixa" + i).style.border = cor; 
  }
}

function desCriar(){
  fim = 1;
  for(var i = 1;i<=10;i++){
    document.getElementById("caixa" + i).value = "";
    document.getElementById("caixa" + i).style.border = padrao; 
  }
}

function enfileirar(){

  if(document.getElementById("txtvalor").value != ""){
    for(var i = 1;i<=tamanho;i++){
      if(i == fim){
          document.getElementById("caixa" + i).value = document.getElementById("txtvalor").value;
          console.log(fim);
          console.log(i);
    }
    }
    fim++;

  }else{
    alert("Valor Invalido");
}
}

function desEnfileirar(){
  if(fim>=1){
  for(var i = 1;i<fim;i++){
    document.getElementById("caixa" + (i)).value = document.getElementById("caixa" + (i + 1)).value;
  }
  document.getElementById("caixa" + fim).value = "";
  fim--;
}else{
  alert("Não existe Fila")
}
}