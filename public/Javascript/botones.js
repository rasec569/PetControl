$(function () {

    leer();
    // crear
    $('#create-form').on('submit', function (event) {
        event.preventDefault();
        var identificacion = $('#identificacion').val();
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var telefono = $('#telefono').val();
        var rol = $('#rol').val();

        var data = {
            identificacion: Identificacion,
            nombre: Nombre,
            apellido: Apellido,
            telefono: Telefono,
            rol: Fk_Rol
        }

        console.log('Hola' + data);

        $.ajax({
            url: '/registrar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ data: data_registrar}),
            success: function (response) {
                console.log(response);
                leer();
                alert('Exito');
            }
        });


    });

function leer (){

     $.ajax({
            url: '/traer',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');
                console.log(response);
                response.forEach(function(data) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + data.Identificacion + '</td>\
                            <td><input type="text" class="name" value="' + data.Nombre + '"></td>\
                            <td><input type="text" class="name" value="' + data.Apellido + '"></td>\
                            <td><input type="text" class="name" value="' + data.Telefono + '"></td>\
                            <td>'+ data.Fk_Rol + '</td>\
                            <td>\
                                <button class="update-button">Actualizar</button>\
                                <button class="delete-button">Eliminar</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    
}
    // obtener

        $('#get-button').on('click', function() {
        leer();
    });
});
