import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesService } from './courses.service';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './Course-guard-service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { FormsModule } from '@angular/forms';
import { ResolveCourseService } from './course-resolve.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [CoursesService,
    CourseGuardService,
    AuthService,
    CanDeactivateGuardService,
    ResolveCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
