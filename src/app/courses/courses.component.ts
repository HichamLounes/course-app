import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses = [];

  constructor(private service: CoursesService, private route: ActivatedRoute) { }
  ngOnInit() {
    /*     this.service.getCourses().then((data) => {
          this.courses = data;
        }) */
    this.courses = this.route.snapshot.data['courses'];
  }

}
