import React from 'react';  
import goldtoiletpaper from '../../images/backgroundv3.jpg'; 


// // MAIN

function Main() {
    return (
  
      <section>
        <div className="flexbox-container">
          <img
            src={goldtoiletpaper}
            alt="gold toilet paper hanging on a roll" />
        </div>
  
        <div>
          <form>
  
          </form>
        </div>
  
        <form action="#" className="form-flex">
          <ul>
            <li>
              <label htmlFor="men">
                <input type="checkbox" id="men" name="men" value="men" />
                <span>Men's Restroom</span>
              </label>
            </li>
            <li>
              <label htmlFor="women">
                <input type="checkbox" id="women" name="women" value="women" />
                <span>Women's Restroom</span>
              </label>
            </li>
  
            <li>
              <label htmlFor="family">
                <input type="checkbox" id="family" name="family" value="family" />
                <span>Family Restrooms</span>
              </label>
            </li>
  
            <li>
              <label htmlFor="unisex">
                <input type="checkbox" id="unisex" name="unisex" value="unisex" />
                <span>Gender Neutral</span>
              </label>
            </li>
            <li>
              <label htmlFor="adacomp">
                <input type="checkbox" id="adacomp" name="adacomp" value="unisex" />
                <span>ADA Compliant</span>
              </label>
            </li>
          </ul>
        </form>
        <div className='theBttn'>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </div>
      </section>
    )
  }

   export default Main;