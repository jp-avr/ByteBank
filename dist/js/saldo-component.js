let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); //Seleciona a classe onde está o nosso saldo
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo); //altera o valor do saldo
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
