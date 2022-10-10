const form = document.getElementById('form-validar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('valor-a');
    const valorB = document.getElementById('valor-b');
    const mensagemSucesso = `Valor B de: ${valorB.value} é maior que valor A de: ${valorA.value}. Válido!`;
    const containerMensagemValida = document.querySelector('.form-valido');
    const mensagemInvalido = `Valor de B de: ${valorB.value} é menor que valor A de: ${valorA.value}. Inválido!`;
    const containerMensagemInvalido = document.querySelector('.form-invalido'); 

if (valorB.value > valorA.value) {
    
    containerMensagemValida.innerHTML = mensagemSucesso;
    containerMensagemValida.style.display = 'block';
    containerMensagemInvalido.style.display = 'none';

    valorA.value = '';
    valorB.value = '';

}
else {

    containerMensagemValida.style.display = 'none';
    containerMensagemInvalido.innerHTML = mensagemInvalido;
    containerMensagemInvalido.style.display = 'block';

    valorA.value = '';
    valorB.value = '';
}});