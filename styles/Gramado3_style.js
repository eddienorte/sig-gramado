var size = 0;
function categories_Gramado3(feature, value, size) {
                switch(value) {case 'RURAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,212,1.0)'})
    })];
                    break;
case 'URBANO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,153,41,1.0)'})
    })];
                    break;}};
var styleCache_Gramado3={}
var style_Gramado3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TIPO");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = categories_Gramado3(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_Gramado3[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Gramado3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Gramado3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};