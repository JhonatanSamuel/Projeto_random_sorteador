

function sortearNumero() {
    const min = Math.ceil(document.querySelector('.go').value)
    const max = Math.floor(document.querySelector('.the').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)

}







