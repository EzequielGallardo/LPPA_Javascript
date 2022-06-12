function Calcular(){ 
    /*INICIALIZAR*/
    document.getElementById('respuestaEstatura').innerHTML= '';
    document.getElementById('respuestaPeso').innerHTML= '';
    var strEstatura=document.getElementById('txtestatura').value;
    var strPeso=document.getElementById('txtpeso').value;
    document.getElementById('tablaResult').style.visibility='hidden';
    /*******************************************************************/ 
    if (isNaN(strEstatura))  /*VALIDA NUMEROS_ ROMPE AL INGRESAR CARACTERERS*/
    {
        alert("ERROR VALIDACION - DEBE INGRESAR NUMEROS EN ESTATURA");
        return false;
    }
    if (isNaN(strPeso))  /*VALIDA NUMEROS_ ROMPE AL INGRESAR CARACTERERS*/
    {
        alert("ERROR VALIDACION - DEBE INGRESAR NUMEROS EN PESO");
        return false;
    }
    if (strEstatura==0)  
    {
        alert("ERROR VALIDACION - DEBE INGRESAR VALORES DISTINTOS DE 0 EN ESTATURA");
        return false;
    }

    if (strPeso==0)  
    {
        alert("ERROR VALIDACION - DEBE INGRESAR VALORES DISTINTOS DE 0 EN PESO");
        return false;
    }

    if (strEstatura>=272 || strEstatura < 10 )  
    {
        /*USO INNERHTML para modificar el DOM*/
        document.getElementById('respuestaEstatura').innerHTML= 'ESTATURA FUERA DE RANGO';
        return false;
    }

    if (strPeso>=544 || strPeso < 2 )  
    {
        /*USO INNERHTML para modificar el DOM*/
        document.getElementById('respuestaPeso').innerHTML= 'PESO FUERA DE RANGO';
        return false;
    }

    /*INICIO DE CALCULO*/
    var vEstaturaEnMetros = strEstatura/100;
    var vEstaturaAlCubo = vEstaturaEnMetros * vEstaturaEnMetros;
    var vIMC = strPeso/vEstaturaAlCubo;
    document.getElementById('resultado').value= vIMC; /*Cuando es TXT le pego con VALUE; con LABEL, innerHTML*/
    
    document.getElementById('tablaResult').style.visibility='visible';
    if (vIMC < 18.5) 
    {
        document.getElementById('row1').style.visibility='visible';
        document.getElementById('row2').style.visibility='hidden';
        document.getElementById('row3').style.visibility='hidden';
        document.getElementById('row4').style.visibility='hidden';
    }
    if (vIMC >= 18.5 && vIMC <= 24.9) 
    {
        document.getElementById('row1').style.visibility='hidden';
        document.getElementById('row2').style.visibility='visible';
        document.getElementById('row3').style.visibility='hidden';
        document.getElementById('row4').style.visibility='hidden';
    }
    if (vIMC >= 25 && vIMC <= 29.9) 
    {
        document.getElementById('row1').style.visibility='hidden';
        document.getElementById('row2').style.visibility='hidden';
        document.getElementById('row3').style.visibility='visible';
        document.getElementById('row4').style.visibility='hidden';
    }    
    if (vIMC > 30) 
    {
        document.getElementById('row1').style.visibility='hidden';
        document.getElementById('row2').style.visibility='hidden';
        document.getElementById('row3').style.visibility='hidden';
        document.getElementById('row4').style.visibility='visible';
    }     
 }