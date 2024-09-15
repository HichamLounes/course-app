import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  public courses = [];
  public rating = 4;
  public lengthCourses;
  destroyobs;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) {  }


  ngOnInit() {


  this.destroyobs = this.activatedRoute.paramMap
  .pipe(map((res) => {
    const products = [];
    for (const key in res) {
        if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key });
        }
    }
    return products;
  }))
  .subscribe((param) => {
  this.lengthCourses = this.service.CoursesL;
  this.courses = this.activatedRoute.snapshot.data['courses'];
   




/*  for (let index = 1; index <= this.lengthCourses; index++) {

   this.course = this.service.Courses.find(x => x.id == this.courseId);

   if (condition) {
     this.courses=this.courses[index].push()
   }
 }  */

  })
  }
  ngOnDestroy() {
  this.destroyobs.unsubscribe();
  }
}







