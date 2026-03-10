import fs from "fs";
import path from "path";

const settingsPath = path.resolve("./database/settings.json");

let settings = {
  prefix: "!",
  mode: "public"
};

if (fs.existsSync(settingsPath)) {
  settings = JSON.parse(fs.readFileSync(settingsPath));
} else {
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}

export function getSettings() {
  return settings;
}

export function saveSettings(newSettings) {
  settings = { ...settings, ...newSettings };
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}
