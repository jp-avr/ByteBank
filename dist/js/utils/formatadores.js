import { FormatoData } from "../types/formatoData.js";
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
//FUNÇÃO PARA FORMATAR TODOS OS TIPOS DE DATAS NA APLICAÇÃO
//Caso o formato de Data não seja especificado na função ele irá utilizar o FormatoData.PADRAO que é padrão da aplicação
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: '2-digit',
            month: '2-digit'
        });
    }
    return data.toLocaleDateString("pt-br");
}
