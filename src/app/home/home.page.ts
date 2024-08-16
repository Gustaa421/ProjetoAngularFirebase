import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recado = {
    assunto: null,
    mensagem: null
  }

  recados: any = [];

  enviar(){
    this.crudService.insert(this.recado, 'recados');
  }

  carregar(){
    this.crudService.fetchAll('recados')
  .then( (response) =>{
    this.recados = response;
  })
  .catch((erro) =>{
    console.log(erro);
  })
  .finally(() =>{
    console.log('processo finalizado')
  })
}
  remover(id: string){
    this.crudService.remove(id, 'recados');
    this.carregar()
  }

  pessoa = {
    foto: 'https://www.creativefabrica.com/wp-content/uploads/2023/02/21/Cute-Monkey-In-A-Hip-Hop-Outfit-61943315-1.png',
    nome: 'Pombinha da Paz Silva',
    objetivo: 'Programador HTML & CSS',
    contato: {
      email: 'pombinha@hotmail.com',
      telefone: '(11) 99333333',
      github: 'github.com/pombinha',
      linkedin: 'linkedim.com/pombinha'
    },
    softskills: [
      'Comunicação',
      'Proatividade',
      'Trabalho em Grupo'
    ],
    formacao: [
      {
        ano_inicio: '2022',
        ano_fim: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: "Técnico em Desenvolvimento de Sistemas"
     },
     {
        ano_inicio: '2025',
        ano_fim: '2027',
        instituicao: 'Faculdade de Tecnologia - Fatec',
        curso: "Superior em Análise e Desenvolvimento de Sistemas"
     }
    ],
    projetos: [
      {
        ano: '2023',
        instituicao: 'Etec Sales Gomes',
        nome_projeto: 'Etec de Portas Abertas',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque suscipit dolorem dolorum perspiciatis maxime cupiditate quas laboriosam dignissimos quisquam? Quidem dolor omnis molestias dolorum rem cumque perspiciatis, at qui?'
      }
    ]
  }
  constructor(
    public crudService: CrudService
  ){ }
}

