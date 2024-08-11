$('document').ready(function() {
    $('.amenities .popover input').change(function() {
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
    $.post({
		url: `${HOST}/api/v1/places_search`,
		data: JSON.stringify({}),
		headers: {
			"Content-Type": "application/json",
		},
		success: (response) => {
			response.forEach((place) =>
				$("section.places").append(
					`<article>
			<div class="title_box">
			<h2>${place.name}</h2>
			<div class="price_by_night">$${place.price_by_night}</div>
			</div>
			<div class="information">
			<div class="max_guest">${place.max_guest} Guest${
						place.max_guest !== 1 ? "s" : ""
					}</div>
			<div class="number_rooms">${place.number_rooms} Bedroom${
						place.number_rooms !== 1 ? "s" : ""
					}</div>
			<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
						place.number_bathrooms !== 1 ? "s" : ""
					}</div>
			</div> 
			<div class="description">
			${place.description}
			</div>
				</article>`
				)
			);
		},
		dataType: "json",
	});
    $('.location .popover input').change(function() {
        const aminObj = {}
        if ($(this).is(':checked')) {
            aminObj[$(this).attr('date-name')] = $(this).attr('date-id');
        } else if ($(this).is(':not(checked)')) {
            delete aminObj[$(this).att('data-name')];
        }

        const names = Object.keys(aminObj);
        $('.location h4').text(names.sort().join(', '));
    });
});
