/**
 * ... 
 * rest ar speread ... diyei hoy
 * tader useCases er upor tara alada.
 * function er peramiter e use korle rest operator
 */

const restOperator = (a, b, ...params) => {
    
    console.log(arguments);

    console.log(a, b, params);
}

restOperator(2, 3, 65, 45, 45, 4343)