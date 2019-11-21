import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MaquinaService } from '../services/maquina.service'; 
import { Maquina } from '../models/maquina/maquina';
import { of } from 'rxjs'
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { asyncData, asyncError } from './async-observable-helpers';


describe ('MaquinaService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: MaquinaService;
  
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new MaquinaService(<any> httpClientSpy);
    });
  
    it('should return more than 1 (HttpClient called once)', () => {
      const mock: Maquina[] = [{ maquinaId: 1, name: 'A', tipoMaquinaId: 1}];
        
      httpClientSpy.get.and.returnValue(asyncData(mock));
  
      service.getAllMaquinas().subscribe(
        data => expect(data.length).toBeGreaterThanOrEqual(1, 'expected'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('get by id ', () => {
        const mock: Maquina = { maquinaId: 60, name: 'A', tipoMaquinaId: 1 };
          
        httpClientSpy.get.and.returnValue(asyncData(mock));
    
        service.getMaquinaById(60).subscribe(
          data => expect(data).toEqual(mock, 'expected'),
          fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
      });
  
  });

