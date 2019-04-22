import { TestBed, inject } from '@angular/core/testing';

import { EComStoreApiService } from './e-com-store-api.service';

describe('EComStoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EComStoreApiService]
    });
  });

  it('should be created', inject([EComStoreApiService], (service: EComStoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
