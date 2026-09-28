import { describe, expect, it } from "vitest";
import { divisao, multiplicacao, soma, subtracao } from "./calculadora.js";

describe("calculadora", ()=>{  // descrição do teste 
    it("deve somar dois numero", () =>{
        const  resultado = soma (5,7);
        //expect(resultado).toBe(10)
        expect(resultado).toBe(12);

    }) //soma dois numeros 
})


describe("calculadora", ()=>{  // descrição do teste 
    it("deve subtrair dois numero", () =>{
        const  resultado = subtracao (10,7);
        //expect(resultado).toBe(10)
        expect(resultado).toBe(3);

    }) //soma dois numeros 
})


describe("calculadora", ()=>{  // descrição do teste 
    it("deve divisao dois numero", () =>{
        const  resultado = divisao (30,2);
        //expect(resultado).toBe(10)
        expect(resultado).toBe(15);

    }) //soma dois numeros 
})


describe("calculadora", ()=>{  // descrição do teste 
    it("deve multiplicacao dois numero", () =>{
        const  resultado = multiplicacao (8,2);
        //expect(resultado).toBe(10)
        expect(resultado).toBe(16);

    }) //soma dois numeros 
})



