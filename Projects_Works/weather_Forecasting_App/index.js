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
//-------------
let tomorrowSlot = document.querySelector("#tomorrowSlot");
let tmrw = document.querySelector("#tmrw");
let tmrwHum = document.querySelector("#tmrwHum");
let tmrwCloudStatus = document.querySelector("#tmrwCloudStatus");
let tmrwMin = document.querySelector("#tmrwMin");
let tmrwMax = document.querySelector("#tmrwMax");
//-------------
let aftertomorrowSlot = document.querySelector("#AftertomorrowSlot");
let after_tmrw = document.querySelector("#after_tmrw");
let after_tmrwHum = document.querySelector("#after_tmrwHum");
let after_tmrwCloudStatus = document.querySelector("#after_tmrwCloudStatus");
let after_tmrwMin = document.querySelector("#after_tmrwMin");
let after_tmrwMax = document.querySelector("#after_tmrwMax");

//---------------- ASTRO ----------------
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
  let morningSlot = hourlyData[6];
  let noonSlot = hourlyData[12];
  let eveningSlot = hourlyData[18];
  let nightSlot = hourlyData[23];

  // ------- DISPLAY CURRENT -------
  slotnow.textContent = new Date(currentSlot)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  cuurentIcon.src = currentImg.condition.icon;
  currentDeg.textContent = `${Math.round(currentImg.temp_c)}°C`;

  // ------- DISPLAY MORNING -------
  morning.textContent = new Date(morningSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  morningIcon.src = morningSlot.condition.icon;
  morningDeg.textContent = `${Math.round(morningSlot.temp_c)}°C`;

  // ------- DISPLAY NOON -------
  noon.textContent = new Date(noonSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  noonIcon.src = noonSlot.condition.icon;
  noonDeg.textContent = `${Math.round(noonSlot.temp_c)}°C`;

  // ------- DISPLAY EVENING -------
  evening.textContent = new Date(eveningSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  eveningIcon.src = eveningSlot.condition.icon;
  eveningDeg.textContent = `${Math.round(eveningSlot.temp_c)}°C`;

  // ------- DISPLAY NIGHT -------
  night.textContent = new Date(nightSlot.time)
    .toLocaleTimeString("en-IN", format)
    .toLowerCase();
  nightIcon.src = nightSlot.condition.icon;
  nightDeg.textContent = `${Math.round(nightSlot.temp_c)}°C`;
}

// ---------------- To-DAY TIMELINE FUNCTION ----------------
function todayForcast(tdyData) {
  let tdyDay = new Date(tdyData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  todaySlot.textContent = tdyDay;
  tdy.src = tdyData.day.condition.icon;
  todayCloudStatus.textContent = tdyData.day.condition.text;
  tdyHum.textContent = `${Math.round(tdyData.day.avghumidity)}°C`;
  tdyMax.textContent = `${Math.round(tdyData.day.maxtemp_c)}°C`;
  tdyMin.textContent = `${Math.round(tdyData.day.mintemp_c)}°C`;
}

// ---------------- NEXT-DAY TIMELINE FUNCTION ----------------
function tmrwForcast(tmrwData) {
  let tmrwDay = new Date(tmrwData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  tomorrowSlot.textContent = tmrwDay;
  tmrw.src = tmrwData.day.condition.icon;
  tmrwCloudStatus.textContent = tmrwData.day.condition.text;
  tmrwHum.textContent = `${Math.round(tmrwData.day.avghumidity)}°C`;
  tmrwMax.textContent = `${Math.round(tmrwData.day.maxtemp_c)}°C`;
  tmrwMin.textContent = `${Math.round(tmrwData.day.mintemp_c)}°C`;
}

// ---------------- DAY AFTER TIMELINE FUNCTION ----------------
function after_tmrwForcast(after_tmrwData) {
  let after_tmrwDay = new Date(after_tmrwData.date)
    .toLocaleDateString("en-IN", { weekday: "long" })
    .toLowerCase();
  aftertomorrowSlot.textContent = after_tmrwDay;
  after_tmrw.src = after_tmrwData.day.condition.icon;
  after_tmrwCloudStatus.textContent = after_tmrwData.day.condition.text;
  after_tmrwHum.textContent = `${Math.round(after_tmrwData.day.avghumidity)}°C`;
  after_tmrwMax.textContent = `${Math.round(after_tmrwData.day.maxtemp_c)}°C`;
  after_tmrwMin.textContent = `${Math.round(after_tmrwData.day.mintemp_c)}°C`;
}

// ---------------- ASTRO  FUNCTION ----------------
function todayAstro(astroData) {
  // --- sunrise ---
  sunriseTxt.textContent = astroData.sunrise;
  sunriseImg.style.display = "block";

  // --- sunset ---
  sunsetTxt.textContent = astroData.sunset;
  sunsetImg.style.display = "block";

  // --- moonnrise ---
  moonriseTxt.textContent = astroData.moonrise;
  moonriseImg.style.display = "block";

  // --- moonset ---
  moonsetTxt.textContent = astroData.moonset;
  moonsetImg.style.display = "block";

  // --- moonphase ---
  moonphaseTxt.textContent = astroData.moon_phase;
  moonphaseImg.style.display = "block";
}

// ---------------- FETCH DATA FUNCTION ----------------
async function getdata() {
  let value = data.value.toLowerCase();
  let apikey = "1c595c024b6f4ceb834152010261505";

  // ---------------- Forecast API ----------------
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${value}&days=7`;

  const fetchData = await fetch(apiUrl);
  const response = await fetchData.json();

  city.textContent = response.location.country;
  state.textContent = response.location.region;
  weather.textContent = response.current.condition.text;
  degree.textContent = response.current.temp_c;
  lat.textContent = response.location.lat;
  lon.textContent = response.location.lon;

  // Testing data into console
  console.log(response.forecast.forecastday[0].astro);

  // Called  function
  timeline(response.forecast.forecastday, response.location, response.current);
  todayForcast(response.forecast.forecastday[0]);
  tmrwForcast(response.forecast.forecastday[1]);
  after_tmrwForcast(response.forecast.forecastday[2]);
  todayAstro(response.forecast.forecastday[0].astro);
}

// ==========================================
// 3. EVENT LISTENERS
// ==========================================

btn.addEventListener("click", function () {
  getdata();
});
