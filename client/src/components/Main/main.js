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
  
        <form action="#" class="form-flex">
          <ul>
            <li>
              <label for="restroom">
                <input type="checkbox" id="restroom" name="restroom" value="standard" />
                <span>Men's Restroom</span>
              </label>
            </li>
            <li>
              <label for="restroom2">
                <input type="checkbox" id="restroom" name="restroom" value="standard" />
                <span>Women's Restroom</span>
              </label>
            </li>
  
            <li>
              <label for="restroom3">
                <input type="checkbox" id="restroom2" name="restroom2" value="family" />
                <span>Family Restrooms</span>
              </label>
            </li>
  
            <li>
              <label for="restroom4">
                <input type="checkbox" id="restroom3" name="restroom3" value="unisex" />
                <span>Gender Neutral</span>
              </label>
            </li>
            <li>
              <label for="restroom6">
                <input type="checkbox" id="restroom3" name="restroom3" value="unisex" />
                <span>ADA Compliant</span>
              </label>
            </li>
          </ul>
        </form>
        <div className='theBttn'>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </div>
      </section>
    )
  }

   export default Main;