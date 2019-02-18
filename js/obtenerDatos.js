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
        if (cmbMetodo == 1) {
            Calcular.prototype.biseccion(cmbFuncion, txtA, txtB, txtCifras);
        }
        if(cmbMetodo == 2){
            Calcular.prototype.falsaPosicion(cmbFuncion, txtA, txtB, txtCifras);
        }
        if (cmbMetodo == 3) {
            Calcular.prototype.newtonRaphson(cmbFuncion, txtA, txtB, txtCifras);
        }
    })
})

class Calcular{
    biseccion(f, a, b, cifras){
        var xi, xu, xr,nivelTol,convergencia;
        //1 -> valores iniciales
        xi = a;
        xu = b;
        //2 -> Verificar cambio de signo
        var fxi = Utilidades.prototype.evalFuncion(f,xi);
        var fxu = Utilidades.prototype.evalFuncion(f,xu);
        //console.log(`xi = ${xi} xu = ${xu}`);
        //console.log(`fxi: ${fxi} fxu: ${fxu}`);
        if (fxi*fxu < 0) {
            //3
            nivelTol = (0.5*Math.pow(10, (2 - cifras))) / 100;
            console.log(`${nivelTol}`);
            //4
            convergencia = (Math.log((b - a)/(nivelTol))) / (Math.log(2));
            xr = (eval(xi) + eval(xu)) / 2;
            console.log(`convergencia: ${convergencia} xr = ${xr}`);
            for (let index = 0; index < convergencia; index++) {
                //console.log(`fxr: ${Utilidades.prototype.evalFuncion(f, xr)} fxi: ${Utilidades.prototype.evalFuncion(f, xi)}`);
                var fxr = eval(Utilidades.prototype.evalFuncion(f, xr));
                fxi = eval(Utilidades.prototype.evalFuncion(f, xi));
                if (eval(fxr)*eval(fxi) > 0) {
                    //console.log(`fxr: ${Utilidades.prototype.evalFuncion(f, xr)} fxi: ${Utilidades.prototype.evalFuncion(f, xi)}`);
                    xi = xr;
                } else {
                    xu = xr;
                }
                xr = (eval(xi) + eval(xu)) / 2;
            }
            console.log(`xr: ${xr}`);
        } else {
            console.log("No existe raiz en el intervalo");
        }
    }

    falsaPosicion(f, a, b, cifras){
        console.log('Estas en falsa posicion');
        var xi, xu, xr,nivelTol,convergencia;
        //1 -> valores iniciales
        xi = a;
        xu = b;
        //2 -> Verificar cambio de signo
        var fxi = Utilidades.prototype.evalFuncion(f,xi);
        var fxu = Utilidades.prototype.evalFuncion(f,xu);
        //console.log(`xi = ${xi} xu = ${xu}`);
        //console.log(`fxi: ${fxi} fxu: ${fxu}`);
        if (fxi*fxu < 0) {
            //3
            nivelTol = (0.5*Math.pow(10, (2 - cifras))) / 100;
            console.log(`${nivelTol}`);
            //4
            convergencia = (Math.log((b - a)/(nivelTol))) / (Math.log(2));
            xr = eval(xu) - ((eval(Utilidades.prototype.evalFuncion(f, xu))*(eval(xi) - eval(xu)))/(eval(Utilidades.prototype.evalFuncion(f, xi)) - eval(Utilidades.prototype.evalFuncion(f, xu))));
            console.log(`convergencia: ${convergencia} xr = ${xr}`);
            for (let index = 0; index < convergencia; index++) {
                //console.log(`fxr: ${Utilidades.prototype.evalFuncion(f, xr)} fxi: ${Utilidades.prototype.evalFuncion(f, xi)}`);
                var fxr = eval(Utilidades.prototype.evalFuncion(f, xr));
                fxi = eval(Utilidades.prototype.evalFuncion(f, xi));
                if (eval(fxr)*eval(fxi) > 0) {
                    //console.log(`fxr: ${Utilidades.prototype.evalFuncion(f, xr)} fxi: ${Utilidades.prototype.evalFuncion(f, xi)}`);
                    xi = xr;
                } else {
                    xu = xr;
                }
                xr = eval(xu) - ((eval(Utilidades.prototype.evalFuncion(f, xu))*(eval(xi) - eval(xu)))/(eval(Utilidades.prototype.evalFuncion(f, xi)) - eval(Utilidades.prototype.evalFuncion(f, xu))));
            }
            console.log(`xr: ${xr}`);
        } else {
            console.log("No existe raiz en el intervalo");
        }
        
    }

    newtonRaphson(f, a, b, da, db, cifras){
        console.log('Estas en newton');
    }

    grafico(f, a, b){
        console.log('Estas en modo grafico');
    }
}


class Utilidades{evalFuncion(f, dato){
        var x = dato;
        var evaluacion = eval(f);
        return evaluacion;
    }
}