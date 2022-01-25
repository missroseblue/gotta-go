import React, { useState } from "react";
import goldtoiletpaper from "../../images/backgroundv3.jpg";

// // MAIN

function Main() {
  const [formState, setFormState] = useState({
    men: false,
    women: false,
    family: false,
    unisex: false,
    adacomp: false,
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name } = event.target;

    setFormState({
      ...formState,
      [name]: event.target.checked,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // fetch data from refuge restrooms API
      const data = await (await fetch(`https://www.refugerestrooms.org/api/v1/restrooms?ada=${formState.adacomp}&unisex=${formState.unisex}`)).json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flexbox-container">
        <img src={goldtoiletpaper} alt="gold toilet paper hanging on a roll" />
      </div>

      <div>
        <form></form>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="form-flex">
          <ul>
            <li>
              <label htmlFor="men">
                <input
                  type="checkbox"
                  id="men"
                  name="men"
                  value={formState.men}
                  onChange={handleChange}
                />
                <span>Men's Restroom</span>
              </label>
            </li>
            <li>
              <label htmlFor="women">
                <input
                  type="checkbox"
                  id="women"
                  name="women"
                  value={formState.women}
                  onChange={handleChange}
                />
                <span>Women's Restroom</span>
              </label>
            </li>

            <li>
              <label htmlFor="family">
                <input
                  type="checkbox"
                  id="family"
                  name="family"
                  value={formState.family}
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
                  value={formState.unisex}
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
                  value={formState.adacomp}
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
