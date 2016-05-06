

  //Create the leaflet map
  var map_bg = L.map('map_bg', {
      zoomControl: false,
      center: [39.583,2.670],
      zoom: 12
  });

  var map = L.map('map', {
      zoomControl: false,
      center: [39.583,2.670],
      zoom: 12
  });

  var basemap_bg = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map_bg);

  var basemap_phone = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map);

  //Layers definition
  // var layers = {
  //   'smartphone': {
  //     sql: 'SELECT * FROM untitled_table'//,
  //     //cartocss: '#layer{polygon-fill: #D6301D;polygon-opacity: 0.7;}'
  //   }
  // };


  // Empty layer
  cartodb.createLayer(map,{
      user_name: 'patharanor',
      type: 'cartodb',
      sublayers: []
    }, 'https://patharanor.cartodb.com/api/v2/viz/869f8dec-1346-11e6-9a97-0e787de82d45/viz.json')
    .addTo(map)
    .done(function(layer){
      // When the layers inputs change fire this
      // $("input[name='layer']").change(function(){

      //   // Clear the sublayers
      //   layer.getSubLayers().forEach(function(sublayer){sublayer.remove()});

      //   // For every check activated, add a sublayer
      //   $.each($("input[name='layer']:checked"), function(){
      //       layer.createSubLayer(layers[$(this).attr("id")]);
      //   });
      // });


    
  });

  cartodb.createLayer(map_bg,{
      user_name: 'patharanor',
      type: 'cartodb',
      sublayers: []
    }, 'https://patharanor.cartodb.com/api/v2/viz/adf5f1f0-12fc-11e6-8132-0e787de82d45/viz.json')
    .addTo(map_bg)
    .done(function(layer){
      // When the layers inputs change fire this
      // $("input[name='layer']").change(function(){

      //   // Clear the sublayers
      //   layer.getSubLayers().forEach(function(sublayer){sublayer.remove()});

      //   // For every check activated, add a sublayer
      //   $.each($("input[name='layer']:checked"), function(){
      //       layer.createSubLayer(layers[$(this).attr("id")]);
      //   });
      // });
  });
