import axios from "axios"

export const savePortfolio = (project) => {
   const request = axios.post("http://localhost:3131/portfolio", project);
   console.log("lights, camera, action!");
   return {
      type: "CREATE_PORFOLIO",
      payload: request
   }
};

