import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props) {
    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler()
    {
        if(likedCourse.includes(course.id))
        {
            setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id))
            toast.warning("Like removed");
        }
        else{
            if(likedCourse.length===0)
            {
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev, course.id]);
            }
            toast.success("Liked the course");
        }
    }
    return (
        <div className="Card">
            <div className="image-FcLike">
                <img className="img" src={course.image.url} alt={course.image.alt} />
                <div className="FcLike">
                    <button className="FcLike-btn" onClick={clickHandler}>
                        {
                            likedCourse.includes(course.id) ? (
                                <FcLike fontSize="1.75rem" />
                            ):(
                                <FcLikePlaceholder fontSize="1.75rem" />
                            )
                        }
                    </button>
                </div>
            </div>
            <div>
                <p className="title">{course.title}</p>
                <p className="description">{
                   course.description.length>=100?(course.description.substring(0,100)+'...'):(course.description)
                }
                </p>
            </div>
        </div>
    )
}
export default Card;