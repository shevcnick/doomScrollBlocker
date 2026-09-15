const BLOCKED_PATHS = [
  "youtube.com/shorts/",
  "instagram.com/reel/",
  "instagram.com/reels/",
  "facebook.com/reel/",
  "facebook.com/reels/",
  "tiktok.com/@",
];

function isBlocked() {
  const site = location.hostname.replace(/^(www|m)\./, "");
  const url = site + location.pathname; 
  return BLOCKED_PATHS.some((path) => url.startsWith(path));
}

function checkUrl() {
  if (!isBlocked()) return;
  alert("No doomscrolling");
  location.replace("");
}

checkUrl();

let lastUrl = location.href;
setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    checkUrl();
  }
}, 300);
