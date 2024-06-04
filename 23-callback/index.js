'use strict'

function validateField(isVisible, show, hide) {
    isVisible ? show() : hide()
}

let showField = function () {
    alert("Campo Visible")
}

let hideField = () => alert("Campo oculto")

validateField(false, showField, hideField) //---> Vallbacks function
