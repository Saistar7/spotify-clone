let audio = new Audio();

// 🔥 YAHAN SE tum gaane add karoge
let songs = [
  {
    name: "Dope Shope(Honey Paaji)",
    file: "songs/Dope_Shope.mp3"
  },
  {
  name: "Ek Ajnabee Haseena Se",
  file: "songs/Ek_Ajnabee_Haseena_Se___4K_Video___Ajanabee___Rajesh_Khanna,_Zeenat_Aman___Kishore_Kumar___90s_Hits(256k).mp3"
},
{
  name: "Mokingbird",
  file: "songs/Eminem_-_Mockingbird_[Official_Music_Video](128k).m4a"
},
{
  name: "Raanjhan",
  file: "songs/Full_Video__Raanjhan___Do_Patti___Kriti_Sanon,_Shaheer_Sheikh___Parampara_Tandon___Sachet-Parampara(256k).mp3"
},
{
  name: "Hich Amuchi Prarthana",
  file: "songs/Hich_Amuchi_Praarthana_-_Ubuntu___Sarang_Sathaye___Bhagyashree_Shankpal___Ajit_Parab___Mugdha_V(256k).mp3"
},
{
  name: "Kabhi jo badal barse",
  file: "songs/kabhi_Jo_Badal_Barse.mp3"
},
{
  name: "Despacito",
  file: "songs/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee(256k).mp3"
},
{
  name: "Mann_Bharryaa 2",
  file: "songs/Mann_Bharryaa_2.0_–_Official_Video___Shershaah___Sidharth_–_Kiara___B_Praak___Jaani(256k).mp3"
},
{
  name: "Naadkhula",
  file: "songs/Mi_Naadkhula___Dj_CT_Music___Dance_Remix(256k).mp3"
},
  {
    name: "Dunki",
    file: "songs/Dunki.mp3"
  }
];

// 🎵 UI me songs show karo
let container = document.getElementById("songContainer");

songs.forEach(song => {
  let div = document.createElement("div");
  div.className = "song";

  div.innerHTML = `
    <span>${song.name}</span>
    <button onclick="playSong('${song.file}')">Play</button>
  `;

  container.appendChild(div);
});

function playSong(path) {
  audio.src = path;
  audio.play().catch(() => {
    alert("Song load nahi ho raha — file check karo");
  });
}

function pauseSong() {
  audio.pause();
}