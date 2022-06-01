/*3A) Mostrar los meses 5 y 11  */
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
                        'Junio','Julio','Agosto','Septiembre','Octubre',
                        'Noviembre','Diciembre']
        console.log(meses[4]); /*Mes 5 del año*/
        console.log(meses[10]);/*Mes 11 del año*/

/*3B) Ordenar el Array alfabeticamente  */
        console.log(meses.sort()); 
/*3C) Agregar un elemento al inicio y otro al fin  */
        const mesesAModificar = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
        'Junio','Julio','Agosto','Septiembre','Octubre',
        'Noviembre','Diciembre']

        mesesAModificar.unshift('Mes0');
        mesesAModificar.push('mes 13');
        console.log(mesesAModificar);         

/*3D) Agregar un elemento al inicio y otro al fin  */

        mesesAModificar.shift('Mes0');
        mesesAModificar.pop('mes 13');
        console.log(mesesAModificar);        
        
/*3E) Invertir el orden del Array  */

        console.log(mesesAModificar.reverse());             

/*3F) Unir todos los elementos separados por un guion */

        console.log(mesesAModificar.join('-'));            

        
/*3G) Crear una copia del Array */
        const mesesACortar = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
        'Junio','Julio','Agosto','Septiembre','Octubre',
        'Noviembre','Diciembre']

        console.log(mesesACortar.slice(4, 11));    