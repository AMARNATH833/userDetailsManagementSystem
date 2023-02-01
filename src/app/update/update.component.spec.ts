/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UpdateComponent } from './update.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {EMPTY, from} from 'rxjs';
import {ngMocks} from 'ng-mocks';
import { BreakpointObserver } from '@angular/cdk/layout/breakpoints-observer';
import {MockBuilder,NG_MOCKS_ROOT_PROVIDERS} from 'ng-mocks';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  // describe('suite', () => {
  //   beforeEach(() => MockBuilder(YourComponent, ItsModule)
  //     .keep(MatBadgeModule) // or any other MatModule
  //     .keep(NG_MOCKS_ROOT_PROVIDERS) // <- the fix
  //   );
  // });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
