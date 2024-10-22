function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.355392, 86.077729],
                zoom: 13
            });

            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [55.355392, 86.077729] // координаты точки
                }
            });

            myMap.geoObjects.add(myGeoObject);

            var data = ymaps.geoXml.load("https://raw.githubusercontent.com/niczzzz/JavaScript/main/2024.07.07/track.kml");

            // Обработка полученного асинхронно ответа.
            data.then(function(res) {
            // Добавление объектов на карту.
            myMap.geoObjects.add(res.geoObjects);
            });
        }        