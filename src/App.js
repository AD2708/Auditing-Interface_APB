import  React, { useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Daterange from './components/daterange/daterange';
import APB from '../src/components/assets/APB.avif';
import Dropdown from './components/dropdown/dropdown';

const App=()=> {

    const handleSearch = () => {
        alert(`Filter Applied`);
      };

  return (
   <>
    <div id="header">
    <img src={APB} alt='img'></img>
        <div>
            {/* <button onClick={()=>setVisible(true)}>Login</button>
            <ReactModal isOpen={visible} onRequestClose={()=>setVisible(false)} style={{
                overlay:{
                    background:"black",
                    alignItems:"center",
                    justifyContent:"center"
                },
                content:{
                    width:"500px",
                    height:"500px"
                }
            }}>
                <LoginSignup/>
            </ReactModal> */}
        </div> 
    </div> 
    <div>
    <div id="main-content">
      <div id="leftbar-main">
        <div className="sidebar">     
        <div className="filter-section">
              <Dropdown/>
          </div> 
          <div className="filter-section">
              <SearchBox/>
          </div> 
          <div className="filter-section">
            <Daterange/>
          </div>
          <div className="filter-section">
              <label>Client Id</label>
              <label><input type="checkbox" id="savingDomain"/> Saving Domain</label>
              <label><input type="checkbox" id="insuranceDomain"/> Insurance Domain</label>
          </div>
          <button style={{padding:"5px",borderRadius:"0.5rem"}} onClick={handleSearch}>Apply</button>
        </div>
      </div>
      <div id="right-main">
          <div id="right-main-header">
            <div className="buttons">
                  <button>Sort</button>
                  <button>Asc/Desc</button>
            </div>
          </div>
          <div id="h-bar"></div>
          <div id="right-main-content">
            <table>
              <thead>
                  <tr>
                      <th>S.No</th>
                      <th>Transaction Id</th>
                      <th>Date</th>
                      <th>Response Time</th>
                      <th>ASA Response Time</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Transaction 1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Transaction 2</td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Transaction 3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Transaction 4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Transaction 5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
              </tbody>
              </table>
          </div>
          <div id="h-bar"></div>
          <div id="right-main-footer">
                <div className='footer-buttons'>
                    <button>Previous</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>Next</button>
                </div>
          </div>
      </div>
    </div>
    </div>
   </>
  );
}
export default App;
