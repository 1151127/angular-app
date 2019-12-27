import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OperacaoService } from '../services/operacao.service'; 
import { Operacao } from '../models/operacao/operacao';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('OperacaoService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: OperacaoService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new OperacaoService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: Operacao[] = [{ operacaoId: 1, name: 'A', desc: 'A', operacoesTiposMaquinas:[]}];
        
      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      service.getAllOperacoesMaquinas().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: Operacao = { operacaoId: 1, name: 'A', desc: 'A', operacoesTiposMaquinas:[]};
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        service.getOperacaoById(1).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });

