import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pessoa = {
    foto: 'https://i.pinimg.com/474x/d0/df/ba/d0dfba3ff11ba1fde565d2d9652b215f.jpg',
    nome: 'Mamaco Agiota da Silva',
    objetivo: 'Programador HTML & CSS & Agiota',
    contato: {
      email: 'mamaco@hotmail.com',
      telefone: '(11) 99333333',
      github: 'github.com/mamaco',
      linkedin: 'linkedim.com/mamaco'
    },
    softskills: [
      'Comunicação',
      'Proatividade',
      'Trabalho em Grupo',
      'Cobrar quem me deve'
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
  
  constructor(){ }
}
