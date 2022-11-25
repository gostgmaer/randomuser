import axios from "axios";

import {notifyerror } from '../Utility/Notification/Notification'


 const InvokeAPI = async (endpoint,type,body,headerParams, queryParam) => {
    const baseURL= 'https://randomuser.me/';
  const option = {
    method:type,
    url:baseURL+endpoint,
    headers: headerParams,
    params: queryParam,
    data:body
  };
  console.log(option);
  let response;
  
  try {
    response = await axios.request(option);
   
  } catch (e) {
   
      notifyerror(e.message,2000)
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeAPI