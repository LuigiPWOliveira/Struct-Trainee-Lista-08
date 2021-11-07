
var medida = prompt("Digite qual medida você usará (celsius , fahrenheit ou kelvin):")
console.log(medida)
medida = medida.toLowerCase()
console.log(medida)

if(medida == 'celsius' || medida == 'fahrenheit' || medida == 'kelvin'){
    var temp = prompt("Digite a temperatura:")
    var kel, fah, cel
    console.log(temp)
    temp = parseFloat(temp)
    switch(medida){
        case 'celsius':
            fah = temp * (5/9) + 32
            kel = temp + 273.15
            alert(`${temp} graus celsius é equivalente a ${fah.toFixed(2)} graus fahrenheit e ${kel.toFixed(2)} graus kelvin.`)
            break
        case 'fahrenheit':
            cel = (temp - 32) * (5/9)
            kel = (temp - 32) * (5/9) + 273.15
            alert(`${temp} graus fahrenheit é equivalente a ${cel.toFixed(2)} graus celsius e ${kel.toFixed(2)} graus kelvin.`)
            break
        case 'kelvin':
            cel = temp - 273.15
            fah = (temp - 273.15) * (9/5) + 32
            alert(`${temp} graus kelvin é equivalente a ${cel.toFixed(2)} graus celsius e ${fah.toFixed(2)} graus fahrenheit.`)
            break
        default:
            break
    }
}
else{
    alert("Impossível fazer uma conversão.")
}
