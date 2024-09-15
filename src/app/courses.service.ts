import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CoursesService {

    Courses = [
        {
            id: 1,
            name: 'JavaScript For Beginners',
            author: 'Hicham',
            duration: 16,
            type: 'Free',
            price: 0.00,
            rating: 4,
            image: 'assets/img/javascript.png',
            desc: 'A typical JavaScript basics course covers a range of topics, including variables, data types, operators, conditional statements, loops, functions, arrays, and objects. The course may also cover basic DOM manipulation, event handling, debugging, and testing.'
        },
        {
            id: 2,
            name: 'HTML 5 For Beginners',
            author: '',
            duration: 10,
            type: 'Free',
            price: 0.00,
            rating: 3.5,
            image: 'assets/img/html.png',
            desc: 'A typical HTML course covers a range of topics, including basic HTML syntax, text formatting, working with images, creating links, tables, forms, and multimedia. The course may also cover more advanced topics such as semantic HTML, accessibility, and responsive design.'
        },
        {
            id: 3,
            name: 'CSS 3 For Beginners',
            author: '',
            duration: 12,
            type: 'Free',
            price: 0.00,
            rating: 4.5,
            image: 'assets/img/css.webp',
            desc: 'A typical CSS course covers a range of topics, including basic CSS syntax, selectors, layout, typography, colors, and responsive design. The course may also cover more advanced topics such as CSS preprocessors like SASS and LESS, CSS frameworks like Bootstrap and Materialize, and CSS animations.'
        },
        {
            id: 4,
            name: 'ANGULAR For Beginners',
            author: '',
            duration: 45,
            type: 'Premium',
            price: 99.00,
            rating: 4.2,
            image: 'assets/img/angular.png',
            desc: 'A typical Angular basics course covers a range of topics, including Angular architecture, components, modules, templates, data binding, directives, services, and dependency injection. The course may also cover basic routing and navigation, form validation, and HTTP requests.'
        },
        {
            id: 5,
            name: 'REACT For Beginners',
            author: '',
            duration: 42,
            type: 'Premium',
            price: 99.00,
            rating: 4.4,
            image: 'assets/img/react.jpg',
            desc: 'A typical React basics course covers a range of topics, including React components, JSX syntax, state and props, event handling, conditional rendering, and the component lifecycle. The course may also cover basic routing and navigation, handling forms, and working with APIs.'
        },
        {
            id: 6,
            name: 'Advanced Angular',
            author: '',
            duration: 50,
            type: 'Premium',
            price: 120.00,
            rating: 3,
            image: 'assets/img/angulara.jpg',
            desc: 'A typical Angular course covers a range of topics, including Angular architecture, components, modules, templates, data binding, directives, services, and dependency injection. The course may also cover more advanced topics such as Angular CLI, RxJS, state management with NgRx, testing, and deployment.'
        }
    ]


    public CoursesL = Object.keys(this.Courses).length;

    getCourses(): any {
        const CourseList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.Courses);
            }, 700)
        });
        return CourseList;
    }
}