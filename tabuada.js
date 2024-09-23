{
    let option
    do{
        
        let num
        option = parseFloat(prompt('1 - Imprimir a tabuada de um número\n2- Sair'))

        if(option == 1){
            num = parseFloat(prompt('Digite o número: '))
            let i = 0
            while(i <= 10){
                console.log(`${num}+${i} = ${num+i}`)
                i++
            }
            i = 0
            while(i <= 10){
                console.log(`${num}-${i} = ${num-i}`)
                i++
            }
            i = 0
            while(i <= 10){
                console.log(`${num}x${i} = ${num*i}`)
                i++
            }
            if(num != 0){
                i = 1
                while(i <= 10){
                    console.log(`${num}/${i} = ${num/i}`)
                    i++
                }
            }
            else{
                console.log('Divisão nao pode ser feita com esse número!')
            }
        }
    }while(option == 1)
}