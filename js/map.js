
function initMap() {
    var latitude = 59.959688,
        longitude = 30.281606,
        latitudeMap = 59.95238,
        lonqitudeMap = 30.219209,
        map_zoom = 13;
    var style = [{
        featureType: 'all',
        stylers: [
            {saturation: -100}]
    },{featureType: 'water',
        skylers: [
            {saturation: 1}]}];
    var map_options = {
        center: new google.maps.LatLng(latitudeMap, lonqitudeMap),
        zoom: map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        styles: style
    };
    var map = new google.maps.Map(document.getElementById('map'), map_options);
    var image = 'img/map_marker.png';
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        icon: image,
    });
}

