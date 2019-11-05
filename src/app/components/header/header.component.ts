import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  buscarProducto(){
    const se = document.getElementById("txtsearch") as HTMLInputElement;
    this.router.navigate(['/alimentos/search/'+se.value]);
  }
}
