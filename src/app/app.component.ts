// open -a Google\ Chrome --args --disable-web-security --user-data-dir
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Printing For Less';
}

//
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';
// import 'rxjs/add/operator/map';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
//
// export class AppComponent {
//   title = 'Mini App';
//   private apiUrl = 'https://testapi.pfl.com/products?apikey=136085';
//   data: any = {};
//
//   constructor(private http: HttpClient){
//     console.log('Hello World');
//     this.getOrders();
//     this.getData();
//   }
//
//   getData(){
//     return this.http.get(this.apiUrl)
//   }
//
//   getOrders(){
//     this.getData().subscribe(data => {
//       console.log(data);
//       this.data = data
//     })
//   }
// }
