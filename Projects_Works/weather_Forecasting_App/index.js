// ==========================================
// 1. DOM SELECTORS
// ==========================================

// ---------------- NAVBAR ----------------
let data = document.querySelector("#location");
let btn = document.querySelector("#btn");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let datee = document.querySelector("#date");

// ---------------- MAIN ----------------
let weather = document.querySelector("#weather");
let degree = document.querySelector("#degree");
let lat = document.querySelector("#lat");
let lon = document.querySelector("#lon");

// ---------------- SIDE MAIN ----------------
let loading = document.querySelector(".loading");
let context = null;

// ---------------- FOOTER TOP SEC ----------------

// -------------- FT: Time --------------
let slotnow = document.querySelector("#slotnow");
let morning = document.querySelector("#morning");
let noon = document.querySelector("#noon");
let evening = document.querySelector("#evening");
let night = document.querySelector("#night");

// -------------- FT: Icon --------------
let cuurentIcon = document.querySelector("#nowIcon");
let morningIcon = document.querySelector("#morningIcon");
let noonIcon = document.querySelector("#noonIcon");
let eveningIcon = document.querySelector("#eveningIcon");
let nightIcon = document.querySelector("#nightIcon");

// -------------- FT: Degree --------------
let currentDeg = document.querySelector("#currentDeg");
let morningDeg = document.querySelector("#morningDeg");
let noonDeg = document.querySelector("#noonDeg");
let eveningDeg = document.querySelector("#eveningDeg");
let nightDeg = document.querySelector("#nightDeg");

// ---------------- FOOTER BOTTOM SEC ----------------
let todaySlot = document.querySelector("#todaySlot");
let tdy = document.querySelector("#tdy");
let tdyHum = document.querySelector("#tdyHum");
let todayCloudStatus = document.querySelector("#todayCloudStatus");
let tdyMin = document.querySelector("#tdyMin");
let tdyMax = document.querySelector("#tdyMax");

// -------------
let tomorrowSlot = document.querySelector("#tomorrowSlot");
let tmrw = document.querySelector("#tmrw");
let tmrwHum = document.querySelector("#tmrwHum");
let tmrwCloudStatus = document.querySelector("#tmrwCloudStatus");
let tmrwMin = document.querySelector("#tmrwMin");
let tmrwMax = document.querySelector("#tmrwMax");

// -------------
let aftertomorrowSlot = document.querySelector("#AftertomorrowSlot");
let after_tmrw = document.querySelector("#after_tmrw");
let after_tmrwHum = document.querySelector("#after_tmrwHum");
let after_tmrwCloudStatus = document.querySelector("#after_tmrwCloudStatus");
let after_tmrwMin = document.querySelector("#after_tmrwMin");
let after_tmrwMax = document.querySelector("#after_tmrwMax");

// ---------------- ASTRO ----------------
// --- SUNRISE ---
let sunriseTxt = document.querySelector("#sunriseTxt");
let sunriseImg = document.querySelector("#sunriseImg");

// --- SUNSET ---
let sunsetTxt = document.querySelector("#sunsetTxt");
let sunsetImg = document.querySelector("#sunsetImg");

// --- MOONRISE ---
let moonriseTxt = document.querySelector("#moonriseTxt");
let moonriseImg = document.querySelector("#moonriseImg");

// --- MOONSET ---
let moonsetTxt = document.querySelector("#moonsetTxt");
let moonsetImg = document.querySelector("#moonsetImg");

// --- MOONPHASE ---
let moonphaseTxt = document.querySelector("#moonphaseTxt");
let moonphaseImg = document.querySelector("#moonphaseImg");

// ==========================================
// 2. FUNCTIONS & LOGIC
// ==========================================

// ---------------- CURRENT TIMELINE FUNCTION ----------------
function timeline(forecastdayz, currentLocation, currentIcon) {
  let now = new Date();

  day.textContent = `${now.toLocaleDateString("en-IN", { weekday: "long" }).toLowerCase()}`;
  month.textContent = `${now.toLocaleDateString("en-IN", { month: "long" }).toLowerCase()}`;
  datee.textContent = `${now.toLocaleDateString("en-IN", { day: "numeric" })}`;
  let format = { hour: "numeric", hour12: true };
  let hourlyData = forecastdayz[0].hour;
  let currentSlot = currentLocation.localtime;
  let currentImg = currentIcon;

  let currentHour = new Date(currentLocation.localtime).getHours();
  let morningSlot = hourlyData[Math.min(currentHour + 1, 23)];
  let noonSlot = hourlyData[Math.min(currentHour + 2, 23)];
  let eveningSlot = hourlyData[Math.min(currentHour + 3, 23)];
  let nightSlot = hourlyData[Math.min(currentHour + 4, 23)];
  let slot6Data = hourlyData[Math.min(currentHour + 5, 23)];
  let slot7Data = hourlyData[Math.min(currentHour + 6, 23)];
  let slot8Data = hourlyData[Math.min(currentHour + 7, 23)];

  // ------- DISPLAY CURRENT -------
  slotnow.textContent = "now";
  cuurentIcon.src = currentImg.condition.icon;
  currentDeg.textContent = `${Math.round(currentImg.temp_c)}°C`;

  // ------- DISPLAY SLOT 2 (+1 Hour) -------
  morning.textContent = new Date(morningSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  morningIcon.src = morningSlot.condition.icon;
  morningDeg.textContent = `${Math.round(morningSlot.temp_c)}°C`;

  // ------- DISPLAY SLOT 3 (+2 Hours) -------
  noon.textContent = new Date(noonSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  noonIcon.src = noonSlot.condition.icon;
  noonDeg.textContent = `${Math.round(noonSlot.temp_c)}°C`;

  // ------- DISPLAY SLOT 4 (+3 Hours) -------
  evening.textContent = new Date(eveningSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  eveningIcon.src = eveningSlot.condition.icon;
  eveningDeg.textContent = `${Math.round(eveningSlot.temp_c)}°C`;

  // ------- DISPLAY SLOT 5 (+4 Hours) -------
  night.textContent = new Date(nightSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  nightIcon.src = nightSlot.condition.icon;
  nightDeg.textContent = `${Math.round(nightSlot.temp_c)}°C`;

  // ------- DISPLAY SLOT 6 (+5 Hours) -------
  slot6.textContent = new Date(slot6Data.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  slot6Icon.src = slot6Data.condition.icon;
  slot6Deg.textContent = `${Math.round(slot6Data.temp_c)}°C`;

  // ------- DISPLAY SLOT 7 (+6 Hours) -------
  slot7.textContent = new Date(slot7Data.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  slot7Icon.src = slot7Data.condition.icon;
  slot7Deg.textContent = `${Math.round(slot7Data.temp_c)}°C`;

  // ------- DISPLAY SLOT 8 (+7 Hours) -------
  slot8.textContent = new Date(slot8Data.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  slot8Icon.src = slot8Data.condition.icon;
  slot8Deg.textContent = `${Math.round(slot8Data.temp_c)}°C`;
}

// ---------------- To-DAY TIMELINE FUNCTION ----------------
function todayForcast(tdyData) {
  let tdyDay = new Date(tdyData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  todaySlot.textContent = tdyDay;
  tdy.src = tdyData.day.condition.icon;
  todayCloudStatus.textContent = tdyData.day.condition.text;
  tdyHum.textContent = `H : ${Math.round(tdyData.day.avghumidity)}%`;
  tdyMax.textContent = `Mx : ${Math.round(tdyData.day.maxtemp_c)}°C`;
  tdyMin.textContent = `Mn : ${Math.round(tdyData.day.mintemp_c)}°C`;
}

// ---------------- NEXT-DAY TIMELINE FUNCTION ----------------
function tmrwForcast(tmrwData) {
  let tmrwDay = new Date(tmrwData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  tomorrowSlot.textContent = tmrwDay;
  tmrw.src = tmrwData.day.condition.icon;
  tmrwCloudStatus.textContent = tmrwData.day.condition.text;
  tmrwHum.textContent = `H : ${Math.round(tmrwData.day.avghumidity)}%`;
  tmrwMax.textContent = `Mx : ${Math.round(tmrwData.day.maxtemp_c)}°C`;
  tmrwMin.textContent = `Mn : ${Math.round(tmrwData.day.mintemp_c)}°C`;
}

// ---------------- DAY AFTER TIMELINE FUNCTION ----------------
function after_tmrwForcast(after_tmrwData) {
  let after_tmrwDay = new Date(after_tmrwData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  aftertomorrowSlot.textContent = after_tmrwDay;
  after_tmrw.src = after_tmrwData.day.condition.icon;
  after_tmrwCloudStatus.textContent = after_tmrwData.day.condition.text;
  after_tmrwHum.textContent = `H : ${Math.round(after_tmrwData.day.avghumidity)}%   `;
  after_tmrwMax.textContent = `Mx : ${Math.round(after_tmrwData.day.maxtemp_c)}°C`;
  after_tmrwMin.textContent = `Mn : ${Math.round(after_tmrwData.day.mintemp_c)}°C`;
}

// ---------------- ASTRO  FUNCTION ----------------
function todayAstro(astroData) {
  sunriseTxt.textContent = `SR↑: ${astroData.sunrise}`;
  sunriseImg.style.display = "block";

  sunsetTxt.textContent = `SS↓: ${astroData.sunset}`;
  sunsetImg.style.display = "block";

  moonriseTxt.textContent = `MR↑: ${astroData.moonrise}`;
  moonriseImg.style.display = "block";

  moonsetTxt.textContent = `MS↓: ${astroData.moonset}`;
  moonsetImg.style.display = "block";

  moonphaseTxt.textContent = `🌕MP: ${astroData.moon_phase}`;
  moonphaseImg.style.display = "block";
}

// ---------------- WEATHER THEME FUNCTION ----------------
function bgTheme(weatherTheme) {
  let Theme = weatherTheme.toLowerCase();
  if (Theme.includes("clear") || Theme.includes("sunny")) {
    return "theme_sunny";
  } else if (Theme.includes("cloudy") || Theme.includes("overcast")) {
    return "theme_cloudy";
  } else if (
    Theme.includes("mist") ||
    Theme.includes("fog") ||
    Theme.includes("smoky")
  ) {
    return "theme_foggy";
  } else if (
    Theme.includes("rain") ||
    Theme.includes("drizzle") ||
    Theme.includes("shower") ||
    Theme.includes("patchy")
  ) {
    return "theme_rainy";
  } else if (Theme.includes("thunder") || Theme.includes("storm")) {
    return "theme_stormy";
  }
}

// ---------------- WEATHER THEME QUOTE FUNCTION ----------------
let quote = document.querySelector("#quote");

function weatherQuote() {
  let themeQuote = document.body.className;
  if (themeQuote === "theme_sunny") {
    quote.textContent =
      "☀️ A bright gadget of light has just been unlocked, flooding the earth with warmth and reminding us that better days are always ahead. ☀️";
  } else if (themeQuote === "theme_cloudy") {
    quote.textContent =
      "☁️ The sky has put on a heavy grey coat today, gently asking the sun to rest so the world can slow down and breathe. ☁️";
  } else if (themeQuote === "theme_rainy") {
    quote.textContent =
      " 🌧️These tears from the sky are necessary; they wash away the noise of yesterday so we can start fresh when the sun returns. 🌧️";
  } else if (themeQuote === "theme_stormy") {
    quote.textContent =
      " ⚡The dark sky screams in anger right now, but every great storm eventually runs out of rain to reveal a quiet, clear tomorrow. ⚡";
  } else if (themeQuote === "theme_foggy") {
    quote.textContent =
      "🌫️ The world disappears into a thick mist, erasing the streets until everything feels like a quiet dream. 🌫️";
  }
}

// ---------------- WEATHER LIVE GRAPH FUNCTION ----------------
function livechart(currentForecastData, currentTime) {
  let liveForecastData = currentForecastData.hour;
  let currentHours = currentTime.localtime;
  let hours = new Date(currentHours).getHours();
  let format = { hour: "numeric", hour12: true };
  let labelsArray = [];
  let WindDataArray = [];
  let HeatDataArray = [];
  let DewDataArray = [];

  for (let index = 0; index < 15; index += 3) {
    let targetdata = liveForecastData[Math.min(hours + index, 23)];
    let exactTime = new Date(targetdata.time);
    let formatize = exactTime.toLocaleTimeString("en-In", format).toLowerCase();

    WindDataArray.push(targetdata.windchill_c);
    HeatDataArray.push(targetdata.heatindex_c);
    DewDataArray.push(targetdata.dewpoint_c);
    labelsArray.push(formatize);
  }

  loading.style.display = "none";
  document.querySelector("#graphCanva").style.display = "block";

  if (context != null) {
    context.destroy();
  }

  let currentChart = document.querySelector("#graphCanva").getContext("2d");

  context = new Chart(currentChart, {
    data: {
      labels: labelsArray,
      datasets: [
        {
          type: "line",
          label: "🌬️ Wind Chill",
          data: WindDataArray,
          borderColor: "#116266",
          borderWidth: 4,
          backgroundColor: "rgba(0, 243, 255, 0.02)",
          pointBackgroundColor: "#00f3ff",
          pointHoverBackgroundColor: "#ffffff",
          pointRadius: 4,
          tension: 0.7,
        },
        {
          type: "bar",
          label: "🔥 Heat Index",
          data: HeatDataArray,
          borderColor: "#6b4747",
          borderWidth: 3,
          backgroundColor: "rgba(92, 31, 31, 0.5)",
          borderRadius: 4,
          pointRadius: 4,
        },
        {
          type: "bar",
          label: "💧 Dew Point",
          data: DewDataArray,
          borderColor: "rgb(116, 117, 91)",
          borderWidth: 2,
          backgroundColor: "rgba(75, 104, 64, 0.5)",
          borderRadius: 4,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          // position: "top",
          // labels: {
          //   color: "#5f5757",
          //   font: {
          //     size: 14,
          //     weight: "600",
          //   },
          // },

          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#DCC3AA",
            // color: "rgba(173, 146, 146, 0.85)",
            font: {
              size: 12,
              weight: "500",
            },
          },
          grid: {
            // color: "rgb(131, 126, 126)",
            display: false,
          },
        },
        y: {
          min: 0,
          ticks: {
            color: "#FFF5E5",
            // color: "rgba(192, 185, 185, 0.85)",
            font: {
              size: 12,
              weight: "500",
            },
          },
          grid: {
            // color: "rgb(165, 147, 147)",
            display: false,
          },
        },
      },
    },
  });
}

// ---------------- FETCH DATA FUNCTION ----------------
async function getdata() {
  let value = data.value.toLowerCase();
  let apikey = "1c595c024b6f4ceb834152010261505";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${value}&days=7`;

  const fetchData = await fetch(apiUrl);
  const response = await fetchData.json();

  city.textContent = response.location.country;
  state.textContent = response.location.region;
  weather.textContent = response.current.condition.text;
  degree.textContent = `${response.current.temp_c}°`;
  lat.textContent = `lat : ${response.location.lat}°`;
  lon.textContent = `lon : ${response.location.lon}°`;

  timeline(response.forecast.forecastday, response.location, response.current);
  todayForcast(response.forecast.forecastday[0]);
  tmrwForcast(response.forecast.forecastday[1]);
  after_tmrwForcast(response.forecast.forecastday[2]);
  todayAstro(response.forecast.forecastday[0].astro);
  document.body.className = bgTheme(response.current.condition.text);
  weatherQuote();
  livechart(response.forecast.forecastday[0], response.location);
}

// ==========================================
// 3. EVENT LISTENERS
// ==========================================
btn.addEventListener("click", function () {
  getdata();
  data.value = " ";
});
