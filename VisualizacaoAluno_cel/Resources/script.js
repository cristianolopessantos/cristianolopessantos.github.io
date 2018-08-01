function setInput(x0, y0, x1, y1) {
    var x = x0 + Math.round((x1 - x0)/40);
    var y = y0 + Math.round((y1 - y0)/10);
    var width = x1 - x - Math.round((x1 - x0)/40);
    var height = y1 - y - Math.round((y1 - y0)/10);

    var input = document.createElement("INPUT");
    input.style.width = width;
    input.style.height = height;
    input.style.fontSize = height - Math.round(height/5);
    input.style.top = y;
    input.style.left = x;

    console.log(input);
    document.body.appendChild(input);
    input.focus();
}

function start() {

    var pageId = window.location.href.split('#')[1];
    if (!pageId) pageId = 'login_page';
    var pageEl = document.getElementById(pageId);
    pageEl.style.display = "block";

    var areas = pageEl.getElementsByTagName("area");
    var bodyWidth = document.body.clientWidth;

    console.log(areas);

    for (i in areas) {
        var newCoordsArr = [];
        var originalCoords = areas[i].coords;
        var newCoords = ""
        if (originalCoords) {
            var coords = areas[i].coords.split(',');
            for(j in coords) {
                newCoordsArr[j] = Math.round(coords[j] * (bodyWidth/240))
            }
            newCoords = newCoordsArr.join(',');
            areas[i].coords = newCoords;

            //    console.log(newCoords);
        }

        // troca os inputs por inputs
        if(areas[i].hash == "#input_page") {
            console.log(areas[i]);
            areas[i].setAttribute("href","#");
            areas[i].setAttribute("onclick","javascript:setInput("+newCoords+");");
            console.log(areas[i]);
        }
        else if (areas[i]){
            areas[i].setAttribute("onclick","javascript:location.reload();");
        }
    }
}