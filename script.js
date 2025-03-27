function gerarSenha(tamanho, incluirNumeros, incluirSimbolos, incluirCaixaAlta) {
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    if(incluirNumeros) caracteres += '0123456789';
    if(incluirSimbolos) caracteres += "!@#$%^&*()_+-=[]{}|;:'\",.<>?";
    if(incluirCaixaAlta) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let senha = '';
    for(let i = 0; i < tamanho; i++) {
        let indexAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indexAleatorio];
    }

    let p = document.getElementById('senha-gerada');
    p.innerHTML = senha

    return senha;
}