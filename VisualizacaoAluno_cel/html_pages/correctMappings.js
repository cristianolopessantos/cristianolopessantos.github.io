function start() {
    var areas = document.getElementsByTagName("area");
    var bodyWidth = document.body.clientWidth;
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

            console.log(newCoords);
        }

        if(areas[i].className == "input") {

            var x = newCoordsArr[0] + 4;
            var y = newCoordsArr[1] + 4;
            var width = newCoordsArr[2] - x - 8;
            var height = newCoordsArr[3] - y - 8;

            var css = areas[i].cssRules;
            var input = document.createElement("INPUT");
            input.style.width = width;
            input.style.height = height;
            input.style.top = y;
            input.style.left = x;

            console.log(input);
            document.body.appendChild(input);
        }
    }
}

