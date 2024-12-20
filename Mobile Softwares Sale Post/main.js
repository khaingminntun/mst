function openMenu() {
    document.getElementById("sidenav").style.width = "40%";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    //document.body.style.userSelect = "none";
}

function closeMenu() {
    document.getElementById("sidenav").style.width = "0%";
    document.body.style.backgroundColor = "white";
    //document.body.style.userSelect = "active"
}


// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}