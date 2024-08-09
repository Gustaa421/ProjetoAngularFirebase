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
    foto: 'https://img.freepik.com/fotos-gratis/macaco-de-vista-frontal-usando-oculos-escuros_23-2150754441.jpg',
    nome: 'Mamaco da Paz Silva',
    objetivo: 'Programador HTML & CSS',
    contato: {
      email: 'mamaco@hotmail.com',
      telefone: '(11) 99333333',
      github: 'github.com/mamaco',
      linkedin: 'linkedim.com/mamaco'
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
  constructor(){ }
}
