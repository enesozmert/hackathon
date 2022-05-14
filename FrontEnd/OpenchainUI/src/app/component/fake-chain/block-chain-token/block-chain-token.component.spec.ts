import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainTokenComponent } from './block-chain-token.component';

describe('BlockChainTokenComponent', () => {
  let component: BlockChainTokenComponent;
  let fixture: ComponentFixture<BlockChainTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockChainTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
