import React, {useEffect, useRef, useState } from "react";
import Predict from '../prediction/Predict'
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import ml5 from "ml5";
import './Tabs.css'
import '../odinbutton/button.css'

let classifier

const RealTimeTab = () => {
  const videoRef = useRef();
  const [startLivePredict, setStartLivePredict] = useState(false);
  const [predictResult, setPredictResult] = useState([]);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [videoPresent, setVideoPresent] = useState(false);

  

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          let video = videoRef.current
          video.srcObject = stream;
          video.play();
          setModelLoaded(true);
          setVideoPresent(true)
        });
    })
  }, []);

  useInterval(() => {
    if (classifier && startLivePredict) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);  
        }
        setPredictResult(results);
        console.log(results)
      });
    }
  }, 500);
  
  const toggle = () => {
    setStartLivePredict(!startLivePredict);
    setVideoPresent(!videoPresent);
    setPredictResult([]);
  }

  return (
    <div className="firstTab">
      <Loader
        type='Rings'
        color='#acc5f4'
        secondaryColor='#24263b'
        height={300}
        width={300}
        visible={!modelLoaded}
        style={{display:'flex', justifyContent:'center', marginTop:'50px' }}
      />
      <div className="realtime-container">
        <div className="video-container">
          <video
            className='vid-box'
            ref={videoRef}
            style={{ transform: 'scale(-1, 1)' }}
            width='300'
            height='300' />
        </div>
        <div className="btn-row">
          <button className="detect-start" onClick={() => toggle()}>
          {startLivePredict ? "Stop" : "Start"}
          </button>
        </div>
        <div className='predictions'>
          {predictResult.length > 0 && (
            <Predict data={predictResult[0]} />
          )}
        </div>
      </div>     
    </div>
  );
};
export default RealTimeTab;