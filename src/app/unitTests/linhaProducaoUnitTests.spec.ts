import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LinhaProducaoService } from '../services/linha-producao.service'; 
import { LinhaProducao } from '../models/linhaproducao/linhaproducao';
import { Maquina } from '../models/maquina/maquina';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('LinhasService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let linhasService: LinhaProducaoService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      linhasService = new LinhaProducaoService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: LinhaProducao[] = [{ linhaProducaoId: 1, name: 'A', maquinas: [] }];
        
      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      linhasService.getAllLinhasProducoes().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: LinhaProducao = { linhaProducaoId: 1, name: 'A', maquinas: [] };
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        linhasService.getLinhaProducaoById(1).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });


