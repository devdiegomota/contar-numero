function contar() {
    let inicio = document.getElementById('texto-inicio')
    let fim = document.getElementById('texto-fim')
    let passo = document.getElementById('texto-passo')
    let resultado = document.getElementById('res')

    if (inicio.value <= 0 || fim.value <= 0) {
        resultado.innerHTML = 'ERRO! Faltam dados!'
    } else {
        resultado.innerHTML = 'Contando...  '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            resultado.innerHTML = 'Insira um número no Passo'
        }
        else if (i < f) {
            //contagem crescente
            resultado.innerHTML = 'Crescente... <br>'
            for(let c = i; c <= f;c += p) {
                resultado.innerHTML += `\u{1F449} ${c}`
        }     
        

        } else {
            //contagem decrescente
            resultado.innerHTML = 'Decrescente... <br>'
            for(let c = i; c >= f;c -= p) {
                resultado.innerHTML += `\u{1F449} ${c}`
        }

        }
       
   }
}