Shery.imageEffect("#back",{style : 5,config:{"a":{"value":0.5,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0159235661051773},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":2.49,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.82,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":20.66,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main")
        .addEventListener("click", function () {
            if(!animating){
                animating = true;
                gsap.to(h1s[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function () {
                        gsap.set(this._targets[0], { top: "100%" });
                        animating = false;
                    },
                });
    
                index === h1s.length - 1 ? (index = 0) : index++;
    
                gsap.to(h1s[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
        });
});

var imgDiv = document.querySelectorAll("#imgDiv");
imgDiv.forEach(function (div){
    var imgs = div.querySelectorAll("img");
    var index = 0;
    var animating = false;
    document.querySelector("#main")
        .addEventListener("click", function () {
            if(!animating){
                animating = true;
                gsap.to(imgs[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function () {
                        gsap.set(this._targets[0], { top: "100%" });
                        animating = false;
                    },
                });
    
                index === imgs.length - 1 ? (index = 0) : index++;
    
                gsap.to(imgs[index], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
        });
});
