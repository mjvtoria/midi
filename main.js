alert('Olá, mundo');

function tocaSomPom(){
    document.querySelector('.tecla_pom').play ;
    document.querySelector('.tecla_pom').onclick = tocaSomPom; ;
}