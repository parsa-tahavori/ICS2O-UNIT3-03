// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the volume of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius").value)
  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³"
}
