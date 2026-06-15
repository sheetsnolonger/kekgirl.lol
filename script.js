const songs = [
  "static angel - signal loss",
  "blue cassette - night drive",
  "ghost frequency - dead channel",
  "midnight static - under my bed"
];

let currentSong = 0;

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  document.getElementById("song").textContent = songs[currentSong];
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  document.getElementById("song").textContent = songs[currentSong];
}

let views = localStorage.getItem("views");

if (!views) {
  views = 1;
} else {
  views = Number(views) + 1;
}

localStorage.setItem("views", views);

document.getElementById("views").textContent = String(views).padStart(6, "0");
