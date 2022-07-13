import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor{


	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		throw new Error('Method not implemented.');

		if (localStorage.getItem('token') !== null) {   /*Verifica se existe um token no localStore e se ele for diferente de nulo, ou seja, se ele existir.  */
			const token = 'Bearer ' + localStorage.getItem('token');   /* pega o token e passa para a costante, respeitando  o prefixo bearer e o tokem propriamente dito. */

			const tokenRequest = req.clone({  /*Agora faz um clone  e seta a autorização e o token pelo o cabeçalho */
				headers: req.headers.set('Authorization', token)
			});

			return next.handle(tokenRequest); /*No final retorna a requisição do token para o back-end */
		} else {
			return next.handle(req); /** Caso não for achado o token no localstorage ou seja no navegador, faz uma requisição */
		}

	}
    constructor() { }
}


@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})

export class HttpInterceptorModule {

}


