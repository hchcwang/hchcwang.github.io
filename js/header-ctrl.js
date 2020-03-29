let mobileNav = document.getElementById("mobile-nav");
let mobileNavMenu = document.getElementById("mobile-nav-menu");
let mobileNavIcon = document.getElementById("mobile-nav-icon");

if (mobileNavMenu != null) {
    mobileNavMenu.style.position = "absolute";
    mobileNavMenu.style.top = "50px";

    if (mobileNavIcon != null) {  // set the onclick listener
        mobileNavIcon.onclick = function() {
            if (getComputedStyle(mobileNavMenu, "block").display == "block") {
                mobileNavMenu.style.display = "none";
            } else {
                mobileNavMenu.style.display = "block";
            }
        }
    }

    if (getComputedStyle(mobileNav, "block").display == "block") {  // hide the menu when the page opens
        mobileNavMenu.style.display = "none";
    }
}

