$(function() {

    $('button').on('click', function() {

        var first = parseInt($("#first").val());
        var second = parseInt($("#second").val());
        var result;
        var op = $(this).attr('id');
        switch (op) {
            case 'plus':
                result = first + second;
                break;
            case 'minus':
                result = first - second;
                break;
            case 'multiply':
                result = first * second;
                break;
            case 'delenie':
                if (second === 0) {
                    $("#result").val("На ноль делить нельзя");
                    return;
                }
                result = first / second;
                break;
        }
        $("#result").val(result);
    })


})
