//the open and closing of the sidenav
function sidenav(num){
  let b = $('sidenav').style.cssText;
  if(b == "width: 3.5vw;"){
    $('sidenav').style.cssText = 'width: 24vw;';
    $('sidenav_apps').style.display = 'none';
    $('sidenav_open_content').style.display = 'initial';
  }
  if(num == 1 || b == "width: 24vw;"){
    $('sidenav').style.cssText = 'width: 3.5vw;';
    $('sidenav_apps').style.display = 'initial';
    $('sidenav_open_content').style.display = 'none';
  }
}

//sidenav search function
function filter(){
  container = document.getElementById('sidenav_open_content_apps');
  var input, filter, container, img, alt, i, txtValue;
  input = document.getElementById("sidenav_appsearch");
  filter = input.value.toUpperCase();
  img = container.getElementsByTagName("img");
  let downloaded_apps = JSON.parse(window.localStorage.getItem("apps"));
  if(filter == ""){//loads apps again so that uninstalled app(s) doesn't show
    loadApps();
  }
  for (let i = 0; i < img.length; i++) {
    for(let j=0; j<downloaded_apps.length; j++){
      if(img[i].alt == downloaded_apps[j]){//checks if img alt = downloaded apps
        txtValue = img[i].alt;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            img[i].parentNode.style.display = "initial";
        } else {
            img[i].parentNode.style.display = "none";
        }
        break;
      } 
      else{ // if not equal, it hides it
        img[i].parentNode.style.display = "none";
      }
    }
  }
}
