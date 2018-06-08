console.log("webpack dziala");
document.addEventListener("DOMContentLoaded", function() {

  var Furry=require("./furry_module.js");
  var Coin=require("./coin_module.js");

  var game = new Game();
              game.showFurry();
              game.showCoin();
              game.startGame();

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}



function Game() {
          this.board=document.querySelectorAll("#board div");
          this.furry = new Furry();
          this.coin = new Coin();
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
      }

      this.hideVisibleFurry= function() {
        var visible = document.querySelector(".furry");
        visible.classList.remove("furry");
      }

      this.FurryMovementn= function(event) {
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


    this.CoinCollector= function() {
      if(this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
        var coinBox=document.querySelector(".coin");
        coinBox.classList.remove("coin");
        var result= document.querySelector("strong");
        result.textContent = parseInt(result.textContent) + 1;
        this.coin=new Coin();
        this.showCoin();
      }
    }
    this.SpeedCoin = function(){
      if this.score = 5
      this.idSetInterval = setInterval(function() {
      self.moveFurry()  }, 800);
    }

    this.gameOver= function() {
      if (this.furry.x<0 || this.furry.x>9 || this.furry.y<0 || this.furry.y>9) {
        clearInterval(this.idSetInterval)
        var gameEnd = document.getElementById("over");
        gameEnd.classList.remove("invisible");
        this.hideVisibleFurry();
        }
      }
}
});
