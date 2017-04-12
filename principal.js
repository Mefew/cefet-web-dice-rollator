// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

document.getElementById('rolar').addEventListener("click", function() {
    let resultados = document.getElementById('resultado');
    let dados = [4,6,8,10,12,20];
    let somaTotal = 0;
    resultados.innerHTML="";

    for (var i = 0; i < dados.length; i++) {
        var numeroRolado = Math.ceil(Math.random() * dados[i]);
        numeroRolado *= document.getElementById("quantidadeD"+dados[i]).value;
        resultados.innerHTML += numeroRolado;
        somaTotal += numeroRolado;

        if (i != dados.length - 1)
            resultados.innerHTML += " + ";
        else
            resultados.innerHTML += " = ";
    }
    resultados.innerHTML += somaTotal;

    document.getElementById('recipienteResultados').classList.remove('oculto');
});
