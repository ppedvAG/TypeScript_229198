/*
    Fragen Sie vom Benutzer 3 2D-Koordinaten ab
    Verwenden Sie diese, um ein SVG-Polygon zu zeichnen
*/

var pointlist = new SVGPointList()


for(let i:number =0;i <3;i++ )
{
    var cordsx:string|null = prompt('Cords x');
    var cordsy:string|null = prompt('Cords y');

    if(cordsx && cordsy)
    {
        pointlist.appendItem(new DOMPoint(Number(cordsx),Number(cordsy)));
    }
    else
    {
        console.log("input was empty");
        i--;
    }
} 


const poly: SVGPolygonElement | null = document.getElementById("Polygon") as unknown as SVGPolygonElement;
if (poly) {
  // Lösche die bestehenden Punkte
  while (poly.points.length > 0) {
    poly.points.removeItem(0);
  }

  // Füge die neuen Punkte hinzu
  for (const point of pointlist) {
    poly.points.appendItem(point);
  }
}