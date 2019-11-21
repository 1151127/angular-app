import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TipoMaquinaService } from '../services/tipo-maquina.service'; 
import { TipoMaquina } from '../models/tipoMaquina/tipoMaquina';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('TipoMauqinaService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: TipoMaquinaService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new TipoMaquinaService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: TipoMaquina[] = [{ tipoMaquinaId: 1, name: 'A',desc: 'A', listOperacoes: []}];

      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      service.getAllTiposMaquinas().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: TipoMaquina = { tipoMaquinaId: 1, name: 'A',desc: 'A', listOperacoes: [] };
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        service.getTipoMaquinaById(1).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });

