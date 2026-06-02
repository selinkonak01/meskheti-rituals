// Meskheti Rituals — Winkelmandje en Wishlist

// Twee arrays om producten bij te houden
var winkelmandje = [];
var wishlist = [];

// Product toevoegen aan winkelmandje
function addToCart(naam) {
  var gevonden = false;

  for (var i = 0; i < winkelmandje.length; i++) {
    if (winkelmandje[i].naam === naam) {
      winkelmandje[i].aantal++;
      gevonden = true;
      break;
    }
  }

  if (!gevonden) {
    winkelmandje.push({ naam: naam, aantal: 1 });
  }

  toonSidebar();
  toonMelding(naam + " toegevoegd aan winkelmandje");
}

// Product verwijderen uit winkelmandje
function removeFromCart(naam) {
  var nieuwMandje = [];
  for (var i = 0; i < winkelmandje.length; i++) {
    if (winkelmandje[i].naam !== naam) {
      nieuwMandje.push(winkelmandje[i]);
    }
  }
  winkelmandje = nieuwMandje;
  toonSidebar();
}

// Product toevoegen aan wishlist
function addToWishlist(naam) {
  var alOpLijst = false;
  for (var i = 0; i < wishlist.length; i++) {
    if (wishlist[i] === naam) {
      alOpLijst = true;
      break;
    }
  }

  if (!alOpLijst) {
    wishlist.push(naam);
    toonSidebar();
    toonMelding(naam + " toegevoegd aan wishlist");
  } else {
    toonMelding(naam + " staat al op je wishlist");
  }
}

// Product verwijderen uit wishlist
function removeFromWishlist(naam) {
  var nieuweLijst = [];
  for (var i = 0; i < wishlist.length; i++) {
    if (wishlist[i] !== naam) {
      nieuweLijst.push(wishlist[i]);
    }
  }
  wishlist = nieuweLijst;
  toonSidebar();
}

// Sidebar bijwerken met huidige inhoud
function toonSidebar() {
  var cartEl = document.querySelector(".cart-items");
  var wishEl = document.querySelector(".wishlist-items");

  if (cartEl) {
    if (winkelmandje.length === 0) {
      cartEl.innerHTML = '<p class="sidebar-empty">Leeg</p>';
    } else {
      var cartHTML = "";
      for (var i = 0; i < winkelmandje.length; i++) {
        cartHTML += '<div class="cart-item">';
        cartHTML += '<span>' + winkelmandje[i].naam + ' (' + winkelmandje[i].aantal + 'x)</span>';
        cartHTML += '<button onclick="removeFromCart(\'' + winkelmandje[i].naam + '\')">✕</button>';
        cartHTML += '</div>';
      }
      cartEl.innerHTML = cartHTML;
    }
  }

  if (wishEl) {
    if (wishlist.length === 0) {
      wishEl.innerHTML = '<p class="sidebar-empty">Leeg</p>';
    } else {
      var wishHTML = "";
      for (var i = 0; i < wishlist.length; i++) {
        wishHTML += '<div class="wishlist-item">';
        wishHTML += '<span>' + wishlist[i] + '</span>';
        wishHTML += '<button onclick="removeFromWishlist(\'' + wishlist[i] + '\')">✕</button>';
        wishHTML += '</div>';
      }
      wishEl.innerHTML = wishHTML;
    }
  }
}

// Kleine melding onderaan het scherm
function toonMelding(tekst) {
  var melding = document.getElementById("melding");

  if (!melding) {
    melding = document.createElement("div");
    melding.id = "melding";
    melding.style.position = "fixed";
    melding.style.bottom = "28px";
    melding.style.right = "28px";
    melding.style.backgroundColor = "#4a7c59";
    melding.style.color = "#ffffff";
    melding.style.padding = "12px 20px";
    melding.style.borderRadius = "8px";
    melding.style.fontFamily = "Inter, sans-serif";
    melding.style.fontSize = "0.85rem";
    melding.style.zIndex = "999";
    melding.style.opacity = "0";
    melding.style.transition = "opacity 0.3s";
    document.body.appendChild(melding);
  }

  melding.textContent = tekst;
  melding.style.opacity = "1";

  setTimeout(function () {
    melding.style.opacity = "0";
  }, 2500);
}

// Wishlist knop op productpagina
function initProductPagina() {
  var btn = document.querySelector(".btn-wishlist");
  if (!btn) return;

  var productNaam = document.querySelector("h1").textContent;

  btn.addEventListener("click", function () {
    var opLijst = false;
    for (var i = 0; i < wishlist.length; i++) {
      if (wishlist[i] === productNaam) {
        opLijst = true;
        break;
      }
    }

    if (opLijst) {
      removeFromWishlist(productNaam);
      btn.textContent = "+ Wishlist";
    } else {
      addToWishlist(productNaam);
      btn.textContent = "✓ Op wishlist";
    }
  });
}

// Opstarten wanneer de pagina geladen is
window.onload = function () {
  toonSidebar();
  initProductPagina();
};
