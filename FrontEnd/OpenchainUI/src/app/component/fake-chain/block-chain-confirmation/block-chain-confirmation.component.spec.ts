import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainConfirmationComponent } from './block-chain-confirmation.component';

describe('BlockChainConfirmationComponent', () => {
  let component: BlockChainConfirmationComponent;
  let fixture: ComponentFixture<BlockChainConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockChainConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
