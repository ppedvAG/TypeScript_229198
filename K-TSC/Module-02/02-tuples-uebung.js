/*
    Fragen Sie vom Benutzer 3 2D-Koordinaten ab
    Verwenden Sie diese, um ein SVG-Polygon zu zeichnen
*/
var pointlist = new SVGPointList();
for (var i = 0; i < 3; i++) {
    var cordsx = prompt('Cords x');
    var cordsy = prompt('Cords y');
    if (cordsx && cordsy) {
        pointlist.appendItem(new DOMPoint(Number(cordsx), Number(cordsy)));
    }
    else {
        console.log("input was empty");
        i--;
    }
}
var poly = document.getElementById("Polygon");
if (poly) {
    // Lösche die bestehenden Punkte
    while (poly.points.length > 0) {
        poly.points.removeItem(0);
    }
    // Füge die neuen Punkte hinzu
    for (var _i = 0, pointlist_1 = pointlist; _i < pointlist_1.length; _i++) {
        var point = pointlist_1[_i];
        poly.points.appendItem(point);
    }
}
