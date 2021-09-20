import React from "react";
import Tabs from '../../components/tab/Tabs'
import './Main.css'


/**
 * Main page component
 * @returns {JSX}
 */

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <h1>Classifier</h1>
      </div>
      <div className="main-content">
        <Tabs />
      </div>
    </div>
  )
}

export default MainPage
