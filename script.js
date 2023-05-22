var tamanho;
var topo;
var padrao = "none";
var cor = "1px solid black";


function criar(){
  if(document.getElementById("txttamanho").value != ""){
    desCriar();

    tamanho = document.getElementById("txttamanho").value;
    topo = tamanho;
    topo++;

  

  for(var i = 1;i<=tamanho;i++){
    document.getElementById("caixa" + i).style.border = cor; 
  }
  console.log(topo);
}else{
  alert("Digite o tamanho da pilha")
}
}

function desCriar(){
  topo = null;
  fim = 1;
  for(var i = 1;i<=10;i++){
    document.getElementById("caixa" + i).value = ""; 
    document.getElementById("caixa" + i).style.border = padrao; 
  }
}

function empilhar(){
  if(topo != 1){
    if(document.getElementById("txtvalor").value != ""){
      topo--;
      document.getElementById("caixa" + topo).value = document.getElementById("txtvalor").value;

       

    console.log(topo);
    }else{
      alert("Valor inválido ! ")
    }
}else{
  alert("A Pilha está cheia, Desempilhe para continuar empilhando ! ")
}
}

function empilharAleatorio(){

  if(topo != 1){
     topo--;
    document.getElementById("caixa" + topo).value = Math.floor(Math.random() * 999);

       

    console.log(topo);
    
  }else{
    alert("A Pilha está cheia, Desempilhe para continuar empilhando ! ")
}

}

function desEmpilhar(){
  if(topo <= tamanho){
    
    document.getElementById("caixa" + topo).value = "";

    topo++;

  }else{
    alert("Não é possivel desempilhar pois a pilha esta vazia")
  }
  console.log(topo);
}

function somar(){
  if(topo != tamanho){
    document.getElementById("caixa" + (topo + 1)).value = 
    parseInt(document.getElementById("caixa" + (topo)).value) + parseInt(document.getElementById("caixa" + (topo + 1)).value);
    document.getElementById("caixa" + (topo)).value = "";
    topo++;
  }else{
    alert("operação impossível")
  }
  
}

function subtrair(){
  if(topo != tamanho){
    document.getElementById("caixa" + (topo + 1)).value = 
    parseInt(document.getElementById("caixa" + (topo)).value) - parseInt(document.getElementById("caixa" + (topo + 1)).value);
    document.getElementById("caixa" + (topo)).value = "";
    topo++;
  }else{
    alert("operação impossível")
  }
  
}

function multiplicar(){
  if(topo != tamanho){
    document.getElementById("caixa" + (topo + 1)).value = 
    parseInt(document.getElementById("caixa" + (topo)).value) * parseInt(document.getElementById("caixa" + (topo + 1)).value);
    document.getElementById("caixa" + (topo)).value = "";
    topo++;
  }else{
    alert("operação impossível")
  }
  
}

function dividir(){
  if(topo != tamanho){
    document.getElementById("caixa" + (topo + 1)).value = 
    parseInt(document.getElementById("caixa" + (topo)).value) / parseInt(document.getElementById("caixa" + (topo + 1)).value);
    document.getElementById("caixa" + (topo)).value = "";
    topo++;
  }else{
    alert("operação impossível")
  }
  
}

function incrementar(){
  if(topo != tamanho){
    document.getElementById("caixa" + (topo + 1)).value = 
    parseInt(document.getElementById("caixa" + (topo)).value) / parseInt(document.getElementById("caixa" + (topo + 1)).value);
    document.getElementById("caixa" + (topo)).value = "";
    topo++;
  }else{
    alert("operação impossível")
  }
  
}

function incrementar(){
  if(topo <= tamanho){
    document.getElementById("caixa" + (topo)).value = parseInt(document.getElementById("caixa" + (topo)).value) + 1;
    
  }else{
    alert("operação impossível")
  }
  
}

function decrementar(){
  if(topo <= tamanho){
    document.getElementById("caixa" + (topo)).value = parseInt(document.getElementById("caixa" + (topo)).value) - 1;
    
  }else{
    alert("operação impossível")
  }
  
}