document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('#formulario form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = formulario.querySelector('input[placeholder="Seu nome:"]').value;
        const email = formulario.querySelector('input[placeholder="Seu email:"]').value;
        const celular = formulario.querySelector('input[placeholder="Seu celular:"]').value;
        const mensagem = formulario.querySelector('textarea[placeholder="Sua mensagem"]').value;

        const texto = `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\nMensagem:\n${mensagem}`;
        const nomeArquivo = 'formulario_contato.txt';

        const link = document.createElement('a');
        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
        link.setAttribute('download', nomeArquivo);
        link.style.display = 'none';

        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    });
});