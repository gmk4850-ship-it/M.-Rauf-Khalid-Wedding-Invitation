/*
  EDIT YOUR WEDDING DETAILS HERE.
  Keep this configuration near the top; the design is controlled by style.css.
*/
const WEDDING_CONFIG = {
  groomName: "M. Rauf Khalid",
  brideName: "Laiba Tanveer",
  monogram: "R & L",
  eventTitle: "Walima Reception",
  eventDay: "Saturday",
  eventDate: "5 December 2026",
  eventTime: "6:00 PM onwards",
  venueName: "Cesped Farm House",
  venueAddress: "Near Mughal e Azam Grand, Adda Plot, Raiwind Road",
  googleMapsUrl: "https://maps.app.goo.gl/YG77iKZ7BF1Jd3EW9",

  // Put your image inside assets/ and update the path, e.g. "assets/couple.jpg".
  couplePhoto: "",

  // Optional: add an MP3 to assets/ and enter its path below.
  musicFile: "",

  backgroundColor: "#f7f8f7",
  textColor: "#596d66",
  accentColor: "#bba477",

  rsvpContacts: [
    { name: "Khalid Ali Shan", phone: "03334219287" },
    { name: "G Mustafa Khalid", phone: "03044778516" }
  ]
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element && value != null) element.textContent = value;
};

setText("groomName", WEDDING_CONFIG.groomName);
setText("brideName", WEDDING_CONFIG.brideName);
setText("monogram", WEDDING_CONFIG.monogram);
setText("eventTitle", WEDDING_CONFIG.eventTitle);
setText("eventDayDate", [WEDDING_CONFIG.eventDay, WEDDING_CONFIG.eventDate].filter(Boolean).join(", "));
setText("eventTime", WEDDING_CONFIG.eventTime);
setText("venueName", WEDDING_CONFIG.venueName);
setText("venueAddress", WEDDING_CONFIG.venueAddress);

const mapsLink = document.getElementById("mapsLink");
if (mapsLink && WEDDING_CONFIG.googleMapsUrl) mapsLink.href = WEDDING_CONFIG.googleMapsUrl;

if (WEDDING_CONFIG.couplePhoto) {
  const photo = document.getElementById("couplePhoto");
  photo.src = WEDDING_CONFIG.couplePhoto;
  photo.hidden = false;
  document.getElementById("photoPlaceholder").hidden = true;
}

document.documentElement.style.setProperty("--paper", WEDDING_CONFIG.backgroundColor || "#f7f8f7");
document.documentElement.style.setProperty("--ink", WEDDING_CONFIG.textColor || "#596d66");
document.documentElement.style.setProperty("--gold", WEDDING_CONFIG.accentColor || "#bba477");

const contacts = document.getElementById("contacts");
const toInternational = phone => {
  const digits = String(phone || "").replace(/\D/g, "");
  if (digits.startsWith("0")) return "92" + digits.slice(1);
  return digits;
};

(WEDDING_CONFIG.rsvpContacts || []).forEach(contact => {
  const card = document.createElement("div");
  card.className = "contact-card";
  const name = document.createElement("strong");
  name.textContent = contact.name;
  const actions = document.createElement("div");
  actions.className = "contact-actions";
  const international = toInternational(contact.phone);

  const whatsapp = document.createElement("a");
  whatsapp.href = `https://wa.me/${international}`;
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.textContent = "WhatsApp";

  const call = document.createElement("a");
  call.href = `tel:${contact.phone}`;
  call.textContent = "Call";

  actions.append(whatsapp, call);
  card.append(name, actions);
  contacts.append(card);
});

if (WEDDING_CONFIG.musicFile) {
  const audio = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicToggle");
  audio.src = WEDDING_CONFIG.musicFile;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        button.textContent = "♫ Pause music";
      } else {
        audio.pause();
        button.textContent = "♫ Play music";
      }
    } catch (error) {
      button.textContent = "Music unavailable";
    }
  });
}
