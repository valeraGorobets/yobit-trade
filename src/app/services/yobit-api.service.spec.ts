import { TestBed } from '@angular/core/testing';

import { YobitApiService } from './yobit-api.service';

describe('YobitApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YobitApiService = TestBed.get(YobitApiService);
    expect(service).toBeTruthy();
  });
});
