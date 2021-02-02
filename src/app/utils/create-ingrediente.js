var fs = require('fs');
var receitas;
var ingredientes = [];

fs.readFile('C:\\desenv\\CozinhApp\\src\\assets\\jsons\\ingredientes.json', 'utf8', function (err, data) {
    let dados = JSON.parse(data);

    for (const dado of dados.ingredientes) {
        ingredientes.push(dado.nome);

    }
    
});


fs.readFile('C:\\desenv\\CozinhApp\\src\\assets\\jsons\\receitas.json', 'utf8', function (err, data) {
  if (err) throw err;
  receitas = JSON.parse(data);

  

  for (const receita of receitas) {
    for (const ingrediente of receita.secao[0].conteudo) {


        ingrediente.split(" ").forEach(function (item) {
            

            if( !hasNumber(item) 
                && item.length > 3
                && item != '(chá)'
                && item != 'colher'
                && item != '(sopa)'
                && item != 'picadas'
                && item != 'picada'
                && item != 'limpo'
                && item != 'branco'
                && item != 'maduras'
                && item != 'firmes'
                && item != 'artesanal'
                && item != 'italiano'
                && item != 'grãos'
                && item != 'colheres'
                && item != 'cortados'
                && item != 'cubos'
                && item != 'espremido'
                && item != 'vermelho'
                && item != 'amarelo'
                && item != 'picado'
                && item != 'média'
                && item != 'vidro'
                && item != 'folha'
                && item != 'gosto'
                && item != 'cortadas'
                && item != 'dentes'
                && item != 'xícara'
                && item != 'faixa'
                && item != 'azula'
                && item != 'rosca'
                && item != 'limpo'
                && item != 'pedaços'
                && item != 'limpo'
                && item != 'cozido'
                && item != 'oliva'
                && item != 'verdes'
                && item != 'grande'
                && item != 'fresco'
                && item != 'seco'
                && item != 'triturado'
                && item != 'Tempero'
                && item != 'haiti'
                && item != 'Raspas'
                && item != 'Folhas'
                && item != 'ornamentar)'
                && item != '(para'
                && item != 'amargo'
                && item != 'derretido'
                && item != 'peneiradas'
                && item != 'tiras'
                && item != 'mascavo'
                && item != 'gosto'
                && item != 'grandes'
                && item != 'para'
                && item != 'acompanhar'
                && item != 'adoçado'
                && item != 'amarela'
                && item != 'aferventadas'
                && item != 'algum'
                && item != 'algumas'
                && item != 'amolecer'
                && item != 'amolecidas'
                && item != 'amolecida'
                && item != 'americana'
                && item != 'americano'
                && item != 'amarelada'
                && item != 'amarelos'
                && item != 'amarrada'
                && item != 'altura'
                && item != 'além'
                && item != 'alto'
                && item != 'alimentício'
                && item != 'amanhecidos'
                && item != 'amarelos'
                && item != 'alhosal'
                && item != 'agosto'
                && item != 'africana'
                && item != 'aferventada'
                && item != 'adicionar'
                && item != 'acima'
                && item != 'acho'
                && item != 'achar'
                && item != 'abobrinhassal'
                && item != 'após'
                && item != 'anjo'
                && item != 'anéis'
                && item != 'aparas'
                && item != 'apertado'
                && item != 'americana'
                && item != 'ambiente'
                && item != 'ambas'
                && item != 'amassados'
                && item != 'amassadas'
                && item != 'amassada'
                && item != 'amarrados'
                && item != 'acertar'
                && item != 'aberta'
                && item != 'abertas'
                && item != 'aparas'
                && item != 'assadeiras'
                && item != 'assadeira'
                && item != 'artificial'
                && item != 'aromas'
                && item != 'aroma'
                && item != 'aquela'
                && item != 'aqui'
                && item != 'aquecido'
                && item != 'aproximadamente'
                && item != 'adicionar'
                && item != 'aves'
                && item != 'asterix'
                && item != 'assar'
                && item != 'assado'
                && item != 'assada'
                && item != 'arrosto'
                && item != 'aromático'
                && item != 'aromatizado'
                && item != 'aromatizada'
                && item != 'atingir'
                && item != 'adicionar'
                && item != 'adicionar'

                && !item.includes("\"")
                && !item.includes("(")
                && !item.includes(")")
                && !item.includes("*")
                && !item.includes("+")
                && !item.includes(":")
                && !item.includes(".")
                && !item.includes("[")
                && !item.includes("]")

                && !item.startsWith("-")

                && !item.endsWith(",")
                && !item.endsWith("-")
                && !item.endsWith("*")
                && !item.endsWith(";")
                && !item.endsWith(" ")
                && !item.endsWith("*")
                && !item.endsWith("½")
                && !item.endsWith("kg")
                && !item.endsWith("•")

                


                && !ingredientes.includes(item.toLowerCase())
                ){

                    ingredientes.push(item.toLowerCase());

                }
        });
    }
  }

  ingredientes.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })
  

  fs.writeFileSync('C:\\desenv\\CozinhApp\\src\\assets\\jsons\\ingredientes.json', JSON.stringify(ingredientes));


});



function hasNumber(myString) {
    return /\d/.test(myString);
}