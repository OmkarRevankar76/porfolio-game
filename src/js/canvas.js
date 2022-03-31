

//import hills from "../images/hills1.png"
import platform from "../images/platform.png"

import background from "../images/background.png"
// import { init } from "browser-sync"
import platformSmallTall from "../images/platformSmallTall.png"

import spriteRunRight from "../images/spriteRunRight.png"
import spriteRunLeft from "../images/spriteRunLeft.png"
import spriteStandLeft from "../images/spriteStandLeft.png"
import spriteStandRight from "../images/spriteStandRight.png"

console.log(platform)



const canvas=document.querySelector("canvas")

const c=canvas.getContext("2d")


canvas.width=1024
canvas.height=576


const gravity=1.5

class Player{
    constructor(){
        this.speed=10
        this.position={
            x:100,
            y:100
        }
        this.velocity={
            x:0,
            y:0
        }
        this.width=66
        this.height=150
        this.image=createImage(spriteStandRight)
        this.frame=0
        this.sprites={
            stand:{
               right: createImage(spriteStandRight),
               left:createImage(spriteStandLeft),
               cropWidth:177,
               width:66
            },
            run:{
                right: createImage(spriteRunRight),
                left:createImage(spriteRunLeft),
                cropWidth:341,
                width:127.875
            }
        }
        this.currentSprite= this.sprites.stand.right
        this.currentCropWidth=177
    }

    draw(){
      
        c.drawImage(this.currentSprite,
            this.currentCropWidth * this.frame,
            0,
            this.currentCropWidth ,
            400,
            this.position.x,this.position.y,this.width,this.height)

    }
   update(){
       this.frame ++

       if(this.frame>59 && (this.currentSprite===this.sprites.stand.right || this.currentSprite===this.sprites.stand.left))this.frame=0
   else if(this.frame>29 && (this.currentSprite===this.sprites.run.right || this.currentSprite===this.sprites.run.left))this.frame=0
   
       this.draw()
    this.position.x +=this.velocity.x
    this.position.y +=this.velocity.y

    if(this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y +=gravity
      
   
   
    }



}




class Platform{
    constructor({x,y,image}){
        this.position={
            x,
            y
        }
        this.image=image
    this.width=image.width
    this.height=image.height
    
    
    }
    draw(){
      c.drawImage(this.image,this.position.x,this.position.y)
    }
}


class GenericObject{
    constructor({x,y,image}){
        this.position={
            x,
            y
        }
        this.image=image
    this.width=image.width
    this.height=image.height
    
    
    }
    draw(){
      c.drawImage(this.image,this.position.x,this.position.y)
    }
}

function createImage(imageSrc){


    const image=new Image()
    image.src = imageSrc

return image
}
let platformImage=createImage(platform)
let platformSmallTallImage=createImage(platformSmallTall)


let player=new Player()

let platforms=[ 


]
  let genericObjects =[]

  let lastKey
  const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

let scrollOffset=0


function init(){
 platformImage=createImage(platform)



 player=new Player()

 platforms=[
    new Platform({x:platformImage.width * 5 + 300 +platformImage.width -platformSmallTallImage.width,y:400,image:createImage(platformSmallTall)}) 
    ,
    new Platform({x:platformImage.width * 6 + 300 ,y:400,image:createImage(platformSmallTall)}),
    new Platform({x:-1,y:470,image:platformImage})
,new Platform({x:platformImage.width-3,y:470,image:platformImage}),
new Platform({x:platformImage.width * 2 + 300 ,y:290,image:platformImage})
,new Platform({x:platformImage.width * 3 + 300 ,y:290,image:platformImage}),
new Platform({x:platformImage.width * 4 + 300 ,y:290,image:platformImage}),
new Platform({x:platformImage.width * 7 +300,y:470,image:platformImage}),
new Platform({x:platformImage.width * 8 +400,y:550,image:platformImage}),
new Platform({x:platformImage.width * 9 +600,y:470,image:platformImage}),
new Platform({x:platformImage.width * 10 +1000,y:250,image:platformImage}),
new Platform({x:platformImage.width * 11 +600,y:250,image:platformImage}),
new Platform({x:platformImage.width * 12 +800,y:470,image:platformImage}),
new Platform({x:platformImage.width * 13 +800,y:470,image:platformImage}),
new Platform({x:platformImage.width * 14 +800,y:470,image:platformImage}),
new Platform({x:platformImage.width * 15 +800,y:470,image:platformImage}),
new Platform({x:platformImage.width * 16 +800,y:470,image:platformImage}),
new Platform({x:platformImage.width * 17 +1000,y:270,image:platformImage}),
new Platform({x:platformImage.width * 18 +1000,y:270,image:platformImage}),
new Platform({x:platformImage.width * 19 +1000,y:270,image:platformImage}),
new Platform({x:platformImage.width * 20 +1200,y:470,image:platformImage}),
new Platform({x:platformImage.width * 21 +1200,y:470,image:platformImage}),
new Platform({x:platformImage.width * 22 +1500,y:160,image:platformImage}),
new Platform({x:platformImage.width * 23 +1500,y:160,image:platformImage}),
new Platform({x:platformImage.width * 24 +1530,y:450,image:platformImage}),
new Platform({x:platformImage.width * 25 +1530,y:450,image:platformImage}),
new Platform({x:platformImage.width * 26 +1530,y:450,image:platformImage}),
new Platform({x:platformImage.width * 27 +1580,y:480,image:platformImage})




// new Platform({x:platformImage.width * 3 + 300,y:470,image:platformImage}),
// new Platform({x:platformImage.width * 4 + 300-2,y:470,image:platformImage}),
// new Platform({x:platformImage.width * 5 + 700-2,y:470,image:platformImage}),
// new Platform({x:platformImage.width * 6 + 700-2,y:470,image:platformImage}),
// new Platform({x:platformImage.width * 7 + 700-2,y:470,image:platformImage})


]
   genericObjects =[
      new GenericObject(
          {
              x:-1,
              y:-1,
              image:createImage(background)
          }
      ),
    //   new GenericObject(
    //     {
    //         x:-1,
    //         y:-1,
    //         image:createImage(hills)
    //     }
    // )
  ]
 

 scrollOffset=0
}

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)

  genericObjects.forEach(genericObject=>{
    genericObject.draw() 
  })
   
    platforms.forEach((platform) => {
        platform.draw()
    })
    player.update()
  

 if(keys.right.pressed && player.position.x <400){
     player.velocity.x=5
 }else if((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffset==0 && player.position.x>0 ){
     player.velocity.x=-5
 }
 
 else{
     player.velocity.x=0


    if(keys.right.pressed){
        scrollOffset +=player.speed
        platforms.forEach((platform) => {
            platform.position.x -= player.speed
        })
        genericObjects.forEach(genericObject=>{
            genericObject.position.x -= player.speed * .86
        })
        
    }else if(keys.left.pressed && scrollOffset>0){
        scrollOffset -= player.speed
        platforms.forEach((platform) => {
          platform.position.x += player.speed
        })

        genericObjects.forEach(genericObject=>{
            genericObject.position.x += player.speed * .86
        })
      
    }

 }

 console.log(scrollOffset)
//platform collision detection
 platforms.forEach((platform) => {
 if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x  && player.position.x <= platform.position.x + platform.width){
    player.velocity.y=0
 } 
   
})

//sprte switching
if(
    keys.right.pressed && 
    lastKey==="right" && player.currentSprite !== player.sprites.run.right){
  player.frame=1
    player.currentSprite=player.sprites.run.right
  
    player.currentCropWidth=player.sprites.run.cropWidth
    player.width=player.sprites.run.width
}else if( keys.left.pressed && 
    lastKey==="left" && player.currentSprite!== player.sprites.run.left){
    player.currentSprite=player.sprites.run.left
    player.currentCropWidth=player.sprites.run.cropWidth
    player.width=player.sprites.run.width
}
else if( !keys.left.pressed && 
    lastKey==="left" && player.currentSprite!== player.sprites.stand.left){
    player.currentSprite=player.sprites.stand.left
    player.currentCropWidth=player.sprites.stand.cropWidth
    player.width=player.sprites.stand.width
}
else if( !keys.right.pressed && 
    lastKey==="right" && player.currentSprite!== player.sprites.stand.right){
    player.currentSprite=player.sprites.stand.right
    player.currentCropWidth=player.sprites.stand.cropWidth
    player.width=player.sprites.stand.width
}
//win condition 
 if(scrollOffset >platformImage.width * 5 + 300-2){
     console.log("you win")
 }


 // lose condition 
 if(player.position.y > canvas.height){
       init()
 }
}

init()


animate()

addEventListener("keydown", ({ keyCode })=>{
    // console.log(keyCode)
    switch(keyCode){
        case 65:
            console.log("left")
            keys.left.pressed=true
            lastKey="left"
            break
        
        case 83:
        console.log("down")

        break
    
      
        case 68:
        console.log("right")
        keys.right.pressed=true
       lastKey="right"
        break


          
        case 87:
        console.log("up")
        player.velocity.y -= 25
        break
    
        }

    console.log(keys.right.pressed)
    })



addEventListener("keyup", ({ keyCode })=>{
    // console.log(keyCode)
    switch(keyCode){
        case 65:
            console.log("left")
            keys.left.pressed=false
            break
        
        case 83:
        console.log("down")
        break
    
      
        case 68:
        console.log("right")
        keys.right.pressed=false
     
        break


          
        case 87:
        console.log("up")
        break
    
        }
        console.log(keys.right.pressed)
    })



