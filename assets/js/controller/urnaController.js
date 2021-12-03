class Urnaeletronica{

    constructor(){
        this._fotoCandidato = document.querySelector("#fotoCandidato");
        this._numeroCandidato = '';
        this._numerico = document.querySelectorAll(".btnTeclado");
        this._acao = document.querySelectorAll(".btnAcao");
        this._primeiroNumero = document.querySelector(".primeiro");
        this._segundoNumero = document.querySelector(".segundo");
        this._nome = document.querySelector("#nome");
        this._partido = document.querySelector("#partido");
        this._vice = document.querySelector("#vice");
        this._telaUrna = document.querySelector(".telaUrna");
        this.initialize();
    }
    

    initialize(){

        this._numerico.forEach(e=>{

            e.addEventListener('click', b=>{
                let id = b.target.id;
                this.textoTela(id);
                this.audioTeclado();
            });

        });

        this._acao.forEach(f=>{

            f.addEventListener('click', g=>{
                let idAcao = g.target.id;
                this.acaoBotao(idAcao);
                this.audioTeclado();
            });

        });
    }

    audio(value){
        return new Audio(value);
    }

    audioTeclado(){
        this.audio('assets/audio/click.mp3').currentTime = 0;
        this.audio('assets/audio/click.mp3').play();
    }

    textoTela(value){

        if(this.primeiroNumero == ''){
            this.primeiroNumero = value;
        }else{
            this.segundoNumero = value;
            this._numeroCandidato = this.primeiroNumero+this.segundoNumero;
            this.listaCandidato(this._numeroCandidato);
        }
        
    }

    listaCandidato(value){
        switch(value){
            case '10':
                this.exibeCandidato('Gabriel de Lima', 'PSDB', 'Alguem ai', '<img src="assets/img/candidatos/eu.jpg" width="100%">');
                break;
            case '11':
                this.exibeCandidato('Alex Bw', 'PT', 'Fulano de tal', '<img src="assets/img/candidatos/alex.jpg" width="100%">');
                break;
            case 'corrige':
                this.exibeCandidato('', '', '', '<img src="assets/img/candidatos/branco.png" width="100%">');
                break;
            default:
                this.exibeCandidato('Branco', 'Branco', 'Branco', '<img src="assets/img/candidatos/branco.png" width="100%">');   
                break; 
        }
    }

    exibeCandidato(presidente, partido, vice, foto){
        this.nome = presidente;
        this.partido = partido;
        this.vice = vice;
        this.fotoCandidato = foto;
    }

    acaoBotao(value){
        switch(value){
            case 'corrige':
                this.primeiroNumero = '';
                this.segundoNumero = '';
                this.listaCandidato(value);
                break;
            case 'branco':
            case 'confirmar':
                this.finalizacao();
                break;
        }
    }

    finalizacao(){
        this.telaUrna = '<img src="assets/img/fim.png" width="100%">';
        this.audio('assets/audio/fim.mp3').play();

        setTimeout(()=>{
            window.location.reload();
        }, 2000);
    }

    get primeiroNumero(){
        return this._primeiroNumero.innerHTML;
    }
    set primeiroNumero(value){
        this._primeiroNumero.innerHTML = value;
    }
    get segundoNumero(){
        return this._segundoNumero.innerHTML;
    }
    set segundoNumero(value){
        this._segundoNumero.innerHTML = value;
    }
    get nome(){
        return this._nome.innerHTML;
    }
    set nome(value){
        this._nome.innerHTML = value;
    }
    get partido(){
        return this._partido.innerHTML;
    }
    set partido(value){
        this._partido.innerHTML = value;
    }
    get vice(){
        return this._vice.innerHTML;
    }
    set vice(value){
        this._vice.innerHTML = value;
    }
    get fotoCandidato(){
        return this._fotoCandidato.innerHTML;
    }
    set fotoCandidato(value){
        this._fotoCandidato.innerHTML = value;
    }
    get telaUrna(){
        return this._telaUrna.innerHTML;
    }
    set telaUrna(value){
        this._telaUrna.innerHTML = value;
    }
}