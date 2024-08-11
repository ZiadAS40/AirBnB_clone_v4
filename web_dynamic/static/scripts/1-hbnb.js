$('document').ready(function() {
    $('input[type="checkbox"]').change(function() {
        const aminObj = {}
        if ($(this).is(':checked')) {
            aminObj[$(this).attr('date-name')] = $(this).attr('date-id');
        } else if ($(this).is(':not(checked)')) {
            delete aminObj[$(this).att('data-name')];
        }

        const names = Object.keys(aminObj);
        $('.amenities h4').text(names.sort().join(', '));
    });
})
