import icons from "./apps";

var { taskbar, desktop, pinned, recent } = {
  taskbar: (localStorage.getItem("taskbar") &&
    JSON.parse(localStorage.getItem("taskbar"))) || [
    "Settings",
    "File Explorer",
    "Browser",
    "Store",
    "Spotify",
  ],
  desktop: (localStorage.getItem("desktop") &&
    JSON.parse(localStorage.getItem("desktop"))) || [
    "PC",
    "Recycle Bin",
    "File Explorer",
    "Store",
    "Browser",
    "Github",
    "Spotify",
    "Chrome",
    "WhatsApp",
  ],
  pinned: (localStorage.getItem("pinned") &&
    JSON.parse(localStorage.getItem("pinned"))) || [
    "Browser",
    "Get Started",
    "Task Manager",
    "Mail",
    "Settings",
    "Store",
    "Notepad",
    "Whiteboard",
    "Calculator",
    "Spotify",
    "Twitter",
    "File Explorer",
    "Terminal",
    "Github",
    "Discord",
    "Camera",
    "Chrome",
    "WhatsApp",
  ],
  recent: (localStorage.getItem("recent") &&
    JSON.parse(localStorage.getItem("recent"))) || [
    "Mail",
    "Twitter",
    "Terminal",
    "Github",
    "File Explorer",
    "Spotify",
    "Edge",
  ],
};

export const taskApps = icons.filter((x) => taskbar.includes(x.name));

export const desktopApps = icons
  .filter((x) => desktop.includes(x.name))
  .sort((a, b) => {
    return desktop.indexOf(a.name) > desktop.indexOf(b.name) ? 1 : -1;
  });

export const pinnedApps = icons
  .filter((x) => pinned.includes(x.name))
  .sort((a, b) => {
    return pinned.indexOf(a.name) > pinned.indexOf(b.name) ? 1 : -1;
  });

export const recentApps = icons
  .filter((x) => recent.includes(x.name))
  .sort((a, b) => {
    return recent.indexOf(a.name) > recent.indexOf(b.name) ? 1 : -1;
  });

export const allApps = icons.filter((app) => {
  return app.type === "app";
});

export const dfApps = {
  taskbar,
  desktop,
  pinned,
  recent,
};
