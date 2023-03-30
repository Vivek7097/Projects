import React,{useState} from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    const[likedCourses, setLikedCourses] =useState([]);
    let category = props.category;

    // returns you a list of all courses received form api response
     function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( array => {
                array.forEach(course => {
                    allCourses.push(course);
                })
            })
            console.log(allCourses);
            return allCourses;
        }
        else {
            return courses[category];
        }

    }

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course) =>
                <Card key={course.id} course={course}
                likedCourses = {likedCourses}
                setLikedCourses={setLikedCourses}></Card>
            )
        }
    </div>
  )
}

export default Cards