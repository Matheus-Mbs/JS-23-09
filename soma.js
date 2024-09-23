{
    let num = 0
    let result = 0
    do{
        num = parseFloat(prompt('Digite N números para somatória, caso seja 0 o programa se encerra: '))

        if(num != 0 && num > 0){
            result += num
        }
        else{
            break
        }

    }while(num != 0)
    alert(`Resultado: ${result}`)
}