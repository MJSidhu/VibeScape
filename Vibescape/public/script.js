const capture = document.getElementById("capture");
const videoPopup = document.getElementById("videoPopup");
const webcamVideo = document.getElementById("video");
let videoStream = null;


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



// const capture = document.getElementById("capture");
// const videoPopup = document.getElementById("videoPopup");
// const webcamVideo = document.getElementById("webcamVideo");
// const emotionDisplay = document.getElementById("emotionDisplay");
// let videoStream = null;

// // Emotion to route mapping
// const emotionRoutes = {
//     happy: "/songs/setup-happy",
//     sad: "/songs/setup-sad",
//     energy: "/songs/setup-energy",
//     love: "/songs/setup-love",
//     melody: "/songs/setup-melody"
// };

// async function startWebcam() {
//     try {
//         videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
//         webcamVideo.srcObject = videoStream;
//         videoPopup.style.display = "flex"; // Show video popup
        
//         webcamVideo.onloadedmetadata = () => {
//             webcamVideo.play();
//             detectEmotions(); // Start emotion detection
//         };

//     } catch (err) {
//         console.error("Error accessing webcam:", err);
//     }
// }

// async function detectEmotions() {
//     await Promise.all([
//         faceapi.nets.ssdMobilenetv1.loadFromUri('models'),
//         faceapi.nets.faceLandmark68Net.loadFromUri('models'),
//         faceapi.nets.faceRecognitionNet.loadFromUri('models'),
//         faceapi.nets.faceExpressionNet.loadFromUri('models') // Load the emotion detection model
//     ]);

//     setInterval(async () => {
//         const detections = await faceapi.detectAllFaces(webcamVideo)
//             .withFaceLandmarks()
//             .withFaceExpressions();

//         if (detections.length === 0) {
//             emotionDisplay.innerHTML = "No face detected";
//             return;
//         }

//         const emotions = detections[0].expressions;
//         const maxEmotion = Object.keys(emotions).reduce((a, b) => emotions[a] > emotions[b] ? a : b);

//         emotionDisplay.innerHTML = `Detected Emotion: ${maxEmotion}`;
        
//         // Redirect to corresponding route based on emotion
//         navigateToEmotionRoute(maxEmotion);
//     }, 500);
// }

// function navigateToEmotionRoute(emotion) {
//     if (emotionRoutes[emotion]) {
//         window.location.href = emotionRoutes[emotion]; // Navigate to the corresponding route
//     }
// }

// function closeVideo() {
//     if (videoStream) {
//         videoStream.getTracks().forEach(track => track.stop());
//         videoStream = null;
//     }
//     videoPopup.style.display = "none"; 
// }

// capture.addEventListener("click", startWebcam);
