// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"Adatok hozz\u00e1ad\u00e1sa",noOptionsConfigured:"Nincsenek be\u00e1ll\u00edt\u00e1sok konfigur\u00e1lva.",tabs:{search:"Keres\u00e9s",url:"URL",file:"F\u00e1jl"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"A r\u00e9teg nem \u00e9rhet\u0151 el.",loadError:"AddData, a bet\u00f6lt\u00e9s nem siker\u00fclt:",searchBox:{search:"Keres\u00e9s",placeholder:"Keres\u00e9s..."},bboxOption:{bbox:"A t\u00e9rk\u00e9pen bel\u00fcl"},
scopeOptions:{anonymousContent:"Tartalom",myContent:"Saj\u00e1t tartalom",myOrganization:"Saj\u00e1t szervezet",curated:"Adatfelel\u0151st\u0151l",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"Rendez\u00e9si szempont:",relevance:"Fontoss\u00e1g",title:"C\u00edm",owner:"Tulajdonos",rating:"\u00c9rt\u00e9kel\u00e9s",views:"Megtekint\u00e9sek",date:"D\u00e1tum",switchOrder:"Kapcsol\u00f3"},typeOptions:{prompt:"T\u00edpus",mapService:"T\u00e9rk\u00e9pi adatszolg\u00e1ltat\u00e1s",featureService:"Vektoros adatszolg\u00e1ltat\u00e1s",
imageService:"Raszteres adatszolg\u00e1ltat\u00e1s",vectorTileService:"Vektoros csempeszolg\u00e1ltat\u00e1s",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"Nincs tal\u00e1lat."},paging:{first:"\x3c\x3c",firstTip:"Els\u0151",previous:"\x3c",previousTip:"El\u0151z\u0151",next:"\x3e",nextTip:"Tov\u00e1bb",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"Elem",itemPlural:"Elemek"},item:{actions:{add:"Hozz\u00e1ad\u00e1s",close:"Bez\u00e1r\u00e1s",remove:"Elt\u00e1vol\u00edt\u00e1s",
details:"R\u00e9szletek",done:"K\u00e9sz",editName:"N\u00e9v szerkeszt\u00e9se"},messages:{adding:"Hozz\u00e1ad\u00e1s...",removing:"Elt\u00e1vol\u00edt\u00e1s...",added:"Hozz\u00e1adva",addFailed:"Sikertelen hozz\u00e1ad\u00e1s",unsupported:"Nem t\u00e1mogatott"},typeByOwnerPattern:"{type} / {owner}",dateFormat:"HHHH n, \u00e9\u00e9\u00e9\u00e9",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'\u00e9rt\u00e9kel\u00e9sek", "hozz\u00e1sz\u00f3l\u00e1sok": "hozz\u00e1sz\u00f3l\u00e1sok", "megtekint\u00e9sek": "megtekint\u00e9sek'},
types:{"Map Service":"T\u00e9rk\u00e9pi adatszolg\u00e1ltat\u00e1s","Feature Service":"Vektoros adatszolg\u00e1ltat\u00e1s","Image Service":"Raszteres adatszolg\u00e1ltat\u00e1s","Vector Tile Service":"Vektoros csempeszolg\u00e1ltat\u00e1s",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"T\u00edpus",url:"URL",types:{ArcGIS:"ArcGIS Server webes szolg\u00e1ltat\u00e1s",WMS:"WMS OGC webes szolg\u00e1ltat\u00e1s",WMTS:"WMTS OGC webes szolg\u00e1ltat\u00e1s",WFS:"WFS OGC webes szolg\u00e1ltat\u00e1s",KML:"KML f\u00e1jl",
GeoRSS:"GeoRSS f\u00e1jl",CSV:"CSV f\u00e1jl"},samplesHint:"Minta URL-c\u00edm(ek)"},addFromFile:{intro:"A k\u00f6vetkez\u0151 f\u00e1jlt\u00edpusokat ejtheti ide, illetve keresheti tall\u00f3z\u00e1ssal:",types:{Shapefile:"Shapefile (.zip, az \u00f6sszes shapefile f\u00e1jlt tartalmaz\u00f3 ZIP arch\u00edvum)",CSV:"CSV f\u00e1jl (.csv, c\u00edmmel vagy sz\u00e9less\u00e9ggel, hossz\u00fas\u00e1ggal; vessz\u0151vel, pontosvessz\u0151vel vagy tabul\u00e1torral tagolt)",KML:"KML f\u00e1jl (.kml)",GPX:"GPX f\u00e1jl (.gpx, GPS Exchange Format)",
GeoJSON:"GeoJSON f\u00e1jl (.geo.json vagy .geojson)"},generalizeOn:"Vektoros elemek generaliz\u00e1l\u00e1sa webes megjelen\u00edt\u00e9shez",dropOrBrowse:"Ejt\u00e9s vagy tall\u00f3z\u00e1s",browse:"Tall\u00f3z\u00e1s",invalidType:"Ez a f\u00e1jlt\u00edpus nem t\u00e1mogatott.",addingPattern:"{filename}: hozz\u00e1ad\u00e1s...",addFailedPattern:"{filename}: sikertelen hozz\u00e1ad\u00e1s",featureCountPattern:"{filename}: {count} vektoros elem",invalidTypePattern:"{filename}: ez a t\u00edpus nem t\u00e1mogatott",
maxFeaturesAllowedPattern:"Legfeljebb {count} vektoros elem megengedett",layerNamePattern:"{filename} - {name}",generalIssue:"Probl\u00e9ma fordult el\u0151.",kmlProjectionMismatch:"A t\u00e9rk\u00e9p \u00e9s a KML-r\u00e9teg koordin\u00e1ta-rendszere nem egyezik, \u00e9s nem lehet v\u00e9grehajtani a konverzi\u00f3t a kliensen.",featureLocationsCouldNotBeFound:"A funkci\u00f3k nem tal\u00e1lhat\u00f3k: ismeretlen vagy \u00e9rv\u00e9nytelen hely mez\u0151k. A f\u00e1jl t\u00e1bl\u00e1zatk\u00e9nt lesz hozz\u00e1adva."},
layerList:{caption:"R\u00e9tegek",noLayersAdded:"Egyetlen r\u00e9teg sem lett hozz\u00e1adva.",removeLayer:"R\u00e9teg elt\u00e1vol\u00edt\u00e1sa",back:"Vissza"},_localized:{}}});