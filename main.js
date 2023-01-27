const form = document.getElementById('formulario');

function validaCampo(valueA, valueB) {
    
    const campoValido = valueA < valueB;
    
    return campoValido === true

}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const successMensage = `Form successfully validated!`
    const errorMensage = `Form Error! Campo A > Campo B`
    const containerSuccessMensage = document.querySelector('.success-mensage');
    const containerErrorMensage = document.querySelector('.error-mensage');

    let formValido = validaCampo(campoA.value, campoB.value)
    
    if (formValido) {
        containerErrorMensage.style.display = 'none';
        containerSuccessMensage.innerHTML = successMensage;
        containerSuccessMensage.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } 
    else {
        containerSuccessMensage.style.display = 'none';
        containerErrorMensage.innerHTML = errorMensage;
        containerErrorMensage.style.display = 'block';

}

})

