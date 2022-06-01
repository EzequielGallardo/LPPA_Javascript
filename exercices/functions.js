/*6A) Crear una función que sume dos valores numericos y 
        devuelva el resultado*/ 
        
    let vValor1 = 5;
    let vValor2=6;
    let vSumaFuncion = 0;

    function sumar(valor1, valor2)
    {
        return valor1 + valor2;
    }
    vSumaFuncion = sumar(vValor1, vValor2);
    console.log(vSumaFuncion);

/*6B) Crear una función que sume dos valores numericos y 
        devuelva el resultado. Pero con validación de tipo de datos*/ 
        
    vValor1 = 5;
    vValor2='ERROR';
        function sumarValidaTipoDatos(valor1, valor2)
        {
            if (isNaN(valor1) || isNaN(valor2)) /*isNaN Valida si NO es NUMERICO */
                {return NaN}
            else
                 {return valor1 + valor2;}
            
        }
    vSumaFuncion = sumarValidaTipoDatos(vValor1, vValor2);
    console.log(vSumaFuncion);    

/*6C) Crear una función que reciba un parametro y valide si 
                es INTEGER*/ 
        
        vValor1 = 'e';
            function validate_integer(valor1)
            {
               return Number.isInteger(valor1);
                
            }
        console.log(validate_integer(vValor1));    

/*6D) Crear una función que reciba un parametro y valide si 
                es INTEGER*/ 
        
                vValor1 = 5;
                vValor2=6.8;

                    
                function sumarValidaTipoDatos(valor1, valor2)
                    {
                        if (isNaN(valor1) || isNaN(valor2)) /*isNaN Valida si NO es NUMERICO */
                            {return NaN}
                        else
                             {   
                                 if (Number.isInteger(valor1 + valor2) == false)
                                     {alert('Hay decimales');
                                      return Math.round(valor1 + valor2);
                                    }
                                 else{
                                    return valor1 + valor2;
                                 }
                             }
                        
                    }
                console.log(sumarValidaTipoDatos(vValor1, vValor2));    

/*6E) SEPARAR en 2 funciones*/ 
        
                vValor1 = 4;
                vValor2=6.8;

                function validacionPrevia(valor1, valor2)
                    {
                        
                        if (isNaN(valor1) || isNaN(valor2)) /*isNaN Valida si NO es NUMERICO */
                            {return false;}
                        else
                             {   
                                 if (Number.isInteger(valor1 + valor2) == false)
                                     {alert('Hay decimales');
                                      return true;
                                    }
                                 else{
                                    return true;
                                 }
                             }
                        
                    }
                    
                function sumarConsultandoPrecondicion(valor1, valor2)
                    {
                        if(validacionPrevia(valor1, valor2)==false)
                            {alert('Error Tipo de Datos')}
                        else
                            {return Math.round(valor1 + valor2);
                            }
                        
                    }
                console.log(sumarConsultandoPrecondicion(vValor1, vValor2));