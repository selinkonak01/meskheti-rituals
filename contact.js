document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.display = "none";
  document.getElementById("formSuccess").classList.add("visible");
});

const map = L.map("map").setView([51.05, 3.97], 8);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  maxZoom: 19,
}).addTo(map);

const logoIcon = L.icon({
  iconUrl: "./assets/images/logo-meskheti-rituals.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -45],
});

L.marker([51.2213, 4.4051], { icon: logoIcon })
  .addTo(map)
  .bindPopup(
    "<strong>Meskheti Rituals Antwerpen</strong><br>Meir 42, 2000 Antwerpen",
  );

L.marker([51.0543, 3.7174], { icon: logoIcon })
  .addTo(map)
  .bindPopup(
    "<strong>Meskheti Rituals Gent</strong><br>Veldstraat 15, 9000 Gent",
  );
