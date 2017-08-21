var size = 0;

var styleCache_Hoteis3={}
var style_Hoteis3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
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
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0327586206897,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/accommodation_bed_and_breakfast.svg"
            })
    })];
    key = value + "_" + labelText
    if (!styleCache_Hoteis3[key]){
        var text = new ol.style.Text({
                font: '14.3px \'Ubuntu\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Hoteis3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Hoteis3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};