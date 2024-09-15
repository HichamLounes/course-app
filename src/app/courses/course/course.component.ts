import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  course;
  courseId;
  destroyobs;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) {

  }
  ngOnInit() {
    /*     this.courseId = this.activatedRoute.snapshot.paramMap.get('id');    // the same this is the new approach
        // this.courseId = this.activatedRoute.snapshot.params['id'];             // the same but this is the old approach
        this.course = this.service.Courses.find(x => x.id == this.courseId) */

    this.destroyobs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.Courses.find(x => x.id == this.courseId);
    })
  }
  ngOnDestroy() {
    this.destroyobs.unsubscribe();
  }
}
