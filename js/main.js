

//functions

function windowSizeDependant(){
    var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    
    //setting the height of container = viewport height
    document.querySelector('#container').style.height = viewPortHeight + "px";
}

windowSizeDependant();

//event listeners

window.addEventListener("resize", windowSizeDependant, false);

// Vue.js

const vm = new Vue({
    el: "#container",

    methods: {
        navBar(){
            document.querySelector('#menu').classList.toggle("open");
        }
    }
});