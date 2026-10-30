const statuses = {
  online: "Online",
  idle: "Idle",
  dnd: "Don't disturb",
  offline: "Offline",
};
const statusesColors = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};
async function getLanyardData() {
  const answerLanyard = await fetch(
    "https://api.lanyard.rest/v1/users/794662033806458912",
  );
  const json = await answerLanyard.json();
  const data = json.data;
  const discord_status = document.getElementById("discord_status");
  const status = data.discord_status;
  discord_status.textContent = statuses[status];
  const status_dot = document.getElementById("status_dot");
  status_dot.style.backgroundColor(statusesColors[status]);
  const discordpfp = document.getElementById("discordpfp");
  const adres = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;
  discordpfp.src = adres;
}
getLanyardData();
