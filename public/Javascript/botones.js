$(function () {

    leer();
    // crear
    $('#create-form').on('submit', function (event) {
        event.preventDefault();
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var direccion = $('#direccion').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();

        var data = {
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            correo: correo,
            telefono: telefono
        }

        console.log(data);

        $.ajax({
            url: '/registrar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ data_registrar: data }),
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
                            <td class="id">' + data.Id + '</td>\
                            <td><input type="text" class="name" value="' + data.Nombre + '"></td>\
                            <td><input type="text" class="name" value="' + data.Apellido + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
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
