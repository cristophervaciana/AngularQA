import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlimentosService } from './alimentos.service';

describe('AlimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentosService = TestBed.get(AlimentosService);
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    const service: AlimentosService = TestBed.get(AlimentosService);
    it('debe retornar una coleccion de productos', () => {
      const userResponse = [
        {
          idalimento: 1,
          nombre: 'Salsa de Tomate Banquete',
          foto: 'https://cdn.shopify.com/s/files/1/1479/5948/products/automercado-salsas233_dca8993b-47a7-4e25-b4c4-c6de989cd712_grande.png?v=1474919164',
          cantidad: 5,
          fechacaducidad: '2019-11-21'
        }
      ];
      let response;
      spyOn(service,'getProducts').and.returnValue(of(userResponse));

      service.getProducts().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

});
