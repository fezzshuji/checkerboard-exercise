let flag = true; //set to true
for(let i = 0; i < 550; i+=50){
    for(let j = 0; j < 550; j+=50){
        let elem = document.createElement("div");
        if(flag == true){
            color = "black";
        }else{
            color ="red";
        }
        flag = !flag;
        let style_string = "border:0px solid black;position:absolute;background-color:" + color + ";height:50px;width:50px;top:" + i + "px;left:" + j + "px";
        elem.setAttribute("style", style_string);
        document.body.append(elem);
    }
}

//elem.setAttribute("style", "position:absolute;top:150px;left:150px;background-color:red;height:50px;width:50px");
//document.body.append(elem);


/*var chessboard = document.getElementById('chessboard');
   for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
         var chessSquare = document.createElement('div');
         chessSquare.className = 'chess-square';
         if ((i + j) % 2 == 0) {
            chessSquare.style.backgroundColor = '#000';
         }
         chessboard.appendChild(chessSquare);
      }
   }*/