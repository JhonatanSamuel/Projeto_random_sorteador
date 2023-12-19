const resultado = document.querySelector('h3');

function sortearNumero() {
    const min = Math.ceil(document.querySelector('.go').value)
    const max = Math.floor(document.querySelector('.the').value)

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        resultado.innerHTML = result
    } else {
        alert(' O valor mínimo tem que ser Menor que o valor máximo')
    }
    
   

}







