import reaction from "../src/images/icon-reaction.svg"
import memory from "../src/images/icon-memory.svg"
import verbal from "../src/images/icon-verbal.svg"
import visual from "../src/images/icon-visual.svg"
import './App.css';




function App() {
  return (
    <div className="App">
      <div className="main-ct">
        <div className="first-ct">
          <h2 className="head">Your Result</h2>
          <div className="score">
            <p className="sn">76 </p>
            <span className="ofh">of 100</span>
          </div>
          <h1 className="great">Great</h1>
          <p className="ptext">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="second-ct">
          <h2 className="summ">Summery</h2>
          <div className="actions  one">
            <div className="namesg">
               <img src={reaction} alt="rec" />
            <span className="reaction">Reaction</span>
           </div>
            <p className="up">80 <span className="down">/ 100</span></p>
          </div>
          <div  className="actions two">
            <div className="namesg">
              <img src={memory} alt="mem" />
            <span className="memory">Memory</span>
            </div>
           <p className="up">92 <span className="down">/ 100</span></p>
          </div>
          <div  className="actions three">
            <div className="namesg">
              <img src={verbal} alt="ver" />
            <span className="verbal">Verbal</span>
            </div>
           <p className="up"> 61<span className="down">/ 100</span></p>
          </div>
          <div  className="actions four">
            <div className="namesg">
              <img src={visual} alt="vis" />
            <span className="visual">Visual</span>
            </div>
            <p className="up">72 <span className="down">/ 100</span></p>
          </div>
          <button type="button" className="cont-btn">Continue</button>
        </div>
       </div>
    </div>
  );
}

export default App;
