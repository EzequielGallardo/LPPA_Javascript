/*2A) Crear 1 var STRING de al menos 10 caracteres, y convertirla en MAYUSCULA*/ 
        
        let vTextToUpper = 'ejercicio_9';
        let vTextUpper = vTextToUpper.toUpperCase();
        console.log (vTextUpper);

/*2B) Crear 1 var STRING de al menos 10 caracteres, y cortar los primeros 5 
        caracteres*/ 
        
        let vTextToCut = 'ejercicio_9';
        let vTextCut = vTextToCut.substring(0,4);
        console.log (vTextCut);

/*2C) Crear 1 var STRING de al menos 10 caracteres, y cortar los ultimos 3 
        caracteres*/ 
        
        let vTextCutEnd = vTextToCut.substring(vTextToCut.length-3);
        console.log (vTextCutEnd);        

/*2D) Crear 1 var STRING de al menos 10 caracteres, y convertir la 1era letra MAYUSCULA
        y el resto en minúscula*/ 
        
        let vTextToUpperFirst = 'ejErcicio_9';
        let vTextUpperFirst = vTextToUpper.substring(0,1).toUpperCase() + 
                                        vTextToUpper.substring(1).toLowerCase();
        console.log (vTextUpperFirst);        

/*2E) Crear 1 var STRING de al menos 10 caracteres, y con un espacio en el medio
        y guardar la posición donde se encuentra el espacio*/ 
        
        let vTextWithSpace = 'ejErci cio_9';
        let vPositicionSpace = vTextWithSpace.indexOf(' ');
        console.log (vPositicionSpace);        

/*2F) Crear 1 var STRING con 2 palabras largadas separadas por un espacio y 
        generar una variable donde la primer letra de cada palabra esté en Mayuscula*/ 
        
        let vTextWith2Words = 'ejercicio busqueda';
        let vPositicionSpace2Words = vTextWith2Words.indexOf(' ')+1;
        let vTwoWordsCustom = vTextWith2Words.substring(0,1).toUpperCase() + 
                                        vTextWith2Words.substring(1,vPositicionSpace2Words).toLocaleLowerCase() +
                                        vTextWith2Words.substring(vPositicionSpace2Words,
                                                vPositicionSpace2Words+1).toUpperCase() + 
                                        vTextWith2Words.substring(vPositicionSpace2Words+1).toLocaleLowerCase();
                                
        console.log (vTwoWordsCustom);                

      