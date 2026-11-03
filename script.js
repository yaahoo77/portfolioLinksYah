const DISCORD_ID = "794662033806458912";
const LETTERBOXD_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fletterboxd.com%2Fgraffit_%2Frss%2F";

const statusNames = {
  online: "Online",
  idle: "Idle",
  dnd: "Don't disturb",
  offline: "Offline",
};

const statusColors = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};

const favoriteMovie = {
  title: "12 Angry Men, 1957",
  rating: "★★★★★",
  poster: "https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-1000-0-1500-crop.jpg?v=b8aaf291a9",
};

async function loadDiscord() {
  const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
  const json = await response.json();
  const data = json.data;

  const status = data.discord_status;
  document.getElementById("discord-status").textContent = statusNames[status];
  document.getElementById("discord-status-dot").style.backgroundColor = statusColors[status];

  const user = data.discord_user;
  document.getElementById("discord-avatar").src =
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
}

async function loadMovies() {
  document.getElementById("favorite-movie-title").textContent = favoriteMovie.title;
  document.getElementById("favorite-movie-rating").textContent = favoriteMovie.rating;
  document.getElementById("favorite-movie-poster").src = favoriteMovie.poster;

  const response = await fetch(LETTERBOXD_RSS);
  const json = await response.json();
  const lastWatched = json.items[0];
  const splitTitle = lastWatched.title.split(" - ");

  document.getElementById("last-watched-title").textContent = splitTitle[0];
  document.getElementById("last-watched-rating").textContent = splitTitle[1];
  document.getElementById("last-watched-poster").src = lastWatched.thumbnail;
}

const music = document.getElementById("music");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volume = document.getElementById("volume");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const vinyl = document.getElementById("vinyl");

function timeFormat(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return minutes + ":" + secs.toString().padStart(2, "0");
}

playButton.addEventListener("click", () => {
  music.play();
});

pauseButton.addEventListener("click", () => {
  music.pause();
});

music.volume = volume.value;
volume.addEventListener("input", () => {
  music.volume = volume.value;
});

music.addEventListener("loadedmetadata", () => {
  progress.max = music.duration;
});

music.addEventListener("timeupdate", () => {
  progress.value = music.currentTime;
  time.textContent = timeFormat(music.currentTime);
});

progress.addEventListener("input", () => {
  music.currentTime = progress.value;
});

music.addEventListener("play", () => {
  vinyl.classList.add("spinning");
});

music.addEventListener("pause", () => {
  vinyl.classList.remove("spinning");
});

const enterScreen = document.getElementById("enter-screen");
enterScreen.addEventListener("click", () => {
  music.play();
  enterScreen.classList.add("hidden");
});

const moviesCard = document.getElementById("movies-card");
const moviesToggle = document.getElementById("movies-toggle");
moviesToggle.addEventListener("click", () => {
  moviesCard.classList.toggle("open");
});

loadDiscord();
loadMovies();
