
comando = prompt("Digite a letra da questão (a , b ou c):")

switch(comando){

    case 'a' || 'A':
        const pessoa = {
            peso : 0,
            altura : 0
        }

        calculeIMC = (peso, altura) => {
            return peso/(altura**2)
        };

        let i = 0
        do{
            if(i > 0){
                alert("Por favor digite todos os valores")
            }
            pessoa.peso = prompt("Digite o seu peso (Kg):")
            console.log(pessoa.peso)
            pessoa.altura = prompt("Digite a sua altura (m):")
            console.log(pessoa.altura)
            i++
        }while(pessoa.peso == '' || pessoa.altura == '')

        if(pessoa.peso !== null && pessoa.altura !== null){
            alert(`O seu peso é ${pessoa.peso} Kg e a sua altura é ${pessoa.altura} metros\n
                O seu IMC é igual a: ${calculeIMC(pessoa.peso, pessoa.altura)}`)
            console.log("imc: ", calculeIMC(pessoa.peso, pessoa.altura))
        }
        else{
            alert("Você cancelou a operação, recarregue o site se quiser continuar")
        }
        
        break

    case 'b' || 'B':
        const user = {
            nome : "",
            idade : 0,
            email : ""
        }
    
        generateUser = function(nome, idade, email){
            const dadosUser = [nome, idade, email]
            return dadosUser
        }

        let j = 0
        do{
            if(j > 0){
                alert("Por favor digite todos os valores")
            }
            user.nome = prompt("Qual o seu nome?")
            console.log(user.nome)
            user.idade = prompt("Qual a sua idade?")
            console.log(user.idade)
            user.email = prompt("Qual o seu email?")
            console.log(user.email)
            j++
        }while(user.nome == '' || user.idade == '' || user.email == '')
    
        if(user.nome !== null && user.idade !== null && user.email !== null){
            dadosUser = generateUser(user.nome, user.idade, user.email)
            alert(`Os seus dados são os seguintes:
                nome: ${dadosUser[0]}
                idade: ${dadosUser[1]}
                email: ${dadosUser[2]}`)
        }
        else{
            alert("Você cancelou a operação, recarregue o site se quiser continuar")
        }

        break
    
    case 'c' || 'C':
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log(array)
        
        apenasPares = function(array){
            let arrayPar = []
            for(let w = 0; w < array.length; w++){
                if(array[w] % 2 == 0){
                    arrayPar.push(array[w])
                }
                console.log(arrayPar)
            }
            return arrayPar
        }
        
        arrayPar = apenasPares(array)
        alert(`O array apenas com números pares: ${arrayPar}`)

        break    

    default:
        
        break    
}


