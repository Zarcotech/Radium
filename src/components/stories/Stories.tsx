import { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../context/authContext"

const Stories = () => {


  const {currentUser} = useContext(AuthContext);
   
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        {currentUser && (
          <>
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </>
        )}
      </div>
      {stories.map((story) => 
        <div className="story" key={story.id}>
            <img src={story.img} alt="img"/>
            <span>{story.name}</span>
        </div>
    )}
    </div>
  );
};

export default Stories;
