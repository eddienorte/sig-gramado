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
var lyr_GRAMADO_CANELA0 = new ol.layer.Image({
                            opacity: 1,
                            title: "GRAMADO_CANELA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GRAMADO_CANELA0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [1609, 761],
                                imageExtent: [-5688011.174653, -3440471.416868, -5625483.243924, -3406534.465924]
                            })
                        });var format_Canela1 = new ol.format.GeoJSON();
var features_Canela1 = format_Canela1.readFeatures(json_Canela1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canela1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Canela1.addFeatures(features_Canela1);var lyr_Canela1 = new ol.layer.Vector({
                source:jsonSource_Canela1, 
                style: style_Canela1,
                title: '<img src="styles/legend/Canela1.png" /> Canela'
            });var format_Gramado2 = new ol.format.GeoJSON();
var features_Gramado2 = format_Gramado2.readFeatures(json_Gramado2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gramado2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gramado2.addFeatures(features_Gramado2);var lyr_Gramado2 = new ol.layer.Vector({
                source:jsonSource_Gramado2, 
                style: style_Gramado2,
                title: '<img src="styles/legend/Gramado2.png" /> Gramado'
            });var format_Gramado3 = new ol.format.GeoJSON();
var features_Gramado3 = format_Gramado3.readFeatures(json_Gramado3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gramado3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gramado3.addFeatures(features_Gramado3);var lyr_Gramado3 = new ol.layer.Vector({
                source:jsonSource_Gramado3, 
                style: style_Gramado3,
                title: 'Gramado<br />\
        <img src="styles/legend/Gramado3_0.png" /> RURAL<br />\
        <img src="styles/legend/Gramado3_1.png" /> URBANO<br />'
            });var format_Canela4 = new ol.format.GeoJSON();
var features_Canela4 = format_Canela4.readFeatures(json_Canela4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canela4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Canela4.addFeatures(features_Canela4);var lyr_Canela4 = new ol.layer.Vector({
                source:jsonSource_Canela4, 
                style: style_Canela4,
                title: 'Canela<br />\
        <img src="styles/legend/Canela4_0.png" /> RURAL<br />\
        <img src="styles/legend/Canela4_1.png" /> URBANO<br />'
            });var format_Ruas5 = new ol.format.GeoJSON();
var features_Ruas5 = format_Ruas5.readFeatures(json_Ruas5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruas5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ruas5.addFeatures(features_Ruas5);var lyr_Ruas5 = new ol.layer.Vector({
                source:jsonSource_Ruas5, 
                style: style_Ruas5,
                title: '<img src="styles/legend/Ruas5.png" /> Ruas'
            });var format_PontosTuristicos6 = new ol.format.GeoJSON();
var features_PontosTuristicos6 = format_PontosTuristicos6.readFeatures(json_PontosTuristicos6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosTuristicos6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PontosTuristicos6.addFeatures(features_PontosTuristicos6);var lyr_PontosTuristicos6 = new ol.layer.Vector({
                source:jsonSource_PontosTuristicos6, 
                style: style_PontosTuristicos6,
                title: '<img src="styles/legend/PontosTuristicos6.png" /> Pontos Turisticos'
            });var format_Hoteis7 = new ol.format.GeoJSON();
var features_Hoteis7 = format_Hoteis7.readFeatures(json_Hoteis7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteis7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hoteis7.addFeatures(features_Hoteis7);var lyr_Hoteis7 = new ol.layer.Vector({
                source:jsonSource_Hoteis7, 
                style: style_Hoteis7,
                title: '<img src="styles/legend/Hoteis7.png" /> Hoteis'
            });
var group_LimitesMunicpais = new ol.layer.Group({
                                layers: [lyr_Canela1,lyr_Gramado2,],
                                title: "Limites Municpais"});
var group_CensoIBGE = new ol.layer.Group({
                                layers: [lyr_Gramado3,lyr_Canela4,],
                                title: "Censo IBGE"});
var group_ImagemdeSatlite = new ol.layer.Group({
                                layers: [lyr_GRAMADO_CANELA0,],
                                title: "Imagem de Satélite"});

lyr_GRAMADO_CANELA0.setVisible(false);lyr_Canela1.setVisible(false);lyr_Gramado2.setVisible(false);lyr_Gramado3.setVisible(false);lyr_Canela4.setVisible(false);lyr_Ruas5.setVisible(false);lyr_PontosTuristicos6.setVisible(false);lyr_Hoteis7.setVisible(false);
var layersList = [baseLayer,group_ImagemdeSatlite,group_LimitesMunicpais,group_CensoIBGE,lyr_Ruas5,lyr_PontosTuristicos6,lyr_Hoteis7];
lyr_Canela1.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', });
lyr_Gramado2.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'POPULAÇÃ': 'POPULAÇÃ', 'ÁREA': 'ÁREA', 'BIOMA': 'BIOMA', 'ALTITUDE': 'ALTITUDE', 'FUNDADA': 'FUNDADA', });
lyr_Gramado3.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MICRO': 'NM_MICRO', 'NM_MESO': 'NM_MESO', });
lyr_Canela4.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MICRO': 'NM_MICRO', 'NM_MESO': 'NM_MESO', });
lyr_Ruas5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_PontosTuristicos6.set('fieldAliases', {'NOME': 'NOME', 'ENDEREÇO': 'ENDEREÇO', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'HORARIO': 'HORARIO', 'ABERTO': 'ABERTO', 'TELEFONE': 'TELEFONE', 'FOTO': 'FOTO', });
lyr_Hoteis7.set('fieldAliases', {'NOME': 'NOME', 'ENDEREÇO': 'ENDEREÇO', 'TELEFONE': 'TELEFONE', 'SITE': 'SITE', 'EMAIL': 'EMAIL', 'FOTO': 'FOTO', });
lyr_Canela1.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', });
lyr_Gramado2.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'POPULAÇÃ': 'TextEdit', 'ÁREA': 'TextEdit', 'BIOMA': 'TextEdit', 'ALTITUDE': 'TextEdit', 'FUNDADA': 'TextEdit', });
lyr_Gramado3.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODS': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MICRO': 'TextEdit', 'NM_MESO': 'TextEdit', });
lyr_Canela4.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODS': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MICRO': 'TextEdit', 'NM_MESO': 'TextEdit', });
lyr_Ruas5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_PontosTuristicos6.set('fieldImages', {'NOME': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'HORARIO': 'TextEdit', 'ABERTO': 'TextEdit', 'TELEFONE': 'TextEdit', 'FOTO': 'Photo', });
lyr_Hoteis7.set('fieldImages', {'NOME': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'TELEFONE': 'TextEdit', 'SITE': 'TextEdit', 'EMAIL': 'TextEdit', 'FOTO': 'Photo', });
lyr_Canela1.set('fieldLabels', {});
lyr_Gramado2.set('fieldLabels', {});
lyr_Gramado3.set('fieldLabels', {});
lyr_Canela4.set('fieldLabels', {});
lyr_Ruas5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_PontosTuristicos6.set('fieldLabels', {'NOME': 'inline label', 'ENDEREÇO': 'inline label', 'EMAIL': 'inline label', 'SITE': 'inline label', 'HORARIO': 'inline label', 'ABERTO': 'inline label', 'TELEFONE': 'inline label', 'FOTO': 'no label', });
lyr_Hoteis7.set('fieldLabels', {'NOME': 'inline label', 'ENDEREÇO': 'inline label', 'TELEFONE': 'inline label', 'SITE': 'inline label', 'EMAIL': 'inline label', 'FOTO': 'no label', });
lyr_Hoteis7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});