//winbox
function openApp(app) {
  switch (app) {
    case "browser":
      newWinbox(
        "Browser",
        "assets/images/app_icons/browser.png",
        "https://bing.com"
      );
      break;
    case "calculator":
      let winbox = new WinBox("Calulator", {
        class: ["theme", "no-full", "no-max"],
        icon: "assets/images/app_icons/calculator.png",
        url: "assets/apps/calculator/index.html",
        x: "center",
        y: "center",
        width: "343px",
        height: "525px"
      });
      break;
    case "camera":
      newWinbox(
        "Camera",
        "assets/images/app_icons/camera.png",
        "assets/apps/camera/camera.html"
      );
      break;
    case "eaglercraft":
      newWinbox(
        "Eaglercraft",
        "assets/images/app_icons/eagler.png",
        "assets/Offline_Download_Version.html",
        "100%",
        "100%"
      );
  }
}

function newWinbox(name, icon, link, w, h) {
  let winbox = new WinBox(name, {
    class: "theme",
    icon: icon,
    url: link,
    x: "center",
    y: "center",
    width: w,
    height: h
  });
}