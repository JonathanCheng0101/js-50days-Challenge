import { calculateCircleArea } from "./01_circleArea.js";

function assertEqual(actual, expected, message) {
  if (actual === expected) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message} | expected ${expected}, got ${actual}`);
  }
}

assertEqual(calculateCircleArea(5), 78.54, "Area of radius 5");