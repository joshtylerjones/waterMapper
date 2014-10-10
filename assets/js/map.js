// $(function () {
//   console.log( "ready" );

(onload=function(){

L.mapbox.accessToken = 'pk.eyJ1Ijoiam9zaHR5bGVyam9uZXMiLCJhIjoiSjM5RDZYQSJ9.zpfn9d3RJdfHGNqh0Ak9Pw';
var map = L.map('map').setView([48.726303, -122.330704], 10);
map.options.maxZoom = 16;
map.options.minZoom =3;

L.control.scale().addTo(map);

//Add Basemap Options - 3 from Stamen right now
// var watercolor = new L.StamenTileLayer("watercolor");
//var satellite = new L.TileLayer("//otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png");
var stamenTerrain = new L.StamenTileLayer("terrain-background");  //replace with "terrain"
// var whatcom = L.mapbox.tilelayer('joshtylerjones.comeON');


map.addLayer(stamenTerrain);
// map.addLayer(whatcom)

});

/* Create Infoboxes from HTML Info Windows */

// var infoBox = document.getElementById('info_window'),
//     infoBox2 = document.getElementById('info_window2');
//     salmonLegendJS = document.getElementById('salmonLegend')


/* Chinook Fall & UTF GRID*/

// var chinookFall = new L.tileLayer('//gis-01.ridolfi.com/tiles/chinookFall4/{z}/{x}/{y}.png');

// var utfGridChinookFall = new L.UtfGrid('//gis-01.ridolfi.com/tiles/chinookFall4/{z}/{x}/{y}.grid.json', {
//   useJsonP: false
//     });

// var chinookFallCombo = new L.layerGroup([utfGridChinookFall,chinookFall]);

// utfGridChinookFall.on('mouseover', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.innerHTML += "<h2>" + "Population:" +  " " + "</h2>" + e.data.DPS + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13);  
// infoBox.innerHTML += "<h2>" + "Status: " + "</h2>" + e.data.Status + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13); 
// infoBox.innerHTML += "<h2>" + "Access Condition: " + "</h2>" + e.data.Class + String.fromCharCode(13);
// infoBox.innerHTML +=  String.fromCharCode(13);
// infoBox.style.display = "block";
//   });

// utfGridChinookFall.on('mouseout', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.style.display = "none";
// infoBox.innerHTML = ""
//   });


/* Chinook Non-Seasonal & UTF GRID */

// var chinookNonSeasonal = new L.tileLayer('//gis-01.ridolfi.com/tiles/chinookNonSeasonal/{z}/{x}/{y}.png');

// var utfGridChinookNonSeasonal = new L.UtfGrid('//gis-01.ridolfi.com/tiles/chinookNonSeasonal/{z}/{x}/{y}.grid.json', {
//   useJsonP: false
//     });

// var chinookNonSeasonalCombo = new L.layerGroup([utfGridChinookNonSeasonal,chinookNonSeasonal]);

// utfGridChinookNonSeasonal.on('mouseover', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.innerHTML += "<h2>" + "Population:" +  " " + "</h2>" + e.data.DPS + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13);  
// infoBox.innerHTML += "<h2>" + "Status: " + "</h2>" + e.data.Status + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13); 
// infoBox.innerHTML += "<h2>" + "Access Condition: " + "</h2>" + e.data.Class + String.fromCharCode(13);
// infoBox.innerHTML +=  String.fromCharCode(13);
// infoBox.style.display = "block";
//   });

// utfGridChinookNonSeasonal.on('mouseout', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.style.display = "none";
// infoBox.innerHTML = ""
//   });


// /* Chinook Winter & UTF GRID */ 

// var chinookWinter = new L.tileLayer('//gis-01.ridolfi.com/tiles/chinookWinter2/{z}/{x}/{y}.png');

// var utfGridChinookWinter = new L.UtfGrid('//gis-01.ridolfi.com/tiles/chinookWinter2/{z}/{x}/{y}.grid.json', {
//   useJsonP: false
//     });

// var chinookWinterCombo = new L.layerGroup([utfGridChinookWinter,chinookWinter]);

// utfGridChinookWinter.on('mouseover', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.innerHTML += "<h2>" + "Population:" +  " " + "</h2>" + e.data.DPS + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13);  
// infoBox.innerHTML += "<h2>" + "Status: " + "</h2>" + e.data.Status + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13); 
// infoBox.innerHTML += "<h2>" + "Access Condition: " + "</h2>" + e.data.Class + String.fromCharCode(13);
// infoBox.innerHTML +=  String.fromCharCode(13);
// infoBox.style.display = "block";
//   });

// utfGridChinookWinter.on('mouseout', function (e) {
// var infoBox = document.getElementById('info_window')
// infoBox.style.display = "none";
// infoBox.innerHTML = ""
//   });



// /* Chinook Spring & UTF GRID */

// var chinookSpring = new L.tileLayer('//gis-01.ridolfi.com/tiles/chinookSpring/{z}/{x}/{y}.png');

// var utfGridChinookSpring = new L.UtfGrid('//gis-01.ridolfi.com/tiles/chinookSpring/{z}/{x}/{y}.grid.json',{
//   useJsonP: false
//     });

// var chinookSpringCombo = new L.layerGroup([utfGridChinookSpring,chinookSpring]);

// utfGridChinookSpring.on('mouseover', function (e) {
// infoBox = document.getElementById('info_window')

// infoBox.innerHTML += "<h2>" + "Population:" +  " " + "</h2>" + e.data.DPS + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13);  
// infoBox.innerHTML += "<h2>" + "Status: " + "</h2>" + e.data.Status + String.fromCharCode(13);
// infoBox.innerHTML += String.fromCharCode(13); 
// infoBox.innerHTML += "<h2>" + "Access Condition: " + "</h2>" + e.data.Class + String.fromCharCode(13);
// infoBox.innerHTML +=  String.fromCharCode(13);

// infoBox.style.display = "block";
//   });

// utfGridChinookSpring.on('mouseout', function (e) {
// infoBox = document.getElementById('info_window')
// infoBox.style.display = "none";
// infoBox.innerHTML = ""
//   });




// /* Salmon Barriers & UTFGRID */

// var salmonBarriers = new L.tileLayer('//gis-01.ridolfi.com/tiles/US_Barriers1/{z}/{x}/{y}.png');

// var utfGridSalmonBarriers = new L.UtfGrid('//gis-01.ridolfi.com/tiles/US_Barriers1/{z}/{x}/{y}.grid.json', {
//   useJsonP: false
//     });

// var barriers = L.layerGroup([utfGridSalmonBarriers, salmonBarriers]);

// utfGridSalmonBarriers.on('mouseover', function (e) {
// var infoBox2 = document.getElementById('info_window2')
// infoBox2.innerHTML += "<h3>" + "Barrier Type:" +  " " + "</h3>" + e.data.BarrierT_1 + String.fromCharCode(13);
// infoBox2.innerHTML += String.fromCharCode(13);  
// infoBox2.innerHTML += "<h3>" + "Fishway Type: " + "</h3>" + e.data.FishwayT_1 + String.fromCharCode(13);
// infoBox2.innerHTML += String.fromCharCode(13); 
// infoBox2.innerHTML += "<h3>" + "Location Name: " + "</h3>" + e.data.Name + String.fromCharCode(13);
// infoBox2.innerHTML +=  String.fromCharCode(13);
// infoBox2.style.display = "block";
//   });


// // utfGridSalmonBarriers.on('mousemove', function (e) {
//     // console.log('move: ' + e.data.Status);
//   // });

// utfGridSalmonBarriers.on('mouseout', function (e) {
// var infoBox2 = document.getElementById('info_window2')
// infoBox2.style.display = "none";
// infoBox2.innerHTML = "";
// // salmonLegendJS.style.display = "none";
//   });

// salmonLegendJS.style.display = "block";
// salmonLegendJS.style.display = "none";
// salmonLegendJS.innerHTML = "";



/* Layer Switcher */

// L.control.layers({
//   'Chinook Non Seasonal': chinookNonSeasonalCombo.addTo(map),
//   'Chinook Fall': chinookFallCombo,
//   'Chinook Spring': chinookSpringCombo,
//   'Chinook Winter': chinookWinterCombo,
// }, {
//   'Salmon Barriers': barriers,
//   }).addTo(map);


/* Add Necessary Layers */

// map.addLayer(satellite);

// map.addLayer(watercolor);
// map.addLayer(chinookFall);
//map.addLayer(chinookNonSeasonal);
//map.addLayer(utfGridChinookNonSeasonal);
// map.addLayer(salmonBarriers);
// map.addLayer(utfGridSalmonBarriers);
// map.addLayer(chinookWinterCombo);
// map.addLayer(chinookSpringCombo);
// map.addLayer(chinookNonSeasonalCombo);


/* Console Log Tests */

// console.log(utfGridChinookNonSeasonal);
// console.log(chinookNonSeasonalCombo);
// console.log(salmonBarriers);
// console.log(utfGridSalmonBarriers);
// console.log(chinookSpring);
// console.log(chinookWinter);
// console.log(chinookSpring);



