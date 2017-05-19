var ajax = new XMLHttpRequest(); // We create the HTTP Object
function getCitiesFromProvince() {
    "use strict";
    var province, url;
    province = document.getElementById("provSelect").value;
    url = "cities_from_province.php?prov=" + window.encodeURI(province);
    ajax.open("GET", url, true);
    ajax.onreadystatechange = handleHttpResponse;
    ajax.send(null);
}
function handleHttpResponse() {
    "use strict";
    var cities;
    if (ajax.readyState == 4 && ajax.status == 200) {
        cities = ajax.responseText;
        cities = cities.split("~");
        
        //added animation
        var animation = document.getElementById("animation");
        var image = document.createElement("img");
        image.src = ("images/ajax-loader.gif");
        animation.appendChild(image);
        document.getElementById("animation").style.display = "block";
        
        document.getElementById("citySelect").options.length=0;
        for (var i = 0; i < cities.length; i++) {
            document.getElementById("citySelect").options[i] = new Option(cities[i]);
        }
        //function to animation time
     setInterval(function(){
        animation.removeChild(image);
     }, 1000);
    }
}