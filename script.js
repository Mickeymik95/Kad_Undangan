// Lampu berwarna-warni
const lightsContainer = document.querySelector('.lights-container');
const colors = ['#ff4d4d', '#ffcc00', '#66ff66', '#66ccff', '#ff99ff'];
for(let i = 0; i < 30; i++){
    const light = document.createElement('div');
    light.classList.add('light');
    light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    light.style.left = `${Math.random() * 100}%`;
    light.style.animationDuration = `${1 + Math.random() * 2}s`;
    lightsContainer.appendChild(light);
}

// Bunga jatuh
const flowersContainer = document.querySelector('.flowers-container');
for(let i = 0; i < 40; i++){
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${5 + Math.random() * 5}s`;
    flower.style.animationDelay = `${Math.random() * 5}s`;
    flowersContainer.appendChild(flower);
}

// Butang RSVP
document.getElementById('rsvp-btn').addEventListener('click', function() {
  let name = prompt("Sila masukkan nama anda untuk RSVP:");
  if(name) {
    alert("Terima kasih, " + name + "! RSVP anda telah direkodkan.");
  }
});
