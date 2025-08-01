class Filmes {
    constructor(nomeFilme, duracaoFilme, indicacaoFilme){
        this.nome = nomeFilme;
        this.duracao = duracaoFilme;
        this.indicacao = indicacaoFilme;
        this.idade = null;
    }
    
     idadePessoas = () => {
        let idade = document.getElementById("idadePessoa");
        const btnAssistir = document.getElementById("btnAssistir");

        btnAssistir.addEventListener("click", () => {
            this.idadeP = parseInt(idade.value);
            if(this.idadeP < this.indicacao){
                alert("Você não tem idade para ver esse filme")
            }else {
                alert("Liberado")
        }
        });
        
    }
     
     
}

//instancia
const filmeAcao = new Filmes("Adrenalina", 1.30, "14");

filmeAcao.idadePessoas();

console.log(filmeAcao.nome, filmeAcao.duracao, 
    filmeAcao.indicacao, filmeAcao.idade);