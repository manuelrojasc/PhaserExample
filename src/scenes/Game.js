import Phaser from "phaser";

export default class Game extends Phaser.Scene{
    
   init(){
    this.paddleRigthVelocity= new Phaser.Math.Vector2(0,0)
   }

    preload(){}

    create(){
       this.ball= this.add.circle(400,250,10,0xffffff)
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1,1)
        this.ball.body.setCollideWorldBounds(true,1,1)
        this.ball.body.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200))

        this.paddleleft = this.add.rectangle(50,250,30,100,0xfbfffa,1)
        this.physics.add.existing(this.paddleleft,true)

        this.paddleRigth= this.add.rectangle(750,250,30,100,0xfffffa,1)
        this.physics.add.existing(this.paddleRigth,true)
        //paddleleft.body.setBounce(1,1)
        this.physics.add.collider(this.paddleleft,this.ball)
        this.physics.add.collider(this.paddleRigth,this.ball)

        this.cursors=  this.input.keyboard.createCursorKeys()
    }

    update(){
        const body = this.paddleleft.body
        if(this.cursors.up.isDown){
            this.paddleleft.y -=10
            body.updateFromGameObject()
        }else if(this.cursors.down.isDown){
            this.paddleleft.y +=10
            body.updateFromGameObject()
        }

        const diff=this.ball.y- this.paddleRigth.y
        if(Math.abs(diff)<10){
            return
        }
        if(diff <0){
            this.paddleRigthVelocity.y= -0.5
            if(this.paddleRigthVelocity.y < -10){
              this.paddleRigthVelocity.y=-10      
            }
        }else if(diff >0){
            this.paddleRigthVelocity.y= 0.5
            if(this.paddleRigthVelocity.y < 10){
                this.paddleRigthVelocity.y=10      
              }
        }
        this.paddleRigth.y +=this.paddleRigthVelocity 
        this.paddleRigth.body.updateFromGameObject()
    }
}