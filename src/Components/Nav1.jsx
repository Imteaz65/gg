import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";


function Nav1(){

  return(
    <>
      <nav>
        <div className="innerNav1">

          <div className="section1 logo pointer">
            BookUsNow
          </div>
          <div className="section2">
            <div className="categories-section" >

              <FaBars className="bar" />
              Categories
            </div>
            <div className="search-section">
              <input type="search" placeholder="DJI phantom" />
              <IoSearchOutline className="searchLogo" />
            </div>
            
          </div>

          <div className="section3">
            <div className="favorites">
              <FaHeart className="heart"/>
              &nbsp;
              <span>Favorities</span>
              &nbsp;&nbsp;
            </div>
            <div className="signinButton">
              <button>Sign in</button>
            </div>

            <div className="search_heart_user">
              <div className="searchIcon">
                <IoMdSearch style={{fontSize:"18px"}} className="searchLogo"/>
              </div>
              <div className="heartIcon">
                <FaHeart className="heart"/>
              </div>
              <div className="useIcon">
                <FaUser />
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
export default Nav1;