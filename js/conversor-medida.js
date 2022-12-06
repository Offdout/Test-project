let valor = document.getElementById("valor");

valor.addEventListener('keyup', converter);
txtResultado = document.getElementById("resultado")

unidad1 = document.getElementById("unidad1");
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change', converter);

let resultado;

function converter() {
    if(valor.value=='') {
        return;
    }

    number = valor.value;
    number = parseFloat(number);

    if(unidad1.value == "Quilômetro" && unidad2.value=="Quilômetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Quilômetro" && unidad2.value=="Hectômetro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
        console.log(resultado)
    }

    if(unidad1.value == "Quilômetro" && unidad2.value=="Decâmetro") {
        resultado = number * 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Quilômetro" && unidad2.value=="Metro") {
        resultado = number * 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Quilômetro" && unidad2.value=="Decímetro") {
        resultado = number * 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Quilômetro" && unidad2.value=="Centímetro") {
        resultado = number * 100000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Quilômetro" && unidad2.value=="Milímetro") {
        resultado = number * 1000000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Hectômetro" && unidad2.value=="Quilômetro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Hectômetro" && unidad2.value=="Hectômetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Hectômetro" && unidad2.value=="Decâmetro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Hectômetro" && unidad2.value=="Metro") {
        resultado = number * 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Hectômetro" && unidad2.value=="Decímetro") {
        resultado = number * 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Hectômetro" && unidad2.value=="Centímetro") {
        resultado = number * 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Hectômetro" && unidad2.value=="Milímetro") {
        resultado = number * 100000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Decâmetro" && unidad2.value=="Quilômetro") {
        resultado = number / 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decâmetro" && unidad2.value=="Hectômetro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decâmetro" && unidad2.value=="Decâmetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decâmetro" && unidad2.value=="Metro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Decâmetro" && unidad2.value=="Decímetro") {
        resultado = number * 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decâmetro" && unidad2.value=="Centímetro") {
        resultado = number * 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decâmetro" && unidad2.value=="Milímetro") {
        resultado = number * 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Metro" && unidad2.value=="Quilômetro") {
        resultado = number / 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Metro" && unidad2.value=="Hectômetro") {
        resultado = number / 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Metro" && unidad2.value=="Decâmetro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Metro" && unidad2.value=="Metro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Metro" && unidad2.value=="Decímetro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Metro" && unidad2.value=="Centímetro") {
        resultado = number * 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Metro" && unidad2.value=="Milímetro") {
        resultado = number * 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Decímetro" && unidad2.value=="Quilômetro") {
        resultado = number / 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decímetro" && unidad2.value=="Hectômetro") {
        resultado = number / 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decímetro" && unidad2.value=="Decâmetro") {
        resultado = number / 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decímetro" && unidad2.value=="Metro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Decímetro" && unidad2.value=="Decímetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decímetro" && unidad2.value=="Centímetro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Decímetro" && unidad2.value=="Milímetro") {
        resultado = number * 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Centímetro" && unidad2.value=="Quilômetro") {
        resultado = number / 100000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Centímetro" && unidad2.value=="Hectômetro") {
        resultado = number / 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Centímetro" && unidad2.value=="Decâmetro") {
        resultado = number / 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Centímetro" && unidad2.value=="Metro") {
        resultado = number / 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Centímetro" && unidad2.value=="Decímetro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Centímetro" && unidad2.value=="Centímetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Centímetro" && unidad2.value=="Milímetro") {
        resultado = number * 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }



    if(unidad1.value == "Milímetro" && unidad2.value=="Quilômetro") {
        resultado = number / 1000000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Milímetro" && unidad2.value=="Hectômetro") {
        resultado = number / 100000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Milímetro" && unidad2.value=="Decâmetro") {
        resultado = number / 10000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Milímetro" && unidad2.value=="Metro") {
        resultado = number / 1000;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
    if(unidad1.value == "Milímetro" && unidad2.value=="Decímetro") {
        resultado = number / 100;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Milímetro" && unidad2.value=="Centímetro") {
        resultado = number / 10;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }

    if(unidad1.value == "Milímetro" && unidad2.value=="Milímetro") {
        resultado = number * 1;
        txtResultado.innerHTML = number + " " + unidad1.value + "/s equivalem a " + resultado + " " + unidad2.value;
    }
}