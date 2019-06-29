import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  E_DisplayType: typeof E_DisplayType = E_DisplayType;
  type: E_DisplayType.list;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      this.type = params.type;
      console.log(params.typeDis);
    });
  }


}
enum E_DisplayType {
  list, grid
}
