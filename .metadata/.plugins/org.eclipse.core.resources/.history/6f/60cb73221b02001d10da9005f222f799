import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from './app-constants';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }
  
  
  login(usuario){
    
    /*Foi para a API e fez a autentificação */
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data =>{
    /**Retorno Http **/
    
    
    var token =JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
    
    localStorage.setItem("token", token); /*Coloca o token por traz do navegador */
    console.info("Token: " +localStorage.getItem("token")); /*Imprime no console */
    
    this.router.navigate(['home']);
      
    },
    
    error =>{
      
      console.error("Erro ao fazer login");
    }
    );
  }
}
