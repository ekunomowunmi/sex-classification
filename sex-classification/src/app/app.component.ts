import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sex-classification';

  /**
   *
   */
  constructor(private router: Router) {
    
    
  }

ngOnInit(): void {
  
}

goToPortrait(){
this.router.navigateByUrl('portrait');
}

goToFingerprint(){

}
}
