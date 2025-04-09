document.addEventListener('DOMContentLoaded', function() {
    const socioTorcedorLink = document.querySelector('#link-socio-torcedor');

    socioTorcedorLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        const confirmacao = confirm("Você deseja se tornar Sócio Torcedor?");

        if (confirmacao) {
  
            window.location.href = 'https://sociotorcedor.com.br'; 
        } else {
            
            console.log("Ação de Sócio Torcedor cancelada.");
        }
    });
});