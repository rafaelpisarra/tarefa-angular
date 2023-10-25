import { Component } from "@angular/core";

@Component({
    selector: 'app-cliente-page',
    templateUrl: './cliente-page.component.html',

})
export class clientepage {
    title = 'pissarra';
    descricao1 = 'descricao';
  
    clientePremium = true;
  
    nome = ""
  
   valores=[{
      descricao: "Cliente 1 - App",
      nome: "Fulano 1",
      id: 1
    },{
      descricao: "Cliente 2 - App",
      nome: 'Fulano 2',
      id: 2
    }]
  
    adicionar() {
      const id = this.valores.length + 1;
      this.valores.push({descricao: 'Adicionado', nome: this.nome, id: id});
    }

}