ymaps.ready()
    .done(function (ym) {
        var myMap = new ym.Map('YMapsID', {
            center: [86.077729, 55.355392], 
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

        jQuery.getJSON('data.json', function (json) {
         
            var geoObjects = ym.geoQuery(json)
                    .addToMap(myMap)
                    .applyBoundsToMap(myMap, {
                        checkZoomRange: true
                    });
        });
    });