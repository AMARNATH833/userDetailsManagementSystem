/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AboutComponent } from './about.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it(`should have as title 'About my Project...'`,()=>{
  //   const fixture=TestBed.createComponent(AboutComponent);
  //   const app=fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('About my Project...')
  // })
  // it('should have the title',()=>{
  //   expect(component.title).toBe('About my Project');
  //   const title=fixture.debugElement.query(By.css('h1')).nativeElement;
  //   expect(title.innerHTML).toBe('About my Project');
  // });
  
});
