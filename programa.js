function cargarMapa() {
    let mapa = L.map('divMapa', { center: [4.610048061907123, -74.15505409240723], zoom: 15 });

    let mosaico = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 20,
        id: 'mapbox.streets'
    });
    
  

    


    mosaico.addTo(mapa);
    

    
     var markerCasaa=L.marker([4.6098341793526725,-74.15088057518005]).addTo(mapa);
     markerCasaa.bindPopup("los postres mas ricos").openPopup();
     var markerBogota=L.marker([ 4.607567020318201, -74.14989352226257,]).addTo(mapa);
     markerBogota.bindPopup("La casa de los abuelitos").openPopup();
     var markerC=L.marker([4.610037367780934,-74.15108442306519,]).addTo(mapa);
     markerC.bindPopup("El karaoke de los sabados").openPopup();
     var markerD=L.marker([4.608422552878874, -74.15402412414551]).addTo(mapa);
     markerD.bindPopup("El corazon de timiza").openPopup();





   

    let polygonBogota = L.polygon([
        [4.607994786727236, -74.16136264801025],
        [4.603588780389976,-74.15093421936035],
        [4.607823680194504,-74.14853096008301],
        [4.6085508826741615,-74.1487455368042],
        [4.613855160601556, -74.15239334106445,],
        [4.614667909364487,-74.15471076965332],
        [4.614411251960939,-74.15659904479979],
        [4.612486318476779,-74.158616065979],
        [4.611588014398499,-74.16097640991211],
        [4.607994786727236,-74.16136264801025]
    ]).addTo(mapa);

    mosaico.addTo(mapa);
   
    

    function onMapClick(e) {
        popup
        
            .setLatLng(e.latlng)
            .setContent()
            .openOn(mapa);
    }
    
    mapa.on('click', onMapClick);

}

