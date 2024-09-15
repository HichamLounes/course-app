import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";



@Injectable()
export class ResolveCourseService implements Resolve<any> {


    constructor(private courseService: CoursesService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getCourses().then((data) => {
            return data;
        })
    }

}