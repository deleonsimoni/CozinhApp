import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-receitas',
  templateUrl: './lista-de-receitas.page.html',
  styleUrls: ['./lista-de-receitas.page.scss'],
})
export class ListaDeReceitasPage implements OnInit {

  public ingredientes: any[] = [];
  public receitas = [
    {
      "_id": {
          "$oid": "5744eff20ca7832b5c745a48"
      },
      "nome": "Brownie de Chocolate com Gengibre",
      "secao": [
          {
              "nome": " Ingredientes",
              "conteudo": [
                  "50 g farinha de milho fina",
                  "10 g de cacau em pó",
                  "250 g de chocolate meio amargo",
                  "200 g de manteiga sem sal cortada em cubos",
                  "20 ml de suco de gengibre",
                  "5 ovos",
                  "200 g de açúcar",
                  "1 colher (chá) de fermento em pó",
                  "100 g de nozes picadas grosseiramente",
                  " "
              ]
          },
          {
              "nome": " Modo de Preparo",
              "conteudo": [
                  "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
                  "2 - Misture e reserve.",
                  "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
                  "4 - Retire do fogo.",
                  "5 - Adicione o suco de gengibre e misture.",
                  "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
                  "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
                  "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
                  "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
                  "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
                  "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
                  "12 - Retire do forno.",
                  "13 - Cubra o brownie com papel manteiga.",
                  "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
                  "15 - Deixe por +/- 4 horas na geladeira.",
                  "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida.",
                  " "
              ]
          },
          {
              "nome": " Outras informações",
              "conteudo": [
                  "Rendimento: 20 porções "
              ]
          }
      ]
  },
  {
      "_id": {
          "$oid": "5744eff20ca7832b5c745a49"
      },
      "nome": "Hamburquibe",
      "secao": [
          {
              "nome": " Ingredientes",
              "conteudo": [
                  "RECHEIO",
                  "2 colheres (sopa) de azeite1 colher (sopa) de alho picadinho100g de cebola picada500g de carne moída60g de extrato de tomate1⁄2 xícara (chá) de águaSalsinha a gostoPimenta síria a gostoSal a gosto",
                  "MASSA",
                  "150g de cebola cortada em cubos médios4 dentes de alho1 xícara (chá) de hortelã200g de trigo para quibe360ml de água fervente60ml de azeite1kg de carne moída1 xícara (chá) de tomate sem pele e sem semente cortado em cubosSal a gostoPimenta Síria a gosto",
                  "MOLHO DE IOGURTE",
                  "2 copos de iogurte natural2 colheres (sopa) de azeite1 limão (suco)Hortelã picadinho a gostoSal a gostoPimenta síria a gosto",
                  " "
              ]
          },
          {
              "nome": " Modo de Preparo",
              "conteudo": [
                  "Coloque numa panela aquecida 2 colheres (sopa) de azeite, o alho picadinho, a cebola picadinha e refogue até murchar.Acrescente 500g de carne moída e refogue até a carne ficar soltinha e começar a dourar.Junte 60g de extrato de tomate, ½ xícara (chá) de água, salsinha, sal e pimenta síria a gosto.Abaixe o fogo e deixe cozinhar por +/- 15 minutos ou até o molho encorpar.Apague o fogo e deixe esfriar.",
                  "Numa frigideira antiaderente, em fogo médio com azeite, grelhe os hamburquibes dos dois lados (+/- 12 minutos). Sirva com molho de iogurte com hortelã. Se preferir, coloque os hamburquibe numa assadeira untada e leve ao forno pré-aquecido a 200º C por 15 minutos, virando na metade do tempo.",
                  "Reserve.",
                  "MASSA",
                  "Num processador coloque a cebola cortada em cubos médios, o alho, e as folhas de hortelã e bata até obter uma pasta.Reserve.Numa tigela coloque o trigo para quibe, a pasta reservada acima, a água fervente e deixe coberto com um prato por +/- 1 hora ou até esfriar.Depois junte o azeite, a carne moída, o tomate sem pele picado, sal e pimenta síria a gosto.Misture bem.Pegue metade da massa, abra entre dois plásticos e corte discos (com 10cm de diâmetro e 0,5cm de espessura).Coloque uma porção do recheio no centro de um disco e cubra outro disco.Feche bem a borda modelando como um hambúrguer.Repita o mesmo procedimento com a outra metade da massa.Numa frigideira antiaderente, em fogo médio com azeite, grelhe os hamburquibes dos dois lados (+/- 12 minutos).Sirva com molho de iogurte com hortelã.Se preferir, coloque os hamburquibe numa assadeira untada e leve ao forno pré-aquecido a 200º C por 15 minutos, virando na metade do tempo.",
                  "MOLHO DE IOUGURTE",
                  "Numa tigela coloque o iogurte natural, o suco de 1 limão, hortelã, sal, pimenta síria e azeite.Misture bem."
              ]
          },
          {
              "nome": " Outras informações",
              "conteudo": [
                  "CUSTO DE CADA HAMBURQUIBE: 4,00 reais",
                  "RENDIMENTO: 10 hamburquibe com +/- 230 g cada",
                  " "
              ]
          }
      ]
  }
  ];

  constructor(private http: HttpClient, private router: Router, private active: ActivatedRoute) {
    
    if(active.snapshot.params.ingredientes){
      this.ingredientes = JSON.parse(active.snapshot.params.ingredientes);
    }

   }

   
  detalharReceita(){
    this.router.navigate(['/detalharReceita']);
  }


  ngOnInit() {


  }

}
