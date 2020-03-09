
function showLogin() {
document.querySelector('.form-login').style.display = 'block';
//document.getElementById('loginForm').style.visibility = 'visible';
document.getElementById("subscripciones").style.display = "none";
};

function showSubs() {
    document.querySelector('.form-login').style.display = 'none';
    document.getElementById("subscripciones").style.display = "block";   
    };