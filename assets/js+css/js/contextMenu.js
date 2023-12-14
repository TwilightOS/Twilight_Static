document.onclick = hideMenu;

//context menu basic functions
function prevent(e) {
  e.preventDefault();
}

function hideMenu() {
  $("contextMenu").style.display = "none";
  $('sidenav').classList.remove("sidenav_show"); // hide sidenav when document is clicked
}

function rightClick(evt) {//shows the contextmenu
  prevent(evt);
  let menu = $("contextMenu");
  menu.style.display = "initial";
  menu.style.left = evt.pageX + "px";
  menu.style.top = evt.pageY + "px";
  menu.oncontextmenu = prevent;
}


//Context menu options
function app_contextMenu(option){
  $('sidenav').classList.remove("sidenav_show"); //hide sidenav when a context menu option is clicked
  switch(option){
    case "open":
      openApp(window.localStorage.getItem("a"));
      break;
    case "appInfo":
      appInfo(window.localStorage.getItem("a"));
      break;
    case "delete":
      uninstall(window.localStorage.getItem("a"));
      break;
  }
  
}