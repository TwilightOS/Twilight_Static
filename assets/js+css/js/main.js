function $(id) {
  return document.getElementById(id);
}

window.onload = () => {
  //hides all apps first
  Array.from(sidenav_apps).forEach((element) => { 
    element.style.display ="none";
  });
  Array.from(sidenav_open_apps).forEach((element) => { 
    element.style.display ="none";
  });

  if(window.localStorage.getItem("apps") == null){//checks if it is the first time on site
    let defaultApps = ["appstore", "browser", "calculator", "camera", "eaglercraft", "files", "mail", "maps", "settings", "terminal", "vscode", "weatherapp", "youtube"];
    window.localStorage.setItem("apps", JSON.stringify(defaultApps));
    location.reload();
  }
  else{//if not first time, it loads the apps
    loadApps();
  }
};



