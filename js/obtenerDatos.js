document.addEventListener('DOMContentLoaded',
function(event){
    /*Verifico que el formulario y el script esten conectados entre si */
    console.log("Conectado")
    /**
    * Capturo los datos del formulario 
    */
    let miFormulario = document.getElementById("miFormulario")
    miFormulario.addEventListener('submit', function(event){
        event.preventDefault()
        let cmbFuncion = document.getElementById("cmbFuncion").value
        console.log(`${cmbFuncion}`)
        /**
         * Con esto se limpia el formulario
         * document.getElementById('cmbFuncion').value = ''
         */
        let cmbMetodo = document.getElementById('cmbMetodo').value
        let txtA = document.getElementById('txtA').value
        let txtB = document.getElementById('txtB').value
        let txtTol = document.getElementById('txtTolerancia').value
        console.log(`${cmbFuncion + cmbMetodo + txtA + txtB + txtTol}`)
    })
})