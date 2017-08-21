var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Gramado0 = new ol.format.GeoJSON();
var features_Gramado0 = format_Gramado0.readFeatures(json_Gramado0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gramado0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gramado0.addFeatures(features_Gramado0);var lyr_Gramado0 = new ol.layer.Vector({
                source:jsonSource_Gramado0, 
                style: style_Gramado0,
                title: '<img src="styles/legend/Gramado0.png" /> Gramado'
            });var format_Ruas1 = new ol.format.GeoJSON();
var features_Ruas1 = format_Ruas1.readFeatures(json_Ruas1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruas1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ruas1.addFeatures(features_Ruas1);var lyr_Ruas1 = new ol.layer.Vector({
                source:jsonSource_Ruas1, 
                style: style_Ruas1,
                title: '<img src="styles/legend/Ruas1.png" /> Ruas'
            });var format_PontosTuristicos2 = new ol.format.GeoJSON();
var features_PontosTuristicos2 = format_PontosTuristicos2.readFeatures(json_PontosTuristicos2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosTuristicos2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PontosTuristicos2.addFeatures(features_PontosTuristicos2);var lyr_PontosTuristicos2 = new ol.layer.Vector({
                source:jsonSource_PontosTuristicos2, 
                style: style_PontosTuristicos2,
                title: '<img src="styles/legend/PontosTuristicos2.png" /> Pontos Turisticos'
            });var format_Hoteis3 = new ol.format.GeoJSON();
var features_Hoteis3 = format_Hoteis3.readFeatures(json_Hoteis3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteis3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hoteis3.addFeatures(features_Hoteis3);var lyr_Hoteis3 = new ol.layer.Vector({
                source:jsonSource_Hoteis3, 
                style: style_Hoteis3,
                title: '<img src="styles/legend/Hoteis3.png" /> Hoteis'
            });

lyr_Gramado0.setVisible(false);lyr_Ruas1.setVisible(false);lyr_PontosTuristicos2.setVisible(false);lyr_Hoteis3.setVisible(false);
var layersList = [baseLayer,lyr_Gramado0,lyr_Ruas1,lyr_PontosTuristicos2,lyr_Hoteis3];
lyr_Gramado0.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'POPULAÇÃ': 'POPULAÇÃ', 'ÁREA': 'ÁREA', 'BIOMA': 'BIOMA', 'ALTITUDE': 'ALTITUDE', 'FUNDADA': 'FUNDADA', });
lyr_Ruas1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_PontosTuristicos2.set('fieldAliases', {'NOME': 'NOME', 'ENDEREÇO': 'ENDEREÇO', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'HORARIO': 'HORARIO', 'ABERTO': 'ABERTO', 'TELEFONE': 'TELEFONE', 'FOTO': 'FOTO', });
lyr_Hoteis3.set('fieldAliases', {'NOME': 'NOME', 'ENDEREÇO': 'ENDEREÇO', 'TELEFONE': 'TELEFONE', 'SITE': 'SITE', 'EMAIL': 'EMAIL', 'FOTO': 'FOTO', });
lyr_Gramado0.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'POPULAÇÃ': 'TextEdit', 'ÁREA': 'TextEdit', 'BIOMA': 'TextEdit', 'ALTITUDE': 'TextEdit', 'FUNDADA': 'TextEdit', });
lyr_Ruas1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_PontosTuristicos2.set('fieldImages', {'NOME': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'HORARIO': 'TextEdit', 'ABERTO': 'TextEdit', 'TELEFONE': 'TextEdit', 'FOTO': 'Photo', });
lyr_Hoteis3.set('fieldImages', {'NOME': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'TELEFONE': 'TextEdit', 'SITE': 'TextEdit', 'EMAIL': 'TextEdit', 'FOTO': 'Photo', });
lyr_Gramado0.set('fieldLabels', {'NM_MUNICIP': 'inline label', 'CD_GEOCMU': 'inline label', 'POPULAÇÃ': 'inline label', 'ÁREA': 'inline label', 'BIOMA': 'inline label', 'ALTITUDE': 'inline label', 'FUNDADA': 'inline label', });
lyr_Ruas1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_PontosTuristicos2.set('fieldLabels', {'NOME': 'inline label', 'ENDEREÇO': 'inline label', 'EMAIL': 'inline label', 'SITE': 'inline label', 'HORARIO': 'inline label', 'ABERTO': 'inline label', 'TELEFONE': 'inline label', 'FOTO': 'no label', });
lyr_Hoteis3.set('fieldLabels', {'NOME': 'inline label', 'ENDEREÇO': 'inline label', 'TELEFONE': 'inline label', 'SITE': 'inline label', 'EMAIL': 'inline label', 'FOTO': 'no label', });
lyr_Hoteis3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});