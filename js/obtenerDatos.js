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
        /**
         * Con esto se limpia el formulario
         * document.getElementById('cmbFuncion').value = ''
         */
        let cmbMetodo = document.getElementById('cmbMetodo').value
        let txtA = document.getElementById('txtA').value
        let txtB = document.getElementById('txtB').value
        let txtCifras = document.getElementById('txtCifras').value
        //console.log(`${cmbFuncion + cmbMetodo + txtA + txtB + txtTol}`)
        //Calcular.prototype.prueba();
        Utilidades.prototype.evalFuncion(cmbFuncion, 2.9);
        Calcular.prototype.biseccion(cmbFuncion, txtA, txtB, txtCifras)
    })
    
})

class Calcular{
    biseccion(f, a, b, cifras){
        var xi, xu, xr,nivelTol,error,convergencia;
        //1 -> valores iniciales
        xi = a;
        xu = b;
        //2 -> Verificar cambio de signo
        var fxi = Utilidades.prototype.evalFuncion(f,xi);
        var fxu = Utilidades.prototype.evalFuncion(f,xu);
        console.log(`xi = ${xi} xu = ${xu}`);
        console.log(`fxi: ${fxi} fxu: ${fxu}`);
        if (fxi*fxu < 0) {
            //3
            nivelTol = 0.5*Math.pow(10, (2 - cifras));
            //4
            convergencia = ((b - a)/(nivelTol)) / (Math.log(2));
            xr = (eval(xi) + eval(xu)) / 2;
            console.log(`convergencia: ${convergencia} xr = ${xr}`);
            for (let index = 0; index < convergencia; index++) {
                //console.log("Holi desde for");
                console.log(`xr: ${xr}`);
                if (Utilidades.prototype.evalFuncion(xr)*Utilidades.prototype.evalFuncion(xi) > 0) {
                    //console.log('1');
                    console.log(`fxr: ${Utilidades.prototype.evalFuncion(xr)} fxi: ${Utilidades.prototype.evalFuncion(xi)}`);
                    xi = xr;
                } else {
                    //console.log('2');
                    console.log(`fxr: ${Utilidades.prototype.evalFuncion(xr)} fxi: ${Utilidades.prototype.evalFuncion(xi)}`);
                    xu = xr;
                }
                xr = (eval(xi) + eval(xu)) / 2;
            }
            console.log(`xr: ${xr}`);
        } else {
            console.log("No existe raiz en el intervalo");
        }
    }
}

class Utilidades{evalFuncion(f, dato){
        var x = dato;
        var evaluacion = eval(f);
        return evaluacion;
    }
}