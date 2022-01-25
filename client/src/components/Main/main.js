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
              <label htmlFor="restroom">
                <input type="checkbox" id="restroom" name="restroom" value="standard" />
                <span>Men's Restroom</span>
              </label>
            </li>
            <li>
              <label htmlFor="restroom2">
                <input type="checkbox" id="restroom" name="restroom" value="standard" />
                <span>Women's Restroom</span>
              </label>
            </li>
  
            <li>
              <label htmlFor="restroom3">
                <input type="checkbox" id="restroom2" name="restroom2" value="family" />
                <span>Family Restrooms</span>
              </label>
            </li>
  
            <li>
              <label htmlFor="restroom4">
                <input type="checkbox" id="restroom3" name="restroom3" value="unisex" />
                <span>Gender Neutral</span>
              </label>
            </li>
            <li>
              <label htmlFor="restroom6">
                <input type="checkbox" id="restroom3" name="restroom3" value="unisex" />
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