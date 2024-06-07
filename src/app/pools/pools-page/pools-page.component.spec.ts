import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsPageComponent } from './pools-page.component';

describe('PoolsPageComponent', () => {
  let component: PoolsPageComponent;
  let fixture: ComponentFixture<PoolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
