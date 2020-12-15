function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 33.843564965818864, 
            lng: -118.40862621729067
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 33.8493689567494, lng: -118.37633632763036 },
        { lat: 33.83998826203945, lng: -118.377187952221 },
        { lat: 33.830341564600545, lng: -118.36026950249416 }, 
        { lat: 33.745674761561176, lng: -118.38407486016706 }, 
        { lat: 33.78452023741008, lng: -118.39019537735862 },
        { lat: 33.85596910312406, lng: -118.3962147797529 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}