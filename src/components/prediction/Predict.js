import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import './Predict.css'


const Predict = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));


  console.log(label, confidence);

  const confidenceLevel = (confidence * 100)

  return (
    <div className="progress-main">
      <div className="progress-one">
        <h3 className="confidence-one">
        {label} - Confidence: {confidenceLevel}%</h3>
      </div>
      <div className="progress-bar">
        <ProgressBar 
          striped variant="danger" 
          now={confidenceLevel} 
          label={`${confidenceLevel} %`}
          />
      </div>
    </div>
  )
    
}

export default Predict

