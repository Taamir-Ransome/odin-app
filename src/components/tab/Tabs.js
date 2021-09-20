import React, {useState} from "react";
import RealTimeTab from "./RealTimeTab";
import ImageCaptureTab from "./ImageCapturTab";
import './Tabs.css'

export default function Tabs() {
  
  const [activeTab, setActiveTab] = useState("realtime");

  const selectReal = () => {
    setActiveTab("realtime");
  }

  const selectImage = () => {
    setActiveTab("capture");
  }

  return (
    <div className="tab-main">
      <div className="tab-container">
         {/* Tab nav */}
        <ul className="nav">
          <li className={activeTab === "realtime" ? "active" : ""}
          onClick={selectReal}>Real Time</li>

          <li className={activeTab === "capture" ? "active" : ""}
          onClick={selectImage}>Image Capture</li>
        </ul>
        <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "realtime" ? <RealTimeTab /> : <ImageCaptureTab />}
        </div>
      </div>
    </div>
  )
}

