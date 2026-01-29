import {joinArr} from "./joinArr.js";
import {courses} from "../bai4_getListTile/courses.js";

let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

console.log(joinArr(courses,addedCourses));