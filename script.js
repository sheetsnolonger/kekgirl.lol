let score = 0;

const tracks = [
  "under my bed",
  "audio diary",
  "and i dance",
  "static angel"
];

let currentTrack = 0;

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  document.getElementById("trackName").textContent = tracks[currentTrack];
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  document.getElementById("trackName").textContent = tracks[currentTrack];
}

function newGame() {
  score = 0;
  document.getElementById("score").textContent = score;
  alert("game started");
}
