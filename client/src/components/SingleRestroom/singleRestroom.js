import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SingleRestroom = () => {
  const { name: name } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (name) => {
    try {
      const data = await (
        await fetch(
          `https://www.refugerestrooms.org/api/v1/restrooms/search?per_page=1&query=${name}`
        )
      ).json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(name);

  return (
      <div>
          {isLoading ? (
              <h1>Loading...</h1>
          ):(
              <div>Finished</div>
          )}
      </div>
  );
};

export default SingleRestroom;
