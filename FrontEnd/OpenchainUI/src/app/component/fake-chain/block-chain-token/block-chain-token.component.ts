import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-chain-token',
  templateUrl: './block-chain-token.component.html',
  styleUrls: ['./block-chain-token.component.css']
})
export class BlockChainTokenComponent implements OnInit {
  token:string;
  constructor() { }

  ngOnInit(): void {
    this.token = String(localStorage.getItem("token"));
  }

}
