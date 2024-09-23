{
    let num = parseFloat(prompt('Digite um número para receber o fatorial dele: '))
    let i = num - 1
    let result = num
    while(i != 0){
        result = result * i
        i--
    }
    alert(`O resultado é: ${result}`)
}