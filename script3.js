let cookies = document.cookie.split('; ');
let isCookieSaved = false;
let user_name = '';
for (let i = 0; i < cookies.length; i += 1)
    if (cookies[i].split('=')[0] === 'user_name') {
        isCookieSaved = true;
        user_name = cookies[i].split('=')[1];
        break;
    }

function hideMessage() {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.input_field').style.display = 'block';
    document.querySelector('#first-btn').style.display = 'block';
    document.body.classList.remove('white-bg');
    document.querySelector('#second-btn').style.display = 'block';
}

function showWhiteBg() {
    document.querySelector('.input_field').style.display = 'none';
    document.querySelector('#first-btn').style.display = 'none';
    document.querySelector('#second-btn').style.display = 'none';
    document.querySelector('h1').style.display = 'block';
    document.querySelector('h1').innerHTML = 'Привіт, ' + user_name + " " +"!";
    document.body.classList.add('white-bg');
}

if (isCookieSaved) {
    showWhiteBg();
    setTimeout(hideMessage, 2000);
}
else {
    document.querySelector('#first-btn').addEventListener('click', function() {
        let inputField = document.querySelector('.input_field')
        if (inputField.value.trim() === '') {
            inputField.classList.add('error');
            inputField.placeholder = 'Введите имя';
        } else {
            document.cookie = 'user_name=${inputField.value};max-age=604800';
            user_name = inputField.value;
            showWhiteBg();
            setTimeout(hideMessage, 2000);
        }
    });
    document.querySelector('.input_field').addEventListener('input', function() {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            this.placeholder = 'Введите имя';
        }
    });
}

function startGame() {
    if (document.getElementsByClassName("input_field")[0].value != "")
        location.href="index.html";
    else
        document.querySelector(".input_field").classList.add("error");
}