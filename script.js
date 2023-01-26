let pos = true; //set to true
for(let i = 0; i < 550; i+=50){ //for loop to create row i
    for(let j = 0; j < 550; j+=50){ //nested for loop to create row j
        let elem = document.createElement("div"); //set elem to createElement function
        if(pos == true){ //if pos is true
            color = "black"; //set color to black
        }else{ //if pos is not true
            color ="red"; //set color to red
        }
        pos = !pos; //set pos to false outside the loop
        let style_string = "border:0px solid black;position:absolute;background-color:" + color + ";height:50px;width:50px;top:" + i + "px;left:" + j + "px";
        elem.setAttribute("style", style_string);
        document.body.append(elem);
    }
}

//elem.setAttribute("style", "position:absolute;top:150px;left:150px;background-color:red;height:50px;width:50px");
//document.body.append(elem);