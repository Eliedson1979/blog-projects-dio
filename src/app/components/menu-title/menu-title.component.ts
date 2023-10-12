import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: [
  './menu-title.component.css',
  './menu-title.responsivo.component .css' ]
})
export class MenuTitleComponent implements OnInit {
  @Input()
  iconCard:string = "https://3.bp.blogspot.com/-10UjEGva7qg/WSOgmwUZaoI/AAAAAAAAIxU/1ryqrs5STaEa0C9rymdm_kCdu0tqIU5_wCLcB/s1600/giphy.gif"

  constructor() { }

  ngOnInit(): void {
  }

}
