
function validatepass() {
    var password = document.getElementById("password")
    var numeros = /([0-9])/;
    var alfabeto = /([a-z])/;
    var alfabetoA = /([A-Z])/;
    var especial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if (password.value.length < 8)
        alert('Minimo 8 Digitos')
    else

    if (password.value.match(especial))
        alert('deu especial')
    else
        alert('coloque um caractere especial')

    if (password.value.match(numeros))
        alert('deu nyumero')
    else
        alert('coloca numero ai')

    if (password.value.match(alfabeto))
        alert('deu alfabeto')
    else
        alert('coloca letra ai')

    if (password.value.match(alfabetoA))
        alert('deu ALFABETAO')
    else
        alert('coloca uma letra maior')
}       