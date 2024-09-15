import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  goToHome() {
    //this.route.navigate(['Home']);  //always use absoulute path unless We spesefy use relative path
    //this.route.navigateByUrl('Home'); //always use absoulute path unless We spesefy use relative path

    this.route.navigate(['Home'], { relativeTo: this.activatedRoute }); //Now we use relative path
  }

}
