sidenav_apps = document.getElementsByClassName("sidenav_app");
sidenav_open_apps = document.getElementsByClassName("sidenav_open_app");
downloaded_apps = JSON.parse(window.localStorage.getItem("apps"));

const appJSON = `[
  {
    "name": "App Store",
    "date": "9/01/23",
    "description": "Still in developement...",
    "size": "NaN",
    "icon": "assets/images/app_icons/appstore.png"
  },
  {
    "name": "Browser",
    "date": "9/01/23",
    "description": "Microsoft Bing! In later updates, we will add a real browser app with tabs, not just 1 bing.com page.",
    "size": "114 bytes",
    "icon": "assets/images/app_icons/browser.png"
  },
  {
    "name": "Calculator",
    "date": "9/01/23",
    "description": "The ultimate calculator app! Some parts are still in development, inspired by the Microsoft calculator app!",
    "size": "11.9 kB",
    "icon": "assets/images/app_icons/calculator.png"
  },
  {
    "name": "Camera",
    "date": "9/01/23",
    "description": "A very simple camera app with only 1 button! Download the image by taking a photo, then right clicking on the image in the top right corner and clicking 'open image in new tab'. Then right click that image and click 'save image as'.",
    "size": "12 kB",
    "icon": "assets/images/app_icons/camera.png"
  },
  {
    "name": "Eaglercraft",
    "date": "9/01/23",
    "description": "Minecraft 1.5.2 right in side this webOS! How nice is that? To enable keys(wasd), open the app then immediatly clicking in the middle of the window and type random letters. This is the only way for it to detect keypress(a very weird bug that we have yet to fix).",
    "size": "15.8 MB",
    "icon": "assets/images/app_icons/eagler.png"
  },
  {
    "name": "Files",
    "date": "9/01/23",
    "description": "We will probaly not make a file app because there is one right on your own operating system. But we might change our minds in future updates!",
    "size": "NaN",
    "icon": "assets/images/app_icons/files.png"
  },
  {
    "name": "Mail",
    "date": "9/01/23",
    "description": "Just plain old regular Gmail(thanks Google!).",
    "size": "NaN",
    "icon": "assets/images/app_icons/mail.png"
  },
  {
    "name": "Maps",
    "date": "9/01/23",
    "description": "Google Maps!!! Comment in our future Discord server if you want us to change it to Google Earth!",
    "size": "NaN",
    "icon": "assets/images/app_icons/maps.png"
  },
  {
    "name": "Settings",
    "date": "9/01/23",
    "description": "Customize this webOS to your own taste! Unfortunatly, you cannot change the color scheme nor the background image:(",
    "size": "NaN",
    "icon": "assets/images/app_icons/settings.png"
  },
  {
    "name": "Terminal",
    "date": "9/01/23",
    "description": "Thank you Xterm.js! Thank you for letting us create a terminal right in the browser!",
    "size": "NaN",
    "icon": "assets/images/app_icons/terminal.png"
  },
  {
    "name": "VScode",
    "date": "9/01/23",
    "description": "This is the software we made TwilightOS on!",
    "size": "NaN",
    "icon": "assets/images/app_icons/vscode.png"
  },
  {
    "name": "Weather App",
    "date": "9/01/23",
    "description": "The most accurate weather app of all time! For people who are too lazy to search up what the weather is.",
    "size": "NaN",
    "icon": "assets/images/app_icons/weather.png"
  },
  {
    "name": "Youtube",
    "date": "9/01/23",
    "description": "The #1 video streaming platform right in the webOS! IDK why you would open this in here rather then on an actual browser.",
    "size": "NaN",
    "icon": "assets/images/app_icons/youtube.png"
  }
]`;
//load apps
function loadApps(){
  let downloaded_apps = JSON.parse(window.localStorage.getItem("apps"));
  //hides all apps first
  Array.from(sidenav_apps).forEach((element) => { 
    element.style.display ="none";
  });
  Array.from(sidenav_open_apps).forEach((element) => { 
    element.style.display ="none";
  });
  for(let i=0; i<downloaded_apps.length; i++){//displays the apps that are "downloaded"
    for(let j=0; i<sidenav_apps.length; j++){
      if(downloaded_apps[i] == sidenav_apps[j].ariaLabel.split(" ").join("").toLowerCase()){
        sidenav_apps[j].style.display = "initial";
        sidenav_open_apps[j].style.display = "initial";
        break;
      }
    }
  }
}

//opens the info window about apps
function appInfo(app){
  let downloaded_apps = JSON.parse(window.localStorage.getItem("apps"));
  let appList = JSON.parse(appJSON);
  for(let i=0; i<downloaded_apps.length; i++ ){
    if (app == downloaded_apps[i]){
      let info = new WinBox({
        class: ["no-full", "no-max", "theme"],
        title: "App Info ("+appList[i].name+")",
        icon:"assets/images/other/icon.png",
        x: "center",
        y: "center",
        width: "343px",
        height: "425px",
        minwidth: "343px",
        minheight: "425px",
        maxwidth: "343px",
        maxheight: "425px",
        html: '<div class="app_info"><img id="info_app_icon" src='+appList[i]["icon"]+'><h1 id="info_app_name">'+appList[i]["name"]+'</h1><hr><p>Date Added: '+appList[i]["date"]+'</p><p>Size: '+appList[i]["size"]+'</p><p id="info_app_description">'+appList[i]["description"]+'</p></div>'
      });
    }
  }
}

//function that uninstalls the app(s)
function uninstall(app){
  for(let i=0; i<sidenav_apps.length; i++){//cycles throught all the apps
    if(app == sidenav_apps[i].ariaLabel.split(" ").join("").toLowerCase()){//find match with app wanted to be uninstalled with the app in sidenav
      if(sidenav_apps[i].ariaLabel.split(" ").join("").toLowerCase() == "appstore"){
        alertify.set('notifier','position', 'top-right');
        alertify.set('notifier','delay', 3);
        alertify.error('Not allowed to be uninstalled!');
      }
      else{
        let newApps = JSON.parse(window.localStorage.getItem("apps")).filter(function (app1) {
          return app1 !== sidenav_apps[i].ariaLabel.split(" ").join("").toLowerCase();
        });
        alertify.set('notifier','position', 'top-right');
        alertify.set('notifier','delay', 3);
        alertify.success('App Uninstalled Successfully!');       
        window.localStorage.setItem("apps", JSON.stringify(newApps)); 
        loadApps();
      }
    }
  }
  
}