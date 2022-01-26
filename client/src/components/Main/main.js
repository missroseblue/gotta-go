import React, { useState } from "react";
import goldtoiletpaper from "../../images/backgroundv3.jpg";

// // MAIN

function Main() {
  const [formState, setFormState] = useState({
    query: '',
    changingTable: false,
    unisex: false,
    adacomp: false,
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name } = event.target;

    if (name === "query") {
      setFormState({
        ...formState,
        query: event.target.value,
      });
    } else {
      setFormState({
        ...formState,
        [name]: event.target.checked,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      // fetch data from refuge restrooms API
      const data = await (
        await fetch(
          `https://www.refugerestrooms.org/api/v1/restrooms/search?per_page=20&ada=${
            formState.adacomp
          }&unisex=${formState.unisex}&query=${formState.query}`
        )
      ).json();
      console.log(data);

      if (formState.changingTable) {
        const restrooms = data.filter((restroom) => restroom.changing_table);
        console.log(restrooms);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flexbox-container">
        <img src={goldtoiletpaper} alt="gold toilet paper hanging on a roll" />
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="restroom-search">
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Search for a restroom"
            onChange={handleChange}
          ></input>
          <ul>
            <li>
              <label htmlFor="changingTable">
                <input
                  type="checkbox"
                  id="changingTable"
                  name="changingTable"
                  onChange={handleChange}
                />
                <span>Family Restrooms</span>
              </label>
            </li>
            <li>
              <label htmlFor="unisex">
                <input
                  type="checkbox"
                  id="unisex"
                  name="unisex"
                  onChange={handleChange}
                />
                <span>Gender Neutral</span>
              </label>
            </li>
            <li>
              <label htmlFor="adacomp">
                <input
                  type="checkbox"
                  id="adacomp"
                  name="adacomp"
                  onChange={handleChange}
                />
                <span>ADA Compliant</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="theBttn">
          <button className="btn waves-effect waves-light" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Main;
