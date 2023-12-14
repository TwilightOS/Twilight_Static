//winbox
function openApp(app) {
  switch (app) {
    case "browser":
      newWinbox(
        "Browser",
        "files/images/app_icons/browser.png",
        "https://bing.com"
      );
      break;
    case "calculator":
      newWinbox(
        "Calulator",
        "files/images/app_icons/calculator.png",
        "files/apps/calculator/index.html",
        "343px",
        "525px"
      );
      break;
    case "camera":
      newWinbox(
        "Camera",
        "files/images/app_icons/camera.png",
        "files/apps/camera/camera.html"
      );
      break;
    case "eaglercraft":
      newWinbox(
        "Eaglercraft",
        "files/images/app_icons/eagler.png",
        "files/Offline_Download_Version.html",
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
    height: h,
  });
}