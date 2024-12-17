/*1.patternt*/ 

function btn1Click() {
    lbl1.innerHTML = " ";

    for (let row = 1; row <=4; row++)
        {
            for (let col=1; col<=4 ; col++)
            {
                lbl1.innerHTML += "*\t";
            }
            lbl1.innerHTML += "<br>";   
        }
  }

 /*2.patternt*/

 function btn2Click() {
    lbl2.innerHTML = " ";

    for (let row = 1; row <=4; row++)
        {
            for (let col=1; col<=row ; col++)
            {
                lbl2.innerHTML += "*\t";
            }
            lbl2.innerHTML += "<br>";  
        }
  }
 
  /*3.patternt*/

 function btn3Click() {
    lbl3.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {

            for (let col = 4; col >= 1; col--)
            {
                lbl3.innerHTML += ("");
            }
            for (let col = 4; col >= row; col--)
            {
                lbl3.innerHTML += col + "\t";
            }
            lbl3.innerHTML += "<br>";
        }

    
  }
 

  /*4.patternt*/

 function btn4Click() {
    lbl4.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {

            for (let col = 1; col <= row; col++)
            {
                lbl4.innerHTML += ("");
            }
            for (let col = row; col <= 4; col++)
            {
                lbl4.innerHTML += row + "\t";
            }
            lbl4.innerHTML += "<br>";
        }
  }
 

  /*5.patternt*/

  function btn5Click() {
    lbl5.innerHTML = " ";

    for (let row = 4; row >= 1; row--)
        {

            for (let col = 4; col >= 1; col--)
            {
                lbl5.innerHTML += ("");
            }
            for (let col = row; col >= 1; col--)
            {
                lbl5.innerHTML += row + "\t";
            }
            lbl5.innerHTML += "<br>";
        }
  }

 

  /*6.patternt*/

  function btn6Click() {
    lbl6.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {

            for (let spc = 1; spc <=5-row; spc++)
            {
                lbl6.innerHTML += "\t";
            }
            for (let col = 1; col <=row; col++)
            {
                lbl6.innerHTML +=   "*\t";
            }
            lbl6.innerHTML += "<br>";
        }
  }


 

  /*7.patternt*/

  function btn7Click() {
    lbl7.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {

            for (let spc = 1; spc <= 4-row; spc++)
            {
                lbl7.innerHTML += "\t";
            }
            for (let col = row; col >=row; col--)
            {
                lbl7.innerHTML +=  col + "\t";
            }
            lbl7.innerHTML += "<br>";
        }
  }


 

  /*8.patternt*/

  function btn8Click() {
    lbl8.innerHTML = " ";

    for (let row = 4; row >= 1; row--)
        {

            for (let spc = 1; spc <= 5-row; spc++)
            {
                lbl8.innerHTML += "\t";
            }
            for (let col = 1; col <=row; col++)
            {
                lbl8.innerHTML +=  row + "\t";
            }
            lbl8.innerHTML += "<br>";
        }
  }


  /*9.patternt*/

  function btn9Click() {
    lbl9.innerHTML = " ";

    for (let row = 1; row <= 4; row++)
        {

            for (let spc = 1; spc <= row; spc++)
            {
                lbl9.innerHTML += "\t";
            }
            for (let col = 4; col >=row; col--)
            {
                lbl9.innerHTML +=  col + "\t";
            }
            lbl9.innerHTML += "<br>";
        }
  }

 
 

  /*10.patternt*/

  function btn10Click() {
    lbl10.innerHTML = " ";

    for (let row = 4; row >= 1; row--)
        {

            for (let spc = 1; spc <= 5-row; spc++)
            {
                lbl10.innerHTML += "    ";
            }
            for (let col = 1; col <=row; col++)
            {
                lbl10.innerHTML += "   "  + col  + "\t";
            }
            lbl10.innerHTML += "<br>";
        }
  }


 
 