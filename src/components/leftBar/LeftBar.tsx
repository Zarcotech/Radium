import "./LeftBar.scss";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryIcon from "@mui/icons-material/History";
import EventIcon from "@mui/icons-material/Event";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MessageIcon from "@mui/icons-material/Message";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser?.profilePic}
              alt=""
            />
            <span>{currentUser?.name}</span>
          </div>
          <div className="item">
            <PeopleIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <HistoryIcon />
            <span>Memories</span>
          </div>
          <div className="item">
            <GroupsIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <HistoryIcon />
            <span>Memories</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <HistoryIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <EventIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <PhotoLibraryIcon />
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideoLibraryIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <MessageIcon />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <VolunteerActivismIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <MenuBookIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <SchoolIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;