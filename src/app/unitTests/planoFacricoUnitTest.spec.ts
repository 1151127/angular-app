import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { PlanoFabricoService } from '../services/plano-fabrico.service'; 
import { PlanoFabrico } from '../models/planoFabrico/planoFabrico';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('PlanoService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: PlanoFabricoService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new PlanoFabricoService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: PlanoFabrico[] = [{ planoFabricoId: 1, name: 'A',desc: 'A', operacoes: []}];

      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      service.getAllPlanosFabricos().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: PlanoFabrico = { planoFabricoId: 1, name: 'A',desc: 'A', operacoes: [] };
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        service.getPlanoFabricoById(1).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });

