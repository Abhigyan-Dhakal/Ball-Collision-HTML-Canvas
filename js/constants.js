const ballArray = [];
const noOfBalls = 100;
const ballRadiusRange = {
  min: 10,
  max: 20
};

const colorArray = ["#5ADBFF", "#FFDD4A", "#094074", "#FE9000", "#53DD6C"];

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight-8;
canvas.width = window.innerWidth-8;