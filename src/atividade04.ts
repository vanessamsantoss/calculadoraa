async function cafe() : Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => { // Cria um tempo de espera
            resolve(`Café pronto`);
        }, 4000);
    });
};

async function cafeExemplo(){
    //const resultado = cafe();
    //console.log(resultado);
    console.log(`Seu café está sendo preparado...`);
    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
};
cafeExemplo();

type CEP = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
};

async function buscarCEP(): Promise<CEP> { // Get da API (Buscando os dados)
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`);
    const dados = await response.json() as CEP; // Vai esperar receber os dados
    return dados;
};

async function buscarCEPexemplo() {
    const resultadoAguardado = await buscarCEP();
    console.log(resultadoAguardado);
};

async function criarCEP(): Promise<CEP>{ // Post
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`, {
        method: `post`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cep: `01001-000`,
            logradouro: `Praça da Sé`,
            complemento: `lado ímpar`,
            unidade: ``,
            bairro: `Sé`,
            localidade: `São Paulo`,
            uf: `SP`,
            estado:`São Paulo`,
            regiao: `Sudeste`,
            ibge: `3550308`,
            gia: `1004`,
            ddd: `11`,
            siafi: `7107`,
        })
    });
    if (response.ok) {
        console.log(`Adicionado ao banco de dados com sucesso!`);
    } else {
        console.log(`Erro ao adicionar ao banco de dados`);
    }
    const dados = await response.json() as CEP;
    return dados;
};

async function apagarCEP(): Promise<void>{ // Delete
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`, {
        method: "delete"
    });
    if(response.ok){
        console.log(`CEP apagado com sucesso`);
    }
    else{
        console.log(`Erro ao apagar o CEP`);
    }    
}

buscarCEPexemplo();
//criarCEP();
//apagarCEP();
