var siteName = document.getElementById("site-name");
var siteUrl = document.getElementById("websiteUrl");
var inputnamevalid = document.getElementById("site-name");
var inputurlvalid = document.getElementById("websiteUrl");

var allSites = [];
var found = localStorage.getItem("websites");
found != undefined ? (allSites = JSON.parse(found)) : (allSites = []);
displaySite();

function addSite(allsites) {
if (validationurlSite() && validationNameSite()) {
    onesite = {
    sitename: siteName.value,
    siteurl: siteUrl.value,
    };
    allSites.push(onesite);
    localStorage.setItem("websites", JSON.stringify(allSites));
    displaySite();
    console.log(allSites);
    clearinput();
}
inputurlvalid.classList.remove("is-valid");
inputnamevalid.classList.remove("is-valid");
}

function displaySite() {
  var cartona = "";
  for (let i = 0; i < allSites.length; i++) {
    cartona += `<div class="row text-center bg-white text-dark py-2  my-2 border-bottom">
                    <div class="col-3">
                        <div id="counterWebsites" class=" fw-semibold">${
                          i + 1
                        }</div>
                    </div>
                    <div class="col-3">
                        <div id="websiteName" class=" fw-semibold">${
                          allSites[i].sitename
                        }</div>
                    </div>
                    <div class="col-3">
                        <div id="visitWebsite" class=" fw-semibold"><a href="${
                          allSites[i].siteurl
                        }"  target="_blank"" 
                                class="btn btn-success pt"><i class="fa-solid fa-eye"></i> Visit</a></div>
                    </div>
                    <div class="col-3">
                        <div id="deleteWebsite" class=" fw-semibold"><button type="button" onclick="deleteElementy(${i})"
                                class="btn btn-danger pt"><i class="fa-solid fa-trash"></i> Delete</button> </div>
                    </div>
                </div>`;
  }
  document.getElementById("newWebsite").innerHTML = cartona;
}

function clearinput() {
  siteName.value = null;
  siteUrl.value = null;
}

function deleteElementy(index) {
  allSites.splice(index, 1);
  localStorage.setItem("websites", JSON.stringify(allSites));
  displaySite();
}

// function validateUrlsite(){
//    var urlReegex =
//   /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/i;
// //   var urlReegex = /^https\:\/\/www\.[\w\W]{0,20}\.com[\w\W]{0,}$/i;
//  return urlReegex.test(siteUrl.value);
// }

function validationurlSite() {
  // var urlRegex = /^https\:\/\/www\.[\w\W]{0,20}\.com[\w\W]{0,}$/i;
  var urlRegex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/g;

  var mess = document.getElementById("mess");
  var urle = siteUrl.value;
  if (urlRegex.test(urle)) {
    mess.classList.add("d-none");

    inputurlvalid.classList.add("is-valid");
    inputurlvalid.classList.remove("is-invalid");

    return true;
  } else {
    mess.classList.remove("d-none");

    inputurlvalid.classList.remove("is-valid");
    inputurlvalid.classList.add("is-invalid");

    return false;
  }
}

function validationNameSite() {
  //local
  var sitenameRegex = /^[a-zA-Z ][a-zA-Z1-9 ]{2,19}$/;
  var text = siteName.value;
  var mess1 = document.getElementById("mess1");

  if (sitenameRegex.test(text)) {
    mess1.classList.add("d-none");
    inputnamevalid.classList.add("is-valid");
    inputnamevalid.classList.remove("is-invalid");
    return true;
  } else {
    mess1.classList.remove("d-none");
    inputnamevalid.classList.add("is-invalid");
    inputnamevalid.classList.remove("is-valid");

    return false;
  }
}

///  ده هجس متبصش عليه
// function checkname() {

// if(
//  JSON.parse(localStorage.getItem("websites")).include(inputnamevalid )
// ) {
//     mess1.classList.add("d-none");
//     return false
//     }
// else {
//     return true
//     }
// }
