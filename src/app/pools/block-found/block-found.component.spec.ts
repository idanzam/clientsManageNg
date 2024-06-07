import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFoundComponent } from './block-found.component';

describe('BlockFoundComponent', () => {
  let component: BlockFoundComponent;
  let fixture: ComponentFixture<BlockFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
