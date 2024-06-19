import { useState } from 'react';
import './App.css';
import ReactModal from 'react-modal';
import LoginSignup from './components/LoginSignup/LoginSignup';

const App=()=> {
    const[visible,setVisible]=useState(false)
  return (
   <>
    <div id="header">
        <div>
            <button onClick={()=>setVisible(true)}>Login</button>
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
            </ReactModal>
        </div> 
    </div> 
    <div>
    <div id="main-content">
      <div id="leftbar-main">
        <div class="sidebar">
          <div class="filter-section">
              <label>Service</label>
              <label><input type="checkbox" id="AUAService"/> AUA Service</label>
              <label><input type="checkbox" id="KUAService"/> KUA Service</label>
              <label><input type="checkbox" id="KUAOTPService"/> KUA-OTP Service</label>
              <label><input type="checkbox" id="AadhaarOTPService"/> Aadhaar-OTP Service</label>
              <label><input type="checkbox" id="PANService"/> PAN Service</label>
          </div>
          <div class="filter-section">
              <label>Consumer Name</label>
              <label><input type="checkbox" id="consumerA"/> A</label>
              <label><input type="checkbox" id="consumerB"/> B</label>
              <label><input type="checkbox" id="consumerC"/> C</label>
          </div>
          <div class="filter-section">
              <label>Date</label>
              <label><input type="checkbox" id="currentMonth"/> Current Month</label>
              <label><input type="checkbox" id="lastMonth"/> Last Month</label>
              <label><input type="checkbox" id="last3Months"/> Last 3 Months</label>
              <label><input type="checkbox" id="last6Months"/> Last 6 Months</label>
              <label><input type="checkbox" id="currentYear"/> Current Year</label>
              <select>
                  <option value="selectRange">Select Range</option>
              </select>
          </div>
          <div class="filter-section">
              <label>UIDAI TXN STATUS</label>
              <label><input type="checkbox" id="uidaiY"/> Y</label>
              <label><input type="checkbox" id="uidaiN"/> N</label>
          </div>
          <div class="filter-section">
              <label>Client Id</label>
              <label><input type="checkbox" id="savingDomain"/> Saving Domain</label>
              <label><input type="checkbox" id="insuranceDomain"/> Insurance Domain</label>
          </div>
          <div class="filter-section">
              <label>Response Time</label>
              <label><input type="checkbox" id="responseSelectAll"/> Select All</label>
              <label><input type="checkbox" id="below100ms"/> Below 100ms</label>
              <label><input type="checkbox" id="100msTo200ms"/> 100ms-200ms</label>
              <label><input type="checkbox" id="200msTo300ms"/> 200ms-300ms</label>
              <label><input type="checkbox" id="300msTo400ms"/> 300ms-400ms</label>
              <label><input type="checkbox" id="400msTo500ms"/> 400ms-500ms</label>
              <label><input type="checkbox" id="above500ms"/> Above 500ms</label>
          </div>
          <div class="filter-section">
              <label>ASAKSA Response Time</label>
              <label><input type="checkbox" id="asaSelectAll"/> Select All</label>
              <label><input type="checkbox" id="below10ms"/> Below 10ms</label>
              <label><input type="checkbox" id="10msTo20ms"/> 10ms-20ms</label>
              <label><input type="checkbox" id="20msTo30ms"/> 20ms-30ms</label>
              <label><input type="checkbox" id="30msTo40ms"/> 30ms-40ms</label>
              <label><input type="checkbox" id="40msTo50ms"/> 40ms-50ms</label>
              <label><input type="checkbox" id="above50ms"/> Above 50ms</label>
          </div>
          <div class="filter-section">
              <label>Is received after kafka failure?</label>
              <label><input type="checkbox" id="0"/> 0</label>
              <label><input type="checkbox" id="1"/> 1</label>
          </div>
          <button>Apply</button>
        </div>
      </div>
      <div id="right-main">
          <div id="right-main-header">
            <div class="buttons">
              <div>
                  <button>Browse</button>
                  <button>Upload</button>
                  <button>Dropdown</button>
                  <button>Search</button>
              </div>
              <div>
                  <button>Sort</button>
                  <button>Asc/Desc</button>
              </div>
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
            <div>
              <button>Previous</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>Next</button>
          </div>
          <div>
              <button>Download</button>
          </div>
          </div>
      </div>
    </div>
    </div>
   </>
  );
}
export default App;
