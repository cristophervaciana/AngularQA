import { Component, OnInit, HostBinding } from '@angular/core';
import {AlimentosService} from '../../services/alimentos.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-alimentos-list',
  templateUrl: './alimentos-list.component.html',
  styleUrls: ['./alimentos-list.component.css']
})
export class AlimentosListComponent implements OnInit {
  alimentos: any =[];
  @HostBinding('class') classes = 'row';
  constructor(private alimentoService:AlimentosService, private router:Router,private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.idalimento){
      this.alimentoService.getProductById(params.idalimento).subscribe(
        res =>{
            this.alimentos = [res];
        },
        err =>{
          alert('No existe producto con ese id');
          this.getAllProductos();
        }
      )
    }else{
      this.getAllProductos();
    }
    
  }
  actualizarProducto(id:string){
    this.router.navigate(['/alimentos/edit/'+id]);
  }
  eliminarProducto(id: string){
    this.alimentoService.deleteProduct(id).subscribe(
      res =>{
        this.getAllProductos();
      },
      err =>{
        console.log(err);
      }
    )
  }
  getAllProductos(){
    this.alimentoService.getProducts().subscribe(
      res => {
        this.alimentos = res;
      },
      err => console.log(err)
    );
  }

}
