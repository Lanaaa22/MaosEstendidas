function MenuBotao() {
    var menu = document.getElementById('menu').classList.toggle("show");
    var m = document.getElementById('menu');
    const larguraJanela = window.innerWidth;

    if (menu) {
        m.style.display = 'block';
    } else {
        m.style.display = 'none';
    }
}

