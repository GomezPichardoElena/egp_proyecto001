//arrays en typescript tienen dos formas de ser representados
let arrayNumbers: number[] = [1, 2, 3];
let arrayStrings: string[] = ['sol', 'luna', 'cielo'];
// también bien de la siguiente manera
let arrayNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['sol', 'luna', 'cielo'];

//Se pueden combinar también los dos tipos de datos Number y String

let mixto: any[] = [2, 'hola', 3];

/*Si conocemos el orden de los elementos podemos combinarlos de esta
manera el array solo acepta ese tipo de datos en orden a esto en typescript
se denomina tuple*/
//declaramos un tuple 
let prueba: [string, number];
//al declarar string primero y number después cuando iniciemos el tuble tendremos que poner los datos en ese orden
prueba: ['Elena', 21];
//si ponemos los datos en otro orden lo estaríamos haciendo mal