const statuses = {
  online: "Online",
  idle: "Idle",
  dnd: "Don't disturb",
  offline: "Offline",
};

async function getLanyardData() {
  const answerLanyard = await fetch(
    "https://api.lanyard.rest/v1/users/794662033806458912",
  );
  const json = await answerLanyard.json();
  const data = json.data;
  const discord_status = document.getElementById("discord_status");
  discord_status.textContent = data.discord_status;
  const status = data.discord_status;
  console.log(statuses[status]);
  const avatar = document.getElementById("avatar");
  const adres = "https://cdn.discordapp.com/avatars/${avatar}/${zdjecie}.png";
  discordpfp.src = adres;
}
getLanyardData();
