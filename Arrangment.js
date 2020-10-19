var rbarrel, gbarrel;
var b1, sawmachine;
var doorUn, doorL, doorO;
var rswitch, gswitch;
var p1, p2, p3, p4, p5;
var spike;
var halfacid;
var f1, f2, f3;
var block
var brotherrun, brotheridle, brotherattack, brotherdead;

class Arrangment{
    constructor(){
      
        p1= createSprite(350,350,50,10);
        p1.addImage(t3);
        p1.scale=0.3;

        p2= createSprite(380,350,50,10);
        p2.addImage(t1);
        p2.scale=0.3;

        p3= createSprite(410,350,50,10);
        p3.addImage(t2);
        p3.scale=0.3;

        rbarrel = createSprite(380, 275, 10, 30);
        rbarrel.addImage(redbarrel);
        rbarrel.scale=0.3;

        f1= createSprite(700,410,20,20);
        f1.addImage(fenceleft);
        f1.scale=0.3;

        f2= createSprite(750,410,20,20);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f3= createSprite(800,410,20,20);
        f3.addImage(fenceright);
        f3.scale=0.3;

        f1= createSprite(700,450,20,20);
        f1.addImage(fenceleft);
        f1.scale=0.3;

        f2= createSprite(750,450,20,20);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f3= createSprite(800,450,20,20);
        f3.addImage(fenceright);
        f3.scale=0.3;

        f1= createSprite(700,490,20,20);
        f1.addImage(fenceleft);
        f1.scale=0.3;

        f2= createSprite(750,490,20,20);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f3= createSprite(800,490,20,20);
        f3.addImage(fenceright);
        f3.scale=0.3;        

        spike= createSprite(270,420, 50, 10);
        spike.addImage(spikes);
        spike.scale = 0.3;

        block= createSprite(120,490,50,50);
        block.addImage(bgt7);
        block.scale=0.3;

        block= createSprite(50,490,50,50);
        block.addImage(bgt8);
        block.scale=0.3;

        block= createSprite(190,490,50,50);
        block.addImage(bgt6);
        block.scale=0.3;

        block= createSprite(190,430,50,50);
        block.addImage(bgt7);
        block.scale=0.3;

        f1= createSprite(310,275,50,10);
        f1.addImage(fenceleft);
        f1.scale=0.3;

        f2= createSprite(400,275,50,10);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f2= createSprite(360,275,50,10);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f3= createSprite(449,275,50,10);
        f3.addImage(fenceright);
        f3.scale=0.3;

        p1 = createSprite(500, 250, 50, 10);
        p1.addImage(t3);
        p1.scale=0.3; 
        
        p3 = createSprite(560, 250, 50, 10);
        p3.addImage(t2);
        p3.scale=0.3; 

        p2 = createSprite(530, 250, 50, 10);
        p2.addImage(t1);
        p2.scale=0.3;

        gbarrel = createSprite(530, 175, 50, 10);
        gbarrel.addImage(greenbarrel);
        gbarrel.scale=0.3;
                
        f1 = createSprite(465, 175, 50, 10);
        f1.addImage(fenceleft);
        f1.scale=0.3;

        f2 = createSprite(540, 175, 50, 10);
        f2.addImage(fencecenter);
        f2.scale=0.3;

        f3 = createSprite(590, 175, 50, 10);
        f3.addImage(fenceright);
        f3.scale = 0.3

        sawmachine = createSprite(920, 260, 10, 10);
        sawmachine.addImage(saw);
        sawmachine.scale = 0.15;

        p1= createSprite(840,300,50,10);
        p1.addImage(t3);
        p1.scale=0.3;

        p2= createSprite(920,300,50,10);
        p2.addImage(t1);
        p2.scale=0.3;

        p3= createSprite(1000,300,50,10);
        p3.addImage(t2);
        p3.scale=0.3;

        sawmachine = createSprite(920, 450, 20, 20);
        sawmachine.addImage(saw);
        sawmachine.scale=0.15;

        doorL = createSprite(1160, 420, 20, 60);
        doorL.addImage(doorlock);
        doorL.scale=0.5;

        gswitch = createSprite(1020,220, 10, 50);
        gswitch.addImage(wrongswitch);
        gswitch.scale=0.3;

        b1 = createSprite(270, 490, 50, 50);
        b1.addImage(box);
        b1.scale=0.3

        b1 = createSprite(660, 490, 50, 50);
        b1.addImage(box);
        b1.scale=0.3

        doorUn = createSprite(110, 190, 20, 60);
        doorUn.addImage(dooropen);
        doorUn.scale=0.5;

        rswitch = createSprite(1050,485, 10, 50);
        rswitch.addImage(wrongswitch);
        rswitch.scale=0.3;
       /*
        brotheridle=createSprite(110,190,20,40);
        brotheridle.addAnimation("idle", brotheridleimg);
        brotheridle.scale=0.15;
        
       // brotheridle.changeAnimation("attack", brotherattackimg);
         brotherrun=createSprite(110,190,20,40);
        brotherrun.addAnimation("running", brotherrunimg);
        brotherrun.scale=0.15;*/
        brotherattack=createSprite(110,190,20,40);
        brotherattack.addAnimation("attack", brotherattackimg);
        brotherattack.scale=0.15;
  }
}
