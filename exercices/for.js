/*5A) Crear 1 array de 5 palabras y recorrerlo con un for*/ 
        
    const vArrayFor = ['enero', 'febrero', 'marzo', 'abril', 'mayo']
    let i=0;
    for (i=0;i<5;i++)
        {
            console.log(vArrayFor[i]);
        }

/*5B) recorrerlo con un for, y aplicar UPPER a la primer letra*/ 
        
    for (i=0;i<5;i++)
        {
            console.log(vArrayFor[i].substring(0,1).toUpperCase() +
                            vArrayFor[i].substring(1));
        }        

/*5C) Crear una variable SENTENCE y guardar el array*/ 
    
    let vSentence = '';
        for (i=0;i<5;i++)
        {
            vSentence += vArrayFor[i];
        }        
        console.log(vSentence);

/*5D) Crear una variable SENTENCE y guardar el array*/ 
    
    let vArrayvacio;
    for (i=0;i<10;i++)
    {
        vArrayFor[i] = i;
    }        
    console.log(vArrayFor);