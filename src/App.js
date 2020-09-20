import React from "react";
import "./App.css";

const containerStyle = {
  margin: "15% 35%",
};

function join() {
  console.log("Joined");
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((Stream) => {
      console.log(Stream);
      gotLocalMediaStream(Stream);
    })
    .catch((error) => {
      console.log(error);
      handleLocalMediaStreamError(error);
    });

  const localVideo = document.querySelector("video");
  function gotLocalMediaStream(mediaStream) {
    const localStream = mediaStream;
    localVideo.srcObject = mediaStream;
  }
}

function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}
function App() {
  return (
    <div className="App">
      <div className="container" style={containerStyle}>
        <input type="text" placeholder="Enter Your meeting ID"></input>
        <button onClick={() => join()}>Join Now</button>
      </div>
      <video autoPlay playsInline></video>
    </div>
  );
}

export default App;
