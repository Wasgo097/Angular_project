import { TestBed } from '@angular/core/testing';
import { HeroService } from './serv.service';
describe('ServService', () => {
  let service: HeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
