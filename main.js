var Vue = require('vue')
var headerBar = require('./components/HeaderBar.vue')
var Vue1 = require('vue')
var sidebar = require('./components/Sidebar.vue')

new Vue({
   el: "div",
   render: a => a(headerBar)
})

new Vue1({
   el: "hello",
   render: h => h(sidebar)
});﻿

document.getElementById('menu').onclick = function(event) {
  var target = event.target;
  if (target.className == 'header-bar link') {
  var s = document.getElementsByClassName('header-bar');
  for(var i = 0; i < s.length; i++){
    s[i].classList.remove("active");
  }
  target.classList.add('active');
}
}
