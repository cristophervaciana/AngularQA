import { Component, OnInit, HostBinding } from '@angular/core';
import { Alimento } from 'src/app/models/alimentos';
import {AlimentosService} from '../../services/alimentos.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-alimentos-form',
  templateUrl: './alimentos-form.component.html',
  styleUrls: ['./alimentos-form.component.css']
})
export class AlimentosFormComponent implements OnInit {

  @HostBinding('class') classes ='row';

  alimento: Alimento = {
    idalimento:0,
    nombre:'',
    foto:'',
    cantidad:0,
    fechacaducidad: new Date()
  };

  constructor(private alimentoService : AlimentosService, private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.idalimento){
      this.alimentoService.getProductById(params.idalimento).subscribe(
        res =>{
            res.fechacaducidad = res.fechacaducidad.substring(0,10);
            this.alimento = res;
        },
        err =>{
          console.log(err);
        }
      )
    }

  }

  guardarProducto(){
    const params = this.activeRoute.snapshot.params;
    if(params.idalimento){
      this.alimentoService.updateProduct(params.idalimento,this.alimento).subscribe(
        res =>{
          console.log(res)
          this.router.navigate(['/alimentos']);
        },
        err =>{
          console.log(err);
        }
      )

    }else{
      this.alimentoService.createProduct(this.alimento).subscribe(
        res =>{
          this.router.navigate(['/alimentos']);
        },
        err =>{
          console.log(err);
        }
      )

    }

  }
}
