import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


students: Observable<User[]>;

  constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {

		this.usuarioService.getStudentList().subscribe(data => {   /* Faz uma requisição Ajax e Armazena o retorno do back-end em data*/
			this.students = data; /* E adiciona os dados vindo do back-end no objeto students */


		});


	}

}
