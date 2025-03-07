function procesarCompra() {
    let tipoDulce = Number(document.getElementById('tipoDulce').value);
    let cantidad = Number(document.getElementById('cantidad').value);
    let valorIngresado = Number(document.getElementById('valorIngresado').value);

    let precioChocolatina = 700;
    let precioRefresco = 2500;
    let total = 0;
    let mensaje = '';

    if (tipoDulce === 1) {
        total = precioChocolatina * cantidad;
    } else if (tipoDulce === 2) {
        total = precioRefresco * cantidad;
    } else {
        mensaje = 'Seleccione un producto válido.';
        document.getElementById('resultado').innerText = mensaje;
        return;
    }

    if (valorIngresado < total) {
        mensaje = `Dinero insuficiente. El total es $${total}, pero solo ingresó $${valorIngresado}.`;
    } else {
        let devuelta = valorIngresado - total;
        mensaje = `El total a pagar es $${total}. Su cambio es $${devuelta}. ¡Gracias por su compra!`;
    }

    document.getElementById('resultado').innerText = mensaje;
}