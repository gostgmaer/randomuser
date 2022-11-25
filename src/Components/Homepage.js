import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import InvokeAPI from "../API/API";
import Header from "./Header";
import ShowCard from "./ShowCard";

const Homepage = () => {
  const [user, seTuser] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await InvokeAPI("api/", "get", "", "1", "");
    
    seTuser(res.results);
   setTimeout( setLoader(false),2000)
    console.log(user);
  };
  return (
    <main>
      <Header></Header>
      {loader ? (
        <Bars width={""}></Bars>
      ) : (
       <ShowCard user={user} ></ShowCard>
      )}
    </main>
  );
};

export default Homepage;
