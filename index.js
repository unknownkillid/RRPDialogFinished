let yesanim = document.getElementById('yesanimation');
let noanim = document.getElementById('noanimation');
let maincontainer = document.getElementById('container');
let textNone = document.getElementById('first-text');

function animationMoveYes(){
    if (yesanim.style.marginLeft = "3px"){
        textNone.style.opacity = 0;
        noanim.style.opacity = 0;
        maincontainer.style.transition = "1s"
        maincontainer.style.boxShadow = "inset 385px 0 0 0 rgb(255, 0, 106, 0.625)";
        yesanim.style.marginLeft = "387px";
        setInterval((yesanimationinterval) => {
            if (yesanim.style.marginLeft = "387px"){
                maincontainer.style.display = "none";
            }
        }, 1500);
    }
}

function animationMoveNo(){
    if (noanim.style.marginLeft = "387px") {
        textNone.style.opacity = 0;
        yesanim.style.opacity = 0;
        maincontainer.style.transition = "1s"
        maincontainer.style.boxShadow = "inset -385px 0 0 0 rgb(255, 208, 0, 0.625)";
        noanim.style.marginLeft = "3px";
        setInterval((noanimationinterval) => {
            if (noanim.style.marginLeft = "3px"){
                maincontainer.style.display = "none";
            }
        }, 1500);
    }
}