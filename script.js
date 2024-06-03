botão.addEventListener("submit", fnAlerta)

function fnAlerta(){
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        mostrarPopup(email, senha);
    });
    
    function mostrarPopup(email, senha) {
        alert(`Email: ${email}\nSenha: ${senha}`);
    }
}
