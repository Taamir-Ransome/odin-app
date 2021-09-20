import React, {useEffect, useRef, useState } from "react";
import Predict from '../prediction/Predict'
import Loader from 'react-loader-spinner';
import ml5 from "ml5";
import './Tabs.css'
import '../odinbutton/button.css'

let classifier

const ImageCaptureTab = () => {

  const videoRef = useRef();
  const imageRef = useRef();
  const [predictResult, setPredictResult] = useState([]);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [imagePresent, setImagePresent] = useState(false);
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
  
  const SnapPicture = () => {
    setPredictResult([])
    
    const width = 275;
    const height = 250;

    let video = videoRef.current
    let image = imageRef.current
      
    image.width = width;
    image.height = height;

    let ctx = image.getContext("2d");
    ctx.drawImage(video, 0,0, width, height)

    setImagePresent(true)
  }

  const odinDetect = () => {
    if (classifier && imagePresent && videoPresent) {
      classifier.classify(imageRef.current, (error, results) => {
        if (error) {
          console.error(error);
        }
        setPredictResult(results);
        console.log(results)
      });
    }
  };

  const canvasClear = () => {
    const canvas = document.getElementById("canvasId");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }  

  const reset = () => {
    setPredictResult([])
    setImagePresent(false)
    canvasClear()
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
      <div className='canvas-con'>
        <canvas 
          id='canvasId'
          className='pic-box'
          ref={imageRef}>
          </canvas>
        </div>
        <div className="video-container">
          <video
            className='vid-box'
            ref={videoRef}
            style={{ transform: 'scale(-1, 1)' }}
            width='300'
            height='300' />
        </div>
        <div className="btn-row">
          <button className="capture-btn" onClick={SnapPicture}>Snap </button>
          <button className="detect-btn" onClick={odinDetect}>Detect</button>
          <button className="reset-btn" onClick={reset}>Reset
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
export default ImageCaptureTab;