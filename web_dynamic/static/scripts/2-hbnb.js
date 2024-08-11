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
    $.getJSON("http://0.0.0.0:5001/api/v1/status/", (response) => {
		if (response.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
