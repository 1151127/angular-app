import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProdutoService } from '../services/produto.service'; 
import { Produto } from '../models/produto/produto';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('ProdutoService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: ProdutoService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new ProdutoService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: Produto[] = [{ produtoId: 1, name: 'A',tipoProduto: 'A', planoFabricoId: 1,categoria:'oi'}];

        
      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      service.getAllProdutos().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: Produto = {produtoId: 1, name: 'A',tipoProduto: 'A', planoFabricoId: 1 ,categoria:'oi'};
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        service.getProdutoById(1).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });

