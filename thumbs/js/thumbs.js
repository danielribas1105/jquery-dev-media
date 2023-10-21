$(document).ready(function () {
    var btn_thumbs = $('#thumbs .icone');
    var contador = $('#thumbs .contador span');

    btn_thumbs.on('click', () => {
        var contagem = parseInt($('.contador span').text());
        $('.contador span').text(contagem + 1);
        //$('#msg').empty();
    });

    contador.on('click', () => {
        $('.contador span').text('0');
        var txt = $("<p>", { text: 'Contador reiniciado!!!' });
        $('#thumbs').after(txt);
    })

    /* Código Dev-media */
    /* 
        if(btn_thumb.hasClass('disabled')){
            return;
        }

        var contagem = parseInt(contador.text());
        contador.text(contagem + 1);

            btn_thumb.addClass('disabled');
        };
    */
});