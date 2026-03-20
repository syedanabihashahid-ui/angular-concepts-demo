import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch user data', () => {

    const mockUser = { name: 'Ali' };

    service.getUser().subscribe(data => {
      expect(data).toEqual(mockUser);
    });

    const req = httpMock.expectOne('/api/user');
    req.flush(mockUser); // fake response
  });

});