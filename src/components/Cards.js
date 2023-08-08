import { useState } from "react";
import Card from "./Card";

function Cards(props)
{
    let courses = props.courses;
    let category = props.category;
    let allCourses = [];
    // //  courses = json object
    // // coursesCategory = Different different array in the json like development, design and etc
    // // now course is the different different course inside each category
    const [likedCourse, setLikedCourses] =  useState([]);
    const getCourses = ()=>{
        if(category==="All"){
        Object.values(courses).forEach((coursesCategory)=>{
        coursesCategory.forEach((course)=>{
            allCourses.push(course);
        })
        })
        return allCourses
    }
    else return courses[category];
    }
   
    return(
        <div className="Cards">
            {
                 getCourses().map((course)=>{
                    return <Card key={course.id} course={course} likedCourse = {likedCourse} setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    );

}
export default Cards;