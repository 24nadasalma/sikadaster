var wms_layers = [];


        var lyr_Satelite_0 = new ol.layer.Tile({
            'title': 'Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMaps_1 = new ol.layer.Tile({
            'title': 'Open Street Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PLDesaGrabag_Clip_2 = new ol.format.GeoJSON();
var features_PLDesaGrabag_Clip_2 = format_PLDesaGrabag_Clip_2.readFeatures(json_PLDesaGrabag_Clip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLDesaGrabag_Clip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLDesaGrabag_Clip_2.addFeatures(features_PLDesaGrabag_Clip_2);
var lyr_PLDesaGrabag_Clip_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLDesaGrabag_Clip_2, 
                style: style_PLDesaGrabag_Clip_2,
                interactive: true,
    title: 'PLDesaGrabag_Clip<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_0.png" /> Irigasi<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_1.png" /> Ladang<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_2.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_3.png" /> Lahan Tidak Terbangun<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_4.png" /> Padang Rumput<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_5.png" /> Sawah Irigasi<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_6.png" /> Sungai<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_7.png" /> Tanah Kosong<br />\
    <img src="styles/legend/PLDesaGrabag_Clip_2_8.png" /> Tanaman Campuran<br />'
        });
var format_GrabagTanah_3 = new ol.format.GeoJSON();
var features_GrabagTanah_3 = format_GrabagTanah_3.readFeatures(json_GrabagTanah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrabagTanah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrabagTanah_3.addFeatures(features_GrabagTanah_3);
var lyr_GrabagTanah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrabagTanah_3, 
                style: style_GrabagTanah_3,
                interactive: true,
                title: '<img src="styles/legend/GrabagTanah_3.png" /> GrabagTanah'
            });

lyr_Satelite_0.setVisible(true);lyr_OpenStreetMaps_1.setVisible(true);lyr_PLDesaGrabag_Clip_2.setVisible(true);lyr_GrabagTanah_3.setVisible(true);
var layersList = [lyr_Satelite_0,lyr_OpenStreetMaps_1,lyr_PLDesaGrabag_Clip_2,lyr_GrabagTanah_3];
lyr_PLDesaGrabag_Clip_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Toponimi': 'Toponimi', 'Metadata': 'Metadata', 'Jns_Bnguna': 'Jns_Bnguna', 'Orde_1': 'Orde_1', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'Orde_2': 'Orde_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_m2': 'LUAS_m2', });
lyr_GrabagTanah_3.set('fieldAliases', {'Id': 'Id', 'Koor_X': 'Koor_X', 'Koor_Y': 'Koor_Y', 'Status_Bid': 'Status_Bid', 'Status_Kep': 'Status_Kep', 'NIB': 'NIB', 'Pemilik': 'Pemilik', 'Penggunaan': 'Penggunaan', 'NJOP': 'NJOP', 'HargaLahan': 'HargaLahan', 'Kecamatan': 'Kecamatan', 'Des_Kel': 'Des_Kel', 'Ketinggian': 'Ketinggian', 'Kemiringan': 'Kemiringan', 'Luas_Lahan': 'Luas_Lahan', });
lyr_PLDesaGrabag_Clip_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Tema': 'TextEdit', 'Jenis': 'TextEdit', 'Toponimi': 'TextEdit', 'Metadata': 'TextEdit', 'Jns_Bnguna': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'Orde_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_m2': 'TextEdit', });
lyr_GrabagTanah_3.set('fieldImages', {'Id': 'Range', 'Koor_X': 'TextEdit', 'Koor_Y': 'TextEdit', 'Status_Bid': 'TextEdit', 'Status_Kep': 'TextEdit', 'NIB': 'TextEdit', 'Pemilik': 'TextEdit', 'Penggunaan': 'TextEdit', 'NJOP': 'TextEdit', 'HargaLahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Des_Kel': 'TextEdit', 'Ketinggian': 'TextEdit', 'Kemiringan': 'TextEdit', 'Luas_Lahan': 'TextEdit', });
lyr_PLDesaGrabag_Clip_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Toponimi': 'no label', 'Metadata': 'no label', 'Jns_Bnguna': 'no label', 'Orde_1': 'no label', 'Orde_3': 'no label', 'Orde_4': 'no label', 'Orde_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LUAS_m2': 'no label', });
lyr_GrabagTanah_3.set('fieldLabels', {'Id': 'header label', 'Koor_X': 'header label', 'Koor_Y': 'header label', 'Status_Bid': 'header label', 'Status_Kep': 'header label', 'NIB': 'header label', 'Pemilik': 'header label', 'Penggunaan': 'header label', 'NJOP': 'header label', 'HargaLahan': 'header label', 'Kecamatan': 'header label', 'Des_Kel': 'header label', 'Ketinggian': 'header label', 'Kemiringan': 'header label', 'Luas_Lahan': 'header label', });
lyr_GrabagTanah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});