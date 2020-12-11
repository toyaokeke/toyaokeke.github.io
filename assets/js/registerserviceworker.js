/**
* Template Name: Toya Okeke
* Template URL: https://github.com/toyaokeke/toyaokeke.github.io
* Author: Toya Okeke
*/
!function(){"use strict";window.isUpdateAvailable=new Promise(function(o,e){"serviceWorker"in navigator&&-1===["localhost","192"].indexOf(location.hostname)&&navigator.serviceWorker.register("service-worker.js").then(function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?o(!0):o(!1))}}}).catch(function(e){console.error("[SW ERROR]",e)})}),window.isUpdateAvailable.then(function(e){e&&this.toastCtrl.create({message:"New Update available! Reload to see the latest juicy changes.",position:"bottom",showCloseButton:!0}).present()})}();