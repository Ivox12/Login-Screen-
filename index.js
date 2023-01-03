
function validatepass() {
    let password = document.getElementById("password")
    let pass_camp = document.getElementById("pass_campo")
    let numeros = /([0-9])/;
    let alfabeto = /([a-z])/;
    let alfabetoA = /([A-Z])/;
    let especial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    pass_camp.style.display="block"

    pass_camp.innerHTML = `
    <div class="position_lab">
        <label>Minimo Oito Caracteres
            <input class="mycheckbox" id="tamanho" type="checkbox" disabled/>
        </label>
    </div>
    <div class="position_lab">
        <label>Um Caractere especial <br>(~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<)</br>
            <input class="mycheckbox" id="especial" type="checkbox" disabled/>
        </label>
    </div>
    <div class="position_lab">
        <label>Um numero
            <input class="mycheckbox" id="numero" type="checkbox" disabled/>
        </label>
    </div>
    <div class="position_lab">
        <label>Uma letra Minuscula
            <input class="mycheckbox" id="minuscula" type="checkbox" disabled/>
        </label>
    </div>
    <div class="position_lab">
        <label>Uma letra Maiuscula
            <input class="mycheckbox" id="maiuscula" type="checkbox" disabled/>
        </label>
    </div>
    `

    if (password.value.length < 8)
        alert('Minimo 8 Digitos')
    else
        document.getElementById("tamanho").checked = true;

    if (!password.value.match(especial))
        alert(' n foi deu especial')
    else
        document.getElementById("especial").checked = true;

    if (!password.value.match(numeros))
        alert('coloca numero ai')
    else
        document.getElementById("numero").checked = true;

    if (!password.value.match(alfabeto))
        alert('coloca letra ai')
    else
        document.getElementById("minuscula").checked = true;

    if (!password.value.match(alfabetoA))
        alert('coloca uma letra maior')
    else
        document.getElementById("maiuscula").checked = true;
}      

function confirm_pass (){
    let password = document.getElementById("password")
    let c_password = document.getElementById("c_password")

    if (password.value == c_password.value)
        enviar.disabled= false;
    else 
        enviar.disabled= true;
}