import React, { useState } from "react";

import {
  FaMailBulk,
  FaMap,
  FaNotesMedical,
  FaPhone,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import Datacard from "./Datacard";
const ShowCard = ({ user, seTuser, setLoader, loader }) => {
  const [text, settext] = useState(1);
  console.log(user);
  const getuserClick = () => {
    setLoader(!loader);
  };
  return (
    <div>
      {user.map((data, index) => {
        return (
          <div key={index} class="frame card_offset">
            <div class="card">
              <div class="details">
                <div class="user_photo horizontal_center" id="user_photo">
                  <img
                    className=" p-2"
                    alt={data.name.first}
                    src={data.picture.large}
                  />
                </div>
              </div>
              <div className="col-8 m-auto">
                <div>
                <Datacard settext={settext} text={text} data={data} ></Datacard>
                
                </div>
              </div>
              <div className="col-8 m-auto ">
                <ul
                  class="list-unstyled justify-content-around align-items-center d-flex align-content-center col-12"
                  id="values_list"
                >
                  <li
                    onMouseOver={() => 
                      settext(1)
                    }
                    className=" btn btn-danger"
                    onClick={()=>settext(1)}
                   
                  >
                    <FaUser></FaUser>
                  </li>
                  <li  onMouseOver={() => 
                      settext(2)
                    }
                    className=" btn btn-danger"
                    onClick={()=>settext(2)}
                   
                  >
                    <FaMailBulk></FaMailBulk>
                  </li>
                  <li  onMouseOver={() => 
                      settext(3)
                    }
                    data-title="My birthday is"
                    data-value="9/4/1944"
                    data-label="birthday"
                    class="   "
                  >
                    <FaNotesMedical></FaNotesMedical>
                  </li>
                  <li  onMouseOver={() => 
                      settext(4)
                    }
                    data-title="My address is"
                    data-value="3986 E Pecan St"
                    data-label="location"
                    class="  "
                  >
                    <FaMap></FaMap>
                  </li>
                  <li  onMouseOver={() => 
                      settext(5)
                    }
                    data-title="My phone number is"
                    data-value="(437) 859-8224"
                    data-label="phone"
                    class="  "
                  >
                    <FaPhone></FaPhone>
                  </li>
                  <li  onMouseOver={() => 
                      settext(6)
                    }
                    data-title="My password is"
                    data-value="scarlett"
                    data-label="pass"
                    data-caps="false"
                    class="   "
                  >
                    <FaShieldAlt></FaShieldAlt>
                  </li>
                </ul>
              </div>
              <div className="col-12 m-auto">
                <button
                  type="button"
                  onClick={getuserClick}
                  class="btn btn-primary"
                >
                  Get User
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCard;
