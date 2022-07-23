function insert(x){
    var numero = document.querySelector('.resultado').innerHTML 
    document.querySelector('.resultado').innerHTML = numero + x
}
function limpar(){
    var numero = document.querySelector('.resultado');
    document.querySelector('.resultado').innerHTML = ''
}
function back()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }
function result(){
    var resultado = document.querySelector('.resultado').innerHTML;
if(resultado){  document.querySelector('.resultado').innerHTML = eval(resultado)
}
}