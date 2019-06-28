import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  logoMarque  = 'assets/img/foxsoundi.png';


  loginModal() {
  // Get the modal
  var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
