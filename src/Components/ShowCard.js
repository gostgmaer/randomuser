import React from "react";

const ShowCard = (user) => {
  console.log(user);

  return (
    <div>
      {user.user.map((data) => {
        return (
          <div class="frame card_offset">
            <div class="card">
              <div class="details">
                <div class="user_photo horizontal_center" id="user_photo">
                  <a href="" class="refresh">
                    New
                  </a>
                  <img src={data.picture.large} />
                </div>
                <p id="user_title">Hi, My name is</p>
                <p id="user_value">Joan Harvey</p>
              </div>
              <ul class="values_list horizontal_center" id="values_list">
                <li
                  data-title="Hi, My name is"
                  data-value="Joan Harvey"
                  data-label="name"
                  class=" active"
                ></li>
                <li
                  data-title="My email address is"
                  data-value="joan.harvey@example.com"
                  data-label="email"
                  data-caps="false"
                  class="  "
                ></li>
                <li
                  data-title="My birthday is"
                  data-value="9/4/1944"
                  data-label="birthday"
                  class="   "
                ></li>
                <li
                  data-title="My address is"
                  data-value="3986 E Pecan St"
                  data-label="location"
                  class="  "
                ></li>
                <li
                  data-title="My phone number is"
                  data-value="(437) 859-8224"
                  data-label="phone"
                  class="  "
                ></li>
                <li
                  data-title="My password is"
                  data-value="scarlett"
                  data-label="pass"
                  data-caps="false"
                  class="   "
                ></li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCard;
