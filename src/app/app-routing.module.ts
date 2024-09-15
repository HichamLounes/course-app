import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './Course-guard-service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { ResolveCourseService } from './course-resolve.service';


const appRoute: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent/* , resolve: { courses: ResolveCourseService } */ },
    { path: 'Courses', component: CoursesComponent, resolve: { courses: ResolveCourseService } },
    {
        path: 'Courses', canActivateChild: [CourseGuardService], children: [
            { path: 'Course/:id', component: CourseComponent }
        ]
    },
    /* { path: 'Courses/Course/:id', component: CourseComponent }, */
    { path: 'Contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent },
    { path: 'About', component: AboutComponent },
    { path: '**', component: ErrorComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}