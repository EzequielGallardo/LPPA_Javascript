/*4A) Crear 1 Nro aleatorio etre 0 y 1*/ 
        
        let vRandom = Math.random();
        if (vRandom >= 0.5)
        {console.log ('Greather than 0,5: '+ vRandom); 
         }
        else
        {console.log ('Lower than 0,5: '+ vRandom); }
        
/*4B) Crear 1 variable entre 0 y 100 y evaluar
        && 	and
        || 	or
        ! 	not
        */ 
        
        let vAge = 8;
        if (vAge <= 2 )
        {console.log ('Bebe'); 
        }
        else if (vAge > 2 && vAge <=12)
        {console.log ('Niño'); 
        }
        else if (vAge >= 13 && vAge <=19)
        {console.log ('Adolescente'); 
        }        
        else if (vAge >= 20 && vAge <=30)
        {console.log ('Joven'); 
        }  
        else if (vAge >= 31 && vAge <=60)
        {console.log ('Adulto'); 
        }   
        else if (vAge >= 61 && vAge <=75)
        {console.log ('Adulto Mayor'); 
        }   
        else if (vAge >= 75)
        {console.log ('Anciano'); 
        }   