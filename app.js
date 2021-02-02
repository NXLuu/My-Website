{
    /*Tao animation cho background */
    /* Tao chu chay */
    str = ["a Person", "not a Superman", "a Web Developer"];

    function deleteText() {
        let span = document.querySelector(".introduce").firstElementChild;
        let currentText = span.innerHTML;
        // console.log(currentText);
        if (currentText == "") {
            clearInterval(itDelete);
            i=0;
            id = setInterval(addText, 50);
            return;
        } else {
            currentText = currentText.substring(0, currentText.length-1);
            span.innerHTML = currentText;
        }
    }
    // let itDelete = setInterval(deleteText, 50);
    let id;
    let stt = 0;
    let i = 0;
    function addText() {
        let span = document.querySelector(".introduce").firstElementChild;
        let text = str[stt];
        if (i >= text.length) {
                clearInterval(id);
                stt = (stt+1) %3;
                setTimeout(() => {
                    itDelete = setInterval(deleteText, 50);
                }, 3000);
                
                return;
            } else {
            span.innerHTML = span.innerHTML + text[i];
            ++i;}
            
        
    }

    
}
{
    // document.querySelector(".background").addEventListener("mousemove", moveBackground);

    function moveBackground(e) {
        let img = document.querySelector(".background-img");
        let midX = img.offsetWidth/2;

        let midY = img.offsetHeight/2;

        let x = (e.clientX-midX)/10;
        let y = (e.clientY-midY)/10;
        
        
        img.style.transform = "rotate3d(" + y + "," + x + ",0.5" + ",15deg)" 
    }

}


{
    /* */
    document.querySelector(".background").addEventListener("mousemove", function(e) {
        document.querySelectorAll(".block-img").forEach(function(item, index) {
            if (item.classList.contains("b1")) return;
            let speed = item.dataset.speed;
            let styleItem = getComputedStyle(item);
            let matrix = new WebKitCSSMatrix(styleItem.transform);
            
            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerHeight - e.pageY*speed)/100;
            item.style.transform = `translate3d(${x}px, ${y}px, ${speed}px)`;
           
        });
    })
   
}

{
    let maker = document.querySelector("#maker");
    let item = document.querySelectorAll(".nav-menu .active");
   

}
$(document).ready(function() {
    $('#nav-menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 0,
        scrollThreshold: 1,
        filter: '',
        easing: 'swing',
    // all custom jQuery will go here
});})

{
    const imgs = Array.from(document.querySelectorAll(".imgBox img"));
    var myAnimation = new hoverEffect({
        parent: document.querySelector(".imgBox"),
        intensity: 0.3,
        image1: imgs[0].getAttribute("src"),
        image2: imgs[1].getAttribute("src"),
        displacementImage: '/14.jpg'
    });
}

{
    document.querySelector(".arrow a").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#about").scrollIntoView(true);
    })
}