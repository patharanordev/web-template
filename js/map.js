
cartodb.createVis('map', 'https://patharanor.cartodb.com/api/v2/viz/adf5f1f0-12fc-11e6-8132-0e787de82d45/viz.json')
  .done(function(vis, layers) {
    // layer 0 is the base layer, layer 1 is cartodb layer
    // when setInteraction is disabled featureOver is triggered
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
      console.log(e, latlng, pos, data, layerNumber);
    });

    // you can get the native map to work with it
    var map = vis.getNativeMap();

    // now, perform any operations you need, e.g. assuming map is a L.Map object:
    // map.setZoom(3);
    // map.panTo([50.5, 30.5]);

    cartodb.createVis('map_bg', 'https://patharanor.cartodb.com/api/v2/viz/adf5f1f0-12fc-11e6-8132-0e787de82d45/viz.json')
      .done(function(vis_bg, layers_bg) {
        // layer 0 is the base layer, layer 1 is cartodb layer
        // when setInteraction is disabled featureOver is triggered
        layers_bg[1].setInteraction(true);
        layers_bg[1].on('featureOver', function(e_bg, latlng_bg, pos_bg, data_bg, layerNumber_bg) {
          console.log(e_bg, latlng_bg, pos_bg, data_bg, layerNumber_bg);
        });

        // you can get the native map to work with it
        var map_bg = vis_bg.getNativeMap();

        // now, perform any operations you need, e.g. assuming map is a L.Map object:
        // map.setZoom(3);
        // map.panTo([50.5, 30.5]);

        
      });
  });