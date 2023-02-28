window.prompt('Bienvenido a mi CV. Cuál es tu nombre?', 'su nombre aquí');

document.getElementById('btn2').addEventListener('click', function() {
    document.body.style.backgroundColor = '#19061f';
});

document.getElementById('btn1').addEventListener('click', function () {
    document.getElementById('perfil').innerHTML = "Estoy interesada en este tipo de trabajo porque puedo ver que en este rol mis habilidades generarán un beneficio. Debido a ello, también me beneficiaré de manera personal, profesional y económica.";
});