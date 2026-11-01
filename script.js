const DISCORD_ID = "794662033806458912";

const statusNames = {
  online: "Online",
  idle: "Idle",
  dnd: "Don't disturb",
  offline: "Offline",
};
const favoriteMovie = {
  title: "12 Angry Men, 1957",
  rating: "★★★★★",
  poster: "https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-1000-0-1500-crop.jpg?v=b8aaf291a9",
}

const statusColors = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
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
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fletterboxd.com%2Fgraffit_%2Frss%2F')
  const json = await response.json();
  const lastWatched = json.items[0];
  const splitTitle = lastWatched.title.split(' - ');
  document.getElementById("name_last-watched").textContent = splitTitle[0];
  document.getElementById("rating_last-watched").textContent = splitTitle[1];
  document.getElementById("poster_last-watched").src = lastWatched['thumbnail']
  document.getElementById("name_favorite-movie").textContent = favoriteMovie['title']
  document.getElementById("rating_favorite-movie").textContent = favoriteMovie['rating']
  document.getElementById("poster_favorite-movie").src = favoriteMovie['poster']
}
const music = document.getElementById("music")
const startMusicButton = document.getElementById("start_music-button")
const stopMusicButton = document.getElementById('stop_music-button')
const volume = document.getElementById("volume");
const time = document.getElementById('time')
startMusicButton.addEventListener("click", () => {
  music.play();
});
stopMusicButton.addEventListener("click", () => {
  music.pause();
});
music.volume = volume.value;
volume.addEventListener("input", () => {
  music.volume = volume.value
});

music.addEventListener("timeupdate", () => {
  timeFormat(music.currentTime)
  time.textContent = timeFormat

});
function timeFormat(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return minutes + ":" + secs.toString().padStart(2, "0");
}
loadDiscord();
loadMovies();

