const fallbackCountries = [
  { code: "PT", id: 620, name: "Portugal", count: 184211, coords: [-8.2, 39.5] },
  { code: "BR", id: 76, name: "Brazil", count: 171904, coords: [-52, -10] },
  { code: "IN", id: 356, name: "India", count: 140002, coords: [78.9, 22] },
  { code: "US", id: 840, name: "United States", count: 132881, coords: [-98.5, 39.8] },
  { code: "PK", id: 586, name: "Pakistan", count: 98504, coords: [69.3, 30.3] },
  { code: "GB", id: 826, name: "United Kingdom", count: 87510, coords: [-2.5, 54] },
  { code: "AR", id: 32, name: "Argentina", count: 84872, coords: [-64, -34] },
  { code: "ES", id: 724, name: "Spain", count: 79244, coords: [-3.7, 40.3] },
  { code: "MA", id: 504, name: "Morocco", count: 69301, coords: [-6, 32] },
  { code: "FR", id: 250, name: "France", count: 67220, coords: [2.2, 46.2] },
  { code: "SA", id: 682, name: "Saudi Arabia", count: 58840, coords: [45, 24] },
  { code: "NG", id: 566, name: "Nigeria", count: 55210, coords: [8, 9] },
  { code: "DE", id: 276, name: "Germany", count: 53414, coords: [10.4, 51.1] },
  { code: "MX", id: 484, name: "Mexico", count: 50230, coords: [-102, 23] },
  { code: "JP", id: 392, name: "Japan", count: 44720, coords: [138, 37] },
  { code: "ZA", id: 710, name: "South Africa", count: 40116, coords: [24, -29] },
  { code: "ID", id: 360, name: "Indonesia", count: 38902, coords: [113, -2] },
  { code: "EG", id: 818, name: "Egypt", count: 37220, coords: [30, 27] },
  { code: "IT", id: 380, name: "Italy", count: 35544, coords: [12.5, 42.8] },
  { code: "CA", id: 124, name: "Canada", count: 33410, coords: [-106, 57] },
];

const allCountryCodes = [
  "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM",
  "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ",
  "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF",
  "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC",
  "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ",
  "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET",
  "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE",
  "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY",
  "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE",
  "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR",
  "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO",
  "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX",
  "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP",
  "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM",
  "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR",
  "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC",
  "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI",
  "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH",
  "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR",
  "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU",
  "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW",
];

const countryNameOverrides = {
  AX: "Aland Islands",
  BQ: "Caribbean Netherlands",
  CD: "DR Congo",
  CG: "Congo",
  CI: "Cote d'Ivoire",
  CZ: "Czechia",
  FK: "Falkland Islands",
  FM: "Micronesia",
  GB: "United Kingdom",
  IR: "Iran",
  KP: "North Korea",
  KR: "South Korea",
  LA: "Laos",
  MD: "Moldova",
  MK: "North Macedonia",
  PS: "Palestine",
  RU: "Russia",
  SY: "Syria",
  TZ: "Tanzania",
  US: "United States",
  VA: "Vatican City",
  VE: "Venezuela",
  VN: "Vietnam",
};

const countryByRegion = {
  PK: "Pakistan",
  PT: "Portugal",
  BR: "Brazil",
  IN: "India",
  US: "United States",
  GB: "United Kingdom",
  AR: "Argentina",
  ES: "Spain",
  MA: "Morocco",
  FR: "France",
  SA: "Saudi Arabia",
  NG: "Nigeria",
  DE: "Germany",
  MX: "Mexico",
  JP: "Japan",
  ZA: "South Africa",
  ID: "Indonesia",
  EG: "Egypt",
  IT: "Italy",
  CA: "Canada",
};

const els = {
  button: document.querySelector("#witnessButton"),
  witnessId: document.querySelector("#witnessId"),
  total: document.querySelector("#totalWitnesses"),
  countries: document.querySelector("#countriesCount"),
  leaderboard: document.querySelector("#leaderboardList"),
  feed: document.querySelector("#activityFeed"),
  svg: document.querySelector("#worldMap"),
  tooltip: document.querySelector("#tooltip"),
  loading: document.querySelector("#mapLoading"),
  browserTime: document.querySelector("#browserTime"),
  countrySelect: document.querySelector("#countrySelect"),
  emailForm: document.querySelector("#emailForm"),
  emailInput: document.querySelector("#emailInput"),
  emailStatus: document.querySelector("#emailStatus"),
  sharePanel: document.querySelector("#sharePanel"),
  sharePreview: document.querySelector("#sharePreview"),
  shareStatus: document.querySelector("#shareStatus"),
  shareNativeButton: document.querySelector("#shareNativeButton"),
  shareXButton: document.querySelector("#shareXButton"),
  shareFacebookButton: document.querySelector("#shareFacebookButton"),
  shareInstagramButton: document.querySelector("#shareInstagramButton"),
  downloadCardButton: document.querySelector("#downloadCardButton"),
};

const formatter = new Intl.NumberFormat("en-US");
const pressedKey = "i-was-here-pressed";
const witnessKey = "i-was-here-witness-id";
const shareTimestampKey = "i-was-here-share-timestamp";
const fallbackIncrementKey = "i-was-here-fallback-increment";
const supabaseConfig = window.I_WAS_HERE_SUPABASE || {};
const hasSupabaseConfig = Boolean(supabaseConfig.url && supabaseConfig.anonKey);
const supabaseClient =
  hasSupabaseConfig && window.supabase
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : null;

let countryData = fallbackCountries.map((country) => ({
  ...country,
  count: 0,
}));
let totalWitnesses = countryData.reduce((sum, country) => sum + country.count, 0);
let pressed = localStorage.getItem(pressedKey) === "true";
let witnessId = localStorage.getItem(witnessKey) || "";
let shareTimestamp = localStorage.getItem(shareTimestampKey) || "";
let sharePngUrl = "";
let projection;
let path;
let mapGroup;
let pointGroup;

let userCountry = getBrowserCountryGuess();

init();

async function init() {
  startBrowserClock();
  populateCountryPicker();
  renderStats();
  renderLeaderboard();
  applyPressedState();
  drawMap();

  if (supabaseClient) {
    await hydrateFromSupabase();
    subscribeToSupabase();
  }

  els.button.addEventListener("click", recordWitness);
  els.countrySelect.addEventListener("change", updateSelectedCountry);
  els.emailForm.addEventListener("submit", collectEmail);
  els.shareNativeButton.addEventListener("click", shareNative);
  els.shareXButton.addEventListener("click", shareToX);
  els.shareFacebookButton.addEventListener("click", shareToFacebook);
  els.shareInstagramButton.addEventListener("click", shareToInstagram);
  els.downloadCardButton.addEventListener("click", downloadShareCard);
}

function startBrowserClock() {
  const renderTime = () => {
    els.browserTime.textContent = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

  renderTime();
  window.setInterval(renderTime, 1000);
}

async function hydrateFromSupabase() {
  try {
    const [{ data: countries }, { data: events, count: eventCount }] =
      await Promise.all([
        supabaseClient
          .from("witness_countries")
          .select("code,name,topo_id,longitude,latitude")
          .order("name", { ascending: true }),
        supabaseClient
          .from("witness_events")
          .select("country_code,country_name,created_at", { count: "exact" })
          .order("created_at", { ascending: false })
          .limit(7),
      ]);

    if (countries?.length) {
      countryData = countries.map((country) => ({
        code: country.code,
        id: country.topo_id,
        name: country.name,
        count: 0,
        coords: [Number(country.longitude), Number(country.latitude)],
      }));
    }

    const eventCounts = await getLiveCountryCounts();

    countryData.forEach((country) => {
      country.count = eventCounts.get(country.code) || 0;
    });

    totalWitnesses = Number(eventCount) || events?.length || 0;

    if (pressed) {
      witnessId = `#${formatter.format(totalWitnesses)}`;
      localStorage.setItem(witnessKey, witnessId);
      applyPressedState();
    }

    els.feed.innerHTML = "";
    events
      ?.slice(0, 7)
      .forEach((event) => addActivity(event.country_name, relativeTime(event.created_at), false));

    renderEverything();
  } catch (error) {
    console.warn("Supabase unavailable; using fallback data.", error);
  }
}

async function getLiveCountryCounts() {
  const { data: liveCounts, error } = await supabaseClient.rpc("get_live_country_counts");
  const eventCounts = new Map();

  if (!error && liveCounts) {
    liveCounts.forEach((event) => {
      eventCounts.set(event.country_code, Number(event.witness_count));
      if (!countryData.some((country) => country.code === event.country_code)) {
        countryData.push({
          code: event.country_code,
          id: 999000 + Math.abs(hashCountryCode(event.country_code) % 999),
          name: event.country_name,
          count: 0,
          coords: [0, 0],
        });
      }
    });
    return eventCounts;
  }

  const { data: events } = await supabaseClient
    .from("witness_events")
    .select("country_code,country_name,created_at")
    .limit(10000);

  events?.forEach((event) => {
    eventCounts.set(event.country_code, (eventCounts.get(event.country_code) || 0) + 1);
    if (!countryData.some((country) => country.code === event.country_code)) {
      countryData.push({
        code: event.country_code,
        id: 999000 + Math.abs(hashCountryCode(event.country_code) % 999),
        name: event.country_name,
        count: 0,
        coords: [0, 0],
      });
    }
  });

  return eventCounts;
}

function subscribeToSupabase() {
  supabaseClient
    .channel("witness-board")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "witness_events" },
      (payload) => {
        addActivity(payload.new.country_name, "now");
        hydrateFromSupabase();
      },
    )
    .subscribe();
}

async function recordWitness() {
  if (pressed) return;

  els.button.disabled = true;
  els.button.textContent = "Leaving mark";

  if (supabaseClient) {
    await recordWitnessWithSupabase();
  } else {
    recordWitnessLocally();
  }
}

async function recordWitnessWithSupabase() {
  try {
    const { data, error } = await supabaseClient.rpc("record_witness", {
      p_country_code: userCountry.code,
      p_country_name: userCountry.name,
    });

    if (error) throw error;

    await hydrateFromSupabase();
    witnessId = `#${formatter.format(totalWitnesses)}`;

    commitPressedState();
  } catch (error) {
    console.error("Could not record witness in Supabase.", error);
    els.button.disabled = false;
    els.button.textContent = "I was here";
    els.witnessId.textContent = "Could not connect. Try again.";
  }
}

function recordWitnessLocally() {
  ensureCountryData(userCountry);
  const country = countryData.find((item) => item.code === userCountry.code) || countryData[0];
  totalWitnesses += 1;
  country.count += 1;
  witnessId = `#${formatter.format(totalWitnesses)}`;
  localStorage.setItem(
    fallbackIncrementKey,
    String(Number(localStorage.getItem(fallbackIncrementKey) || 0) + 1),
  );
  commitPressedState();
}

async function collectEmail(event) {
  event.preventDefault();

  const email = els.emailInput.value.trim().toLowerCase();
  if (!email) return;

  const submitButton = els.emailForm.querySelector("button");
  submitButton.disabled = true;
  submitButton.textContent = "Joining";
  els.emailStatus.textContent = "Saving your email...";

  if (!supabaseClient) {
    localStorage.setItem("i-was-here-email", email);
    submitButton.textContent = "Joined";
    els.emailStatus.textContent =
      "Saved locally. Add Supabase config to collect emails live.";
    return;
  }

  const { error } = await supabaseClient.from("email_signups").insert({
    email,
    country_code: userCountry.code,
    country_name: userCountry.name,
    witness_number: witnessId || null,
  });

  if (error && error.code !== "23505") {
    console.error("Could not save email.", error);
    submitButton.disabled = false;
    submitButton.textContent = "Join";
    els.emailStatus.textContent = "Could not save that email. Try again.";
    return;
  }

  els.emailInput.value = "";
  submitButton.textContent = "Joined";
  els.emailStatus.textContent =
    error?.code === "23505"
      ? "You're already on the list."
      : "You're on the list for the final witness map.";
}

async function renderShareCard() {
  const svg = buildShareCardSvg();
  sharePngUrl = await svgToPng(svg, 1080, 1350);
  els.sharePreview.src = sharePngUrl;
  els.sharePanel.hidden = false;
  els.shareStatus.textContent = "PNG card ready.";
}

function buildShareCardSvg() {
  const timestamp = escapeSvg(shareTimestamp || formatShareTimestamp(new Date()));
  const country = escapeSvg(userCountry.name);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
      <defs>
        <radialGradient id="glow" cx="50%" cy="42%" r="68%">
          <stop offset="0%" stop-color="#e00718" stop-opacity="0.36"/>
          <stop offset="48%" stop-color="#3b0509" stop-opacity="0.52"/>
          <stop offset="100%" stop-color="#050506" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="line" x1="0%" x2="100%">
          <stop offset="0%" stop-color="#e00718"/>
          <stop offset="100%" stop-color="#ffffff"/>
        </linearGradient>
      </defs>
      <rect width="1080" height="1350" fill="#050506"/>
      <rect width="1080" height="1350" fill="url(#glow)"/>
      <circle cx="540" cy="494" r="270" fill="none" stroke="#e00718" stroke-opacity="0.16" stroke-width="3"/>
      <circle cx="540" cy="494" r="196" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2"/>
      <rect x="88" y="92" width="34" height="76" rx="2" fill="none" stroke="#fff8f8" stroke-opacity="0.85" stroke-width="4"/>
      <rect x="88" y="151" width="34" height="17" fill="#e00718"/>
      <text x="144" y="142" fill="#fff8f8" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800">I WAS HERE</text>
      <text x="540" y="404" text-anchor="middle" fill="#fff8f8" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="900">I was watching</text>
      <text x="540" y="494" text-anchor="middle" fill="#fff8f8" font-family="Inter, Arial, sans-serif" font-size="88" font-weight="900">Spain vs Portugal</text>
      <text x="540" y="584" text-anchor="middle" fill="#d6cccc" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="700">at ${timestamp}</text>
      <text x="540" y="656" text-anchor="middle" fill="#b9b2b2" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700">from ${country}</text>
      <rect x="210" y="824" width="660" height="112" rx="10" fill="#fff8f8"/>
      <text x="540" y="895" text-anchor="middle" fill="#09090a" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="900">I WAS HERE</text>
      <rect x="210" y="1016" width="660" height="4" fill="url(#line)" opacity="0.7"/>
      <text x="540" y="1090" text-anchor="middle" fill="#fff8f8" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800">A moment football may never see again.</text>
      <text x="540" y="1188" text-anchor="middle" fill="#a49a9a" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700">i-was-here</text>
    </svg>
  `;
}

function svgToPng(svg, width, height) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(svgUrl);
      resolve(canvas.toDataURL("image/png"));
    };

    image.onerror = () => {
      URL.revokeObjectURL(svgUrl);
      reject(new Error("Could not render share card."));
    };

    image.src = svgUrl;
  });
}

async function shareNative() {
  if (!sharePngUrl) await renderShareCard();
  const text = shareText();

  try {
    const blob = await (await fetch(sharePngUrl)).blob();
    const file = new File([blob], "i-was-here.png", { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: "I Was Here", text });
      return;
    }
    if (navigator.share) {
      await navigator.share({ title: "I Was Here", text, url: location.href });
      return;
    }
  } catch (error) {
    console.warn("Native share unavailable.", error);
  }

  downloadShareCard();
  els.shareStatus.textContent = "Sharing is not supported here, so the PNG was downloaded.";
}

function shareToX() {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(location.href)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function shareToFacebook() {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}&quote=${encodeURIComponent(shareText())}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function shareToInstagram() {
  downloadShareCard();
  els.shareStatus.textContent = "PNG downloaded. Upload it to Instagram Stories or your feed.";
}

function downloadShareCard() {
  if (!sharePngUrl) return;
  const link = document.createElement("a");
  link.href = sharePngUrl;
  link.download = "i-was-here-spain-vs-portugal.png";
  link.click();
}

function shareText() {
  return `I was watching Spain vs Portugal at ${shareTimestamp || formatShareTimestamp(new Date())}.`;
}

function formatShareTimestamp(date) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function escapeSvg(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function commitPressedState() {
  pressed = true;
  shareTimestamp = formatShareTimestamp(new Date());
  localStorage.setItem(pressedKey, "true");
  localStorage.setItem(witnessKey, witnessId);
  localStorage.setItem(shareTimestampKey, shareTimestamp);

  document.body.classList.remove("page-pulse");
  window.requestAnimationFrame(() => document.body.classList.add("page-pulse"));
  applyPressedState();
  renderEverything();
  addActivity(userCountry.name, "now");
  pulseUserCountry();
}

function getBrowserCountryGuess() {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale || "";
  const region = locale.split("-").pop()?.toUpperCase();
  const code = allCountryCodes.includes(region) ? region : "PK";
  return {
    code,
    name: countryNameForCode(code),
  };
}

function populateCountryPicker() {
  const selectedCode = userCountry.code;
  els.countrySelect.innerHTML = countryOptions()
    .map(
      (country) => `
        <option value="${country.code}" ${country.code === selectedCode ? "selected" : ""}>
          ${country.name}
        </option>
      `,
    )
    .join("");
  updateSelectedCountry();
}

function countryOptions() {
  const countries = allCountryCodes
    .map((code) => ({
      code,
      name: countryNameForCode(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!countries.some((country) => country.code === userCountry.code)) {
    countries.unshift({ ...userCountry, name: userCountry.name });
  }

  return countries;
}

function updateSelectedCountry() {
  const selected = countryOptions().find(
    (country) => country.code === els.countrySelect.value,
  );
  if (!selected) return;
  userCountry = {
    code: selected.code,
    name: selected.name,
  };
  ensureCountryData(userCountry);
}

function applyPressedState() {
  if (!pressed) return;
  if (!shareTimestamp) {
    shareTimestamp = formatShareTimestamp(new Date());
    localStorage.setItem(shareTimestampKey, shareTimestamp);
  }
  els.button.disabled = false;
  els.button.textContent = "You were here";
  els.button.classList.add("is-pressed");
  els.witnessId.textContent = `Last witness: ${witnessId || "recorded"} from ${userCountry.name}`;
  renderShareCard();
}

function countryNameForCode(code) {
  if (countryNameOverrides[code]) return countryNameOverrides[code];
  if (countryByRegion[code]) return countryByRegion[code];

  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
  } catch (error) {
    return code;
  }
}

function ensureCountryData(country) {
  if (countryData.some((item) => item.code === country.code)) return;
  countryData.push({
    code: country.code,
    id: 999000 + Math.abs(hashCountryCode(country.code) % 999),
    name: country.name,
    count: 0,
    coords: [0, 0],
  });
}

function hashCountryCode(code) {
  return code.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function renderEverything() {
  renderStats();
  renderLeaderboard();
  updateMapColors();
  renderPoints();
}

function renderStats() {
  els.total.textContent = formatter.format(totalWitnesses);
  els.countries.textContent = formatter.format(countryData.filter((country) => country.count > 0).length);
}

function renderLeaderboard() {
  const topCountries = [...countryData]
    .filter((country) => country.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  if (!topCountries.length) {
    els.leaderboard.innerHTML = `
      <li class="empty-row">
        <span></span>
        <span class="country-name">Waiting for the first witnesses</span>
        <span></span>
      </li>
    `;
    return;
  }

  els.leaderboard.innerHTML = topCountries
    .map(
      (country, index) => `
        <li>
          <span class="rank">${index + 1}</span>
          <span class="country-name">${country.name}</span>
          <span class="country-count">${formatter.format(country.count)}</span>
        </li>
      `,
    )
    .join("");
}

function seedFallbackActivity() {
  els.feed.innerHTML = "";
  ["Portugal", "Brazil", "Pakistan", "India", "Argentina", "Morocco"].forEach(
    (country, index) => addActivity(country, `${index + 1}m ago`, false),
  );
}

function startFallbackTicker() {
  const fallbackNames = ["Portugal", "Brazil", "Pakistan", "India", "Argentina", "Morocco", "United States", "Nigeria"];

  window.setInterval(() => {
    const countryName = fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
    const match = countryData.find((item) => item.name === countryName);
    if (match) {
      match.count += 1;
      totalWitnesses += 1;
      renderEverything();
    }
    addActivity(countryName, "now");
  }, 5200);
}

function addActivity(country, time = "now", prepend = true) {
  const item = document.createElement("li");
  item.innerHTML = `
    <span class="feed-dot"></span>
    <span class="activity-copy">Someone in ${country} was here</span>
    <span class="feed-time">${time}</span>
  `;

  if (prepend) {
    els.feed.prepend(item);
  } else {
    els.feed.append(item);
  }

  while (els.feed.children.length > 7) {
    els.feed.lastElementChild.remove();
  }
}

async function drawMap() {
  const width = els.svg.clientWidth || 820;
  const height = els.svg.clientHeight || 500;
  els.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  projection = d3.geoNaturalEarth1().fitExtent(
    [
      [18, 20],
      [width - 18, height - 20],
    ],
    { type: "Sphere" },
  );
  path = d3.geoPath(projection);

  mapGroup = d3.select(els.svg).append("g");
  pointGroup = d3.select(els.svg).append("g");

  try {
    const response = await fetch("https://unpkg.com/world-atlas@2/countries-110m.json");
    const world = await response.json();
    const countries = topojson.feature(world, world.objects.countries).features;

    mapGroup
      .selectAll("path")
      .data(countries)
      .join("path")
      .attr("class", "country")
      .attr("data-id", (d) => Number(d.id))
      .attr("d", path)
      .style("fill", (d) => countryFill(Number(d.id)))
      .on("mousemove", showTooltip)
      .on("mouseleave", hideTooltip);

    renderPoints();
    els.loading.classList.add("is-hidden");
  } catch (error) {
    els.loading.textContent = "Map data unavailable";
  }
}

function renderPoints() {
  if (!pointGroup || !projection) return;
  const topPoints = [...countryData]
    .filter((country) => country.count > 0 && (country.coords[0] || country.coords[1]))
    .sort((a, b) => b.count - a.count)
    .slice(0, 13);

  pointGroup
    .selectAll("circle")
    .data(topPoints, (d) => d.code)
    .join("circle")
    .attr("class", (d) =>
      d.code === userCountry.code ? "pulse-point user-country" : "pulse-point",
    )
    .attr("cx", (d) => projection(d.coords)[0])
    .attr("cy", (d) => projection(d.coords)[1])
    .attr("r", 4)
    .style("animation-delay", (_, index) => `${index * 120}ms`);
}

function countryFill(id) {
  const country = countryData.find((item) => item.id === id);
  if (!country) return "rgba(255,255,255,0.095)";

  const max = Math.max(...countryData.map((item) => item.count));
  if (!max) return "rgba(255,255,255,0.095)";
  const intensity = country.count / max;
  const alpha = 0.22 + intensity * 0.68;
  return `rgba(224, 7, 24, ${alpha})`;
}

function updateMapColors() {
  if (!mapGroup) return;
  mapGroup
    .selectAll(".country")
    .style("fill", (d) => countryFill(Number(d.id)));
}

function pulseUserCountry() {
  const country = countryData.find((item) => item.code === userCountry.code);
  if (!country) return;
  const userPath = document.querySelector(`path[data-id="${country.id}"]`);
  if (!userPath) return;
  userPath.style.fill = "#ffffff";
  window.setTimeout(() => {
    userPath.style.fill = countryFill(country.id);
  }, 240);
}

function showTooltip(event, feature) {
  const id = Number(feature.id);
  const country = countryData.find((item) => item.id === id);
  if (!country) {
    hideTooltip();
    return;
  }

  const percent = totalWitnesses
    ? ((country.count / totalWitnesses) * 100).toFixed(1)
    : "0.0";
  els.tooltip.innerHTML = `
    <strong>${country.name}</strong>
    <span>${formatter.format(country.count)} witnesses · ${percent}%</span>
  `;
  els.tooltip.style.left = `${event.clientX}px`;
  els.tooltip.style.top = `${event.clientY}px`;
  els.tooltip.style.opacity = "1";
}

function hideTooltip() {
  els.tooltip.style.opacity = "0";
}

function relativeTime(value) {
  const seconds = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 45) return "now";
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`;
  return `${Math.round(seconds / 3600)}h ago`;
}

window.addEventListener("resize", () => {
  d3.select(els.svg).selectAll("*").remove();
  drawMap();
});
