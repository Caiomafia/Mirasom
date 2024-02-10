



type  Produto = {
    nome:string,
    valor:number,
    teclado:boolean
}

function preencherdados(dados:Produto){

document.body.innerHTML += `
    <div>
    <h2>${dados.tipo}</h2>
    <h2> Inclui teclado :${dados.teclado ? "SIM" : "NÃO"}</h2>
    <h2>${dados.valor}</h2>    
    </div>
}`;

}


const computador:Produto = {    
nome:"computador",
valor:2500,
teclado:true
}


const notebook:Produto = {
    nome:"Notebook",
    teclado:false,
    valor:2500
}

preencherdados(computador)
preencherdados(notebook)




type Categorias = "nitro" | "acer" |"dell";

function printCategorias(categorias:Categorias){
    if(categorias === "nitro"){
console.log("Pintar vermelho")
    }
    console.log(categorias)
}




printCategorias("nitro")






//Aula de array 


const números = [10,20,30,40,2];

function maior(dados:number[]){
    
    return data.filter( (n) => n > 10);

}