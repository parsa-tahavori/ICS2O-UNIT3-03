// Copyright (c) 2022 Parsa TAhavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * calculate sphere.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const volume = (4.0 / 3.0) * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML =
    "volume is: " + volume.toFixed(2) + " cm³"
}