{
    let num
    let result = 0
    for(let i = 0; num != 0; i++){
        num = parseFloat(prompt('Digite N números para somatória, caso seja 0 o programa se encerra: '))

        if(num != 0 && num > 0){
            result += num
        }
        else{
            break
        }
    }
    alert(`Resultado: ${result}`)
}