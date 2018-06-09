/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

console.log("webpack dziala");
document.addEventListener("DOMContentLoaded", function() {

  var Furry=__webpack_require__(1);
  var Coin=__webpack_require__(2);

  var game = new Game();
              game.showFurry();
              game.showCoin();
              game.startGame();
              game.showObstacle();

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}
function Obstacle() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}



function Game() {
          this.board=document.querySelectorAll("#board div");
          this.furry = new Furry();
          this.coin = new Coin();
          this.obstacle = new Obstacle()
          this.score = 0;

          var self=this;
          this.startGame = function(){
            this.idSetInterval = setInterval(function() {
            self.moveFurry()  }, 900);
          }

            this.index = function(x, y) {
              return x + (y * 10);
            }
            this.showFurry = function() {
              this.board[ this.index(this.furry.x,this.furry.y) ].classList.add("furry");
            }
            this.showCoin = function() {
              this.board[ this.index(this.coin.x,this.coin.y) ].classList.add("coin");
              }
              this.showObstacle = function() {
                this.board[ this.index(this.obstacle.x,this.obstacle.y) ].classList.add("obstacle");
              }

            this.moveFurry = function() {
                  this.hideVisibleFurry();
                    if (this.furry.direction === "up") {
                      this.furry.y -= 1;
                    } else if (this.furry.direction === "right") {
                      this.furry.x += 1;
                    } else if (this.furry.direction === "down"){
                      this.furry.y += 1;
                    } else if (this.furry.direction === "left") {
                      this.furry.x -=1;
                    }
                    this.gameOver();
                    this.showFurry();
                    this.CoinCollector();
                    this.Speed();
                    this.SpeedCoin();



      }

      this.hideVisibleFurry = function() {
        var visible = document.querySelector(".furry");
        visible.classList.remove("furry");
      }

      this.FurryMovementn = function(event) {
        switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 40:
        this.furry.direction = "down";
        break;
      }
    }

    document.addEventListener("keydown", function(event){
    self.FurryMovementn(event);
    });


    this.CoinCollector = function() {
      if(this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
        var coinBox = document.querySelector(".coin");
        coinBox.classList.remove("coin");
        var result = document.querySelector("strong");
        result.textContent = parseInt(result.textContent) + 1;
        this.coin=new Coin();
        this.showCoin();
      }
    }
    this.ObstacleFix = function() {
      if(this.obstacle.x == this.coin.x && this.obstacle.y == this.coin.y) {
        var obstacleBox = document.querySelector(".obstacle");
        obstacleBox.classList.remove("obstacle");
        this.obstacle=new Obstacle();
        this.showObstacle();
      }
    }
    this.Speed = function(){
      var speed = document.querySelector("p");
      var coinscore = document.querySelector("strong").innerText;
      if (coinscore == 5 ){
        var speed = document.querySelector("p");
        speed.textContent = parseInt(200);
      }  if (coinscore == 2*5 ){
          var speed = document.querySelector("p");
          speed.textContent = parseInt(300);
        }  if (coinscore == 3*5 ){
            var speed = document.querySelector("p");
            speed.textContent = parseInt(400);
          }  if (coinscore == 2*2*5 ){
              var speed = document.querySelector("p");
              speed.textContent = parseInt(500);
            }  if (coinscore == 5*5 ){
                var speed = document.querySelector("p");
                speed.textContent = parseInt(600);
              }  if (coinscore == 2*3*5 ){
                  var speed = document.querySelector("p");
                  speed.textContent = parseInt(700);
                }   if (coinscore == 7*5 ){
                    var speed = document.querySelector("p");
                    speed.textContent = parseInt(800);
                  }   if (coinscore == 8*5 ){
                      var speed = document.querySelector("p");
                      speed.textContent = "MAX";
                      speed.style.color = "red"
                    }
    }

    this.SpeedCoin = function(){
      var coinscore = document.querySelector("strong").innerText
      if (coinscore >= 1){
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 900);
    }  if (coinscore >= 5) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 800);
    }  if (coinscore >= 5*2) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 700);
    }  if  (coinscore >= 5*3) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 600);
    } if  (coinscore >= 5*4) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 500);
    } if  (coinscore >= 5*5) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 400);
    } if  (coinscore >= 5*6) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 300);
    } if  (coinscore >= 5*7) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 200);
    } if  (coinscore >= 5*8) {
      clearInterval(this.idSetInterval)
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 100);
    }
    // this.SpeedCoin1 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 5){
    //
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 800);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin2 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 10){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 700);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin3 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 15){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 600);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin4 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 4*5){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 500);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin5 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 5*5){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 400);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin6 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 6*5){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 300);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoin7 = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 7*5){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 200);
    //   console.log("speed up!");}
    // }
    // this.SpeedCoinMax = function(){
    //   var coinscore = document.querySelector("strong").innerText
    //   if (coinscore >= 8*5){
    //   clearInterval(this.idSetInterval)
    //   this.idSetInterval = setInterval(function() {
    //   self.moveFurry()  }, 100);
    //   console.log("speed up!");}
    }

    this.gameOver = function() {
      if (this.furry.x<0 || this.furry.x>9 || this.furry.y<0 || this.furry.y>9) {
        clearInterval(this.idSetInterval)
        var gameEnd = document.getElementById("over");
        gameEnd.classList.remove("invisible");
        this.hideVisibleFurry();
      } if (this.furry.x == this.obstacle.x && this.furry.y == this.obstacle.y) {
        clearInterval(this.idSetInterval)
        var gameEnd = document.getElementById("over");
        gameEnd.classList.remove("invisible");
        this.hideVisibleFurry();
      }
      }
}
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

module.exports = Furry;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

module.exports = Coin;


/***/ })
/******/ ]);
