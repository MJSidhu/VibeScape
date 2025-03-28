const capture = document.getElementById("capture");
const videoPopup = document.getElementById("videoPopup");
const webcamVideo = document.getElementById("video");
let videoStream = null;

// Function to start webcam
async function startWebcam() {
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = videoStream;
        videoPopup.style.display = "flex"; // Show video popup
    } catch (err) {
        console.error("Error accessing webcam:", err);
    }
}

// Function to stop webcam
function closeVideo() {
    if (videoStream) {
        let tracks = videoStream.getTracks();
        tracks.forEach(track => track.stop()); // Stop webcam
        videoStream = null;
    }
    videoPopup.style.display = "none"; // Hide popup
}

// Event listener for capture button
capture.addEventListener("click", startWebcam);



// await Promise.all([
//     faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
//     faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
//     faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
//     faceapi.nets.ageGenderNet.loadFromUri('./models'),
// ])
































































// const video = document.getElementById('video')
// const capture = document.getElementById('capture')
// const videoPopup = document.getElementById("videoPopup");
// const webcamVideo = document.getElementById("webcamVideo");
// let videoStream = null;

// function startVideo() {
//     navigator.getUserMedia(
//       { video: {} },
//       stream => video.srcObject = stream,
//       err => console.error(err)
//     )
//   }

// capture.addEventListener("click", startVideo);

// function closeVideo() {
//   if (videoStream) {
//       let tracks = videoStream.getTracks();
//       tracks.forEach(track => track.stop()); // Stop webcam
//       videoStream = null;
//   }
//   videoPopup.style.display = "none"; // Hide popup
// }