function telephoneMask() {
    let tel = document.getElementById("tel").value;
    let ddd = tel.slice(0,2);
    let parte1 = tel.slice(2,7);
    let parte2 = tel.slice(7,11);
    let newTel = `(${ddd})${parte1}-${parte2}`

    tel = newTel
    console.log(tel)

}

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
        console.log('Minimo 8 Digitos')
    else
        document.getElementById("tamanho").checked = true;

    if (!password.value.match(especial))
        console.log(' n foi deu especial')
    else
        document.getElementById("especial").checked = true;

    if (!password.value.match(numeros))
        console.log('coloca numero ai')
    else
        document.getElementById("numero").checked = true;

    if (!password.value.match(alfabeto))
        console.log('coloca letra ai')
    else
        document.getElementById("minuscula").checked = true;

    if (!password.value.match(alfabetoA))
        console.log('coloca uma letra maior')
    else
        document.getElementById("maiuscula").checked = true;
}      

function confirm_pass (){
    let password = document.getElementById("password")
    let c_password = document.getElementById("c_password")
    let warning_campo = document.getElementById("warning_camp")

    pass_campo.style.display="none"

    if (password.value == c_password.value){
        enviar.disabled= false;
        warning_campo.innerHTML = ``}
    else {
        enviar.disabled= true;
        warning_campo.innerHTML =`<p>*Senhas diferentes</p>`}
}