/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { JustgageComponent } from './justgage.component';

describe('JustgageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        JustgageComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(JustgageComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
