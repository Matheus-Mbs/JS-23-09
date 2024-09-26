// {
//     let pessoas = []
//     let option = true
//     while(option){
//         let idade
//         let altura
//         let peso

//         idade = parseInt(prompt('Digite a idade da pessoa(Ex: 20): '))
//         altura = parseFloat(prompt('Digite a altura da pessoa(Ex: 1.70): '))
//         peso = parseFloat(prompt('Digite o peso da pessoa(Ex: 80): '))

//         pessoas.push({idade,altura,peso})
//         // console.log(pessoas)
//         option = confirm('Deseja continuar?')
//     }

//     pessoaMaisVelha = pessoas.reduce((maisvelha,pessoa) => pessoa.idade > maisvelha.idade ? pessoa : maisvelha)
//     pessoaMaisJovem = pessoas.reduce((maisjovem, pessoa) => maisjovem.idade < pessoa.idade ? maisjovem : pessoa)
//     soma = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0)
//     soma = soma / pessoas.length

//     alert(`A altura da pessoa mais jovem é: ${pessoaMaisJovem.altura} m \nO peso da pessoa mais velha é: ${pessoaMaisVelha.peso} Kg \nA média de idades de todas as pessoas é: ${soma}`)
// }

{
    let pessoas = []
    let option = confirm('Deseja continuar?')
    for(option = true; option;){
        let idade
        let altura
        let peso

        idade = parseInt(prompt('Digite a idade da pessoa(Ex: 20): '))
        altura = parseFloat(prompt('Digite a altura da pessoa(Ex: 1.70): '))
        peso = parseFloat(prompt('Digite o peso da pessoa(Ex: 80): '))

        pessoas.push({idade,altura,peso})
        // console.log(pessoas)
        option = confirm('Deseja continuar?')
    }

    pessoaMaisVelha = pessoas.reduce((maisvelha,pessoa) => pessoa.idade > maisvelha.idade ? pessoa : maisvelha)
    pessoaMaisJovem = pessoas.reduce((maisjovem, pessoa) => maisjovem.idade < pessoa.idade ? maisjovem : pessoa)
    soma = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0)
    soma = soma / pessoas.length

    alert(`A altura da pessoa mais jovem é: ${pessoaMaisJovem.altura} m \nO peso da pessoa mais velha é: ${pessoaMaisVelha.peso} Kg \nA média de idades de todas as pessoas é: ${soma}`)
}