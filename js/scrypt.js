// REFERENCIA AOS CAMPOS DE ENTRADA

const loginForm = document.getElementById('loginForm');

const usernameInput = document.getElementById('username');

const passwordInput = document.getElementById('password');

const loginButton = document.getElementById('login-button');

const showPasswordBtn = document.querySelector('show-password-btn');



// FUNÇÃO DE MOSTRAR/ESCONDER SENHA
if (showPasswordBtn) {

    showPasswordBtn.addEventListener('click', function() {
        //verifica o tipo do input de senha
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'text') {
            showPasswordBtn.textContent = 'Ocultar';
        } else {
            showPasswordBtn.textContent = 'Mostrar';
        }
    });
}



//ATIVAÇÃO DO BOTÃO ENTRAR

function checkInputs() {

    const isUsernameFilled = usernameInput.value.trim().length > 0;

    const isPasswordFilled = passwordInput.value.trim().length > 0;



    if (isUsernameFilled && isPasswordFilled) {

        // Se ambos estiverem preenchidos, ATIVA o botão (remove o atributo 'disabled')

        loginButton.removeAttribute('disabled');

    } else {

        // Caso contrário, DESATIVA o botão

        loginButton.setAttribute('disabled', 'true');

    }

}



// Adicionar um 'listener' para verificar o conteúdo em cada tecla digitada

usernameInput.addEventListener('input', checkInputs);

passwordInput.addEventListener('input', checkInputs);



// EVENTO DE SUBMISSÃO DO BOTÃO ENTRAR

loginForm.addEventListener('submit', function(event) {

    // PREVINE QUE A PAGINA RECARREGUE

    event.preventDefault();



    // FUNÇÃO LOGIN

    handleLogin();

});



// FUNÇÃO

function handleLogin() {

    // COLETA O VALOR DOS CAMPOS

    const username = usernameInput.value;

    const password = passwordInput.value;



    // TESTE DEPURAÇÃO

    console.log('Tentativa de login com:', username, 'e senha:', password);



    // DEFINIÇÃO DE USUÁRIO PARA TESTE

    const USUARIO_CORRETO = 'willian@usuario.com';

    const SENHA_CORRETA = '123456'



    if (username === USUARIO_CORRETO && password === SENHA_CORRETA) {

        //  SUCESSO NO LOGIN

        alert('Login realizado com sucesso! Bem Vindo(a)')

        // PODE SER REDIRECIONADO PARA UMA PÁGINA

        // window.location.href = 'pagina_inicial.html';

    } else {

        // FALHA NO LOGIN

        alert('Nome de usuário ou senha incorretos. Tente novamente.');

       

    }

}