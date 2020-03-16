//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  let [timer, setTimer] = useState(60);
  
  const reduceTimer = i => {
    setTimer(timer - 1)
  }
  setTimeout(() => {
    reduceTimer()
  }, 1000)

  if (timer < 0){
    timer = 0;
  }

  

  const homeScoreFieldGoal = i => {
    setHomeScore(homeScore + 3)
  }
  const awayScoreFieldGoal = i => {
    setAwayScore(awayScore + 3)
  }
  const homeScoreTouchDown = i => {
    setHomeScore(homeScore + 7)
  }
  const awayScoreTouchDown = i => {
    setAwayScore(awayScore + 7)
  }

  // const scoreFieldGoal = team => {
  //   if (team === 0) {
  //     setHomeScore(homeScore + 3)
  //   } else if (team === 1) {
  //     setAwayScore(awayScore + 3)
  //   }
  // }

  // const scoreTouchdown = team => {
  //   if (team === 0) {
  //     setHomeScore(homeScore + 7)
  //   } else if (team === 1) {
  //     setAwayScore(awayScore + 7)
  //   }
  // }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeScoreTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeScoreFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayScoreTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayScoreFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
