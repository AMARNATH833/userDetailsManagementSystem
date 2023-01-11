/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

let service:UserService;
describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService,HttpClient,HttpHandler]
    });
    service=TestBed.inject(UserService);
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  
  // it('should use UserService',()=>{
  //   service=TestBed.inject(UserService);
  //   expect(service.getDetails()).toBe('real value');
  // });

});
