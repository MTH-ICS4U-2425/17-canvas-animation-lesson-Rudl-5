/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: 
 */

import { CTX, CANVAS, GRAVITY, FLOOR, ground } from "./globals.js"

let cntr = 0

export default class Player {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

    this.position = {
      x: x,
      y: y
    }
    this.velocity = {
      x: 0,
      y: 0
    };
  }
  get right(){
    return this.width + this.position.x
  }
  get bottom(){
    return this.height + this.position.y
  }
  get top(){
    return this.position.y
  }
  get left(){
    return this.position.x
  }


  jump(){
    this.position.y -= 1 
    if (this.bottom >= FLOOR-1)
    this.velocity.y = -20
  }
  /**
   * Main function to update location, velocity, and image
   */
  update() {
    if (this.bottom < FLOOR){
    this.velocity.y += GRAVITY
    }else{
      this.velocity.y = 0
      this.position.y = FLOOR - this.height
    }

    this.position.x += this.velocity.x
    if(this.bottom + this.velocity.y >FLOOR){
      this.velocity.y = 0
      this.position.y = FLOOR - this.height
    }
    this.position.y += this.velocity.y
    this.draw();
  }

  /**
   * Draw the player on the canvas
   */
  draw() {
    // CTX.fillStyle = "yellow";
    // CTX.fillRect(this.position.x, this.position.y, this.width, this.height);
    if(this.bottom < FLOOR){
      CTX.drawImage(ground,1677,0,89,97,this.position.x,this.position.y,89,97)
    }else{
      if(cntr <= 8){
        CTX.drawImage(ground,1943,0,87,97,this.position.x,this.position.y,89,97)

      }else{
        CTX.drawImage(ground,1855,0,87,97,this.position.x,this.position.y,89,97)

      }
  }
    if(cntr == 16){
      cntr = 0
    }
    cntr += 1
    // console.log(cntr)
    
    

  }
}