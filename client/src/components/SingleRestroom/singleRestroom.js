import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWheelchair,
  faBaby,
  faTransgenderAlt,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/formatDate";

const SingleRestroom = () => {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restroom, setRestroom] = useState({});

  const fetchData = async (name) => {
    try {
      const data = await (
        await fetch(
          `https://www.refugerestrooms.org/api/v1/restrooms/search?per_page=1&query=${name}`
        )
      ).json();

      console.log(data[0]);
      setRestroom(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchData(name), []);

  return (
    <div>
      {isLoading ? (
        <h3 align='center'>Loading...</h3>
      ) : (
        <div className="card">
          <div className="card-title">
            {restroom.name}{" "}
            {restroom.accessible ? (
              <FontAwesomeIcon icon={faWheelchair} />
            ) : null}{" "}
            {restroom.changing_table ? <FontAwesomeIcon icon={faBaby} /> : null}{" "}
            {restroom.unisex ? (
              <FontAwesomeIcon icon={faTransgenderAlt} />
            ) : null}
          </div>
          <div className="card-body">
            {restroom.street}
            <br />
            {restroom.city}, {restroom.state}
            <br />
            {restroom.directions.length > 1 ? (
              <>
                <div className="card-subtitle">Where:</div>
                {restroom.directions}
              </>
            ) : null}
            {restroom.comment.length > 1 ? (
              <>
                <div className="card-subtitle">Details:</div>
                {restroom.comment}
              </>
            ) : null}
            <br />
            Updated on: {formatDate(restroom.updated_at)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRestroom;
