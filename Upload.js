//Declaring variables for objects in background
var redbarrel, greenbarrel, box, saw;
var doorlock, doorunlock, dooropen, correctswitch, wrongswitch;

// Declaring Tiles variables
var acidhalf, acidfull, fenceright, fenceleft, fencecenter, spikes;
var bgt1,bgt2,bgt3,bgt4,bgt5,bgt6,bgt7,bgt8;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15;
var villianimg, brotherrunimg, brotherattackimg, brotheridleimg, brotherdeadimg;



class Upload{
    constructor(){
 // Loading objects images
 redbarrel =loadImage("images/objects/Barrel1.png");
 greenbarrel =loadImage("images/objects/Barrel2.png");
 box =loadImage("images/objects/Box.png");
 saw= loadImage("images/objects/Saw.png");
 doorlock =loadImage("images/objects/DoorLocked.png");
 doorunlock =loadImage("images/objects/Doorunlocked.png");
 dooropen =loadImage("images/objects/DoorOpen.png");
 correctswitch =loadImage("images/objects/Switch (1).png");
 wrongswitch =loadImage("images/objects/Switch (2).png");

 //Load Background objects
 bgt1 =loadImage("images/tiles/BGTile1.png");
 bgt2 =loadImage("images/tiles/BGTile2.png");
 bgt3 =loadImage("images/tiles/BGTile3.png");
 
 bgt4 =loadImage("images/tiles/BGTileL.png");
 bgt5 =loadImage("images/tiles/BGTileR.png");

 acidhalf =loadImage("images/tiles/Acid1.png");
 acidfull=loadImage("images/tiles/Acid2.png");

 bgt6=loadImage("images/tiles/LTL.png");
 bgt7=loadImage("images/tiles/LTM.png");
 bgt8=loadImage("images/tiles/LTR.png");

  t1 =loadImage("images/tiles/HTBC.png");
  t2 =loadImage("images/tiles/HTBL.png");
  t3 =loadImage("images/tiles/HTBR.png");
  t4 =loadImage("images/tiles/HTBS.png");
  t5 =loadImage("images/tiles/HTC.png");

  t6 =loadImage("images/tiles/HTL.png");
  t7=loadImage("images/tiles/HTR.png");

  t8 =loadImage("images/tiles/BTC.png");
  t9 =loadImage("images/tiles/BTcrL.png");
  t10=loadImage("images/tiles/BTcrR.png");
  t11 =loadImage("images/tiles/BTL.png");
  t12 =loadImage("images/tiles/BTR.png");

  fenceleft= loadImage("images/tiles/Fence1.png");
  fenceright= loadImage("images/tiles/Fence3.png");
  fencecenter= loadImage("images/tiles/Fence2.png");
  spikes = loadImage("images/tiles/Spike.png");

  //adding the brother animation
  brotheridleimg=loadAnimation("images/brother/Idle (1).png", "images/brother/Idle (2).png", "images/brother/Idle (2).png",
  "images/brother/Idle (4).png", "images/brother/Idle (5).png", "images/brother/Idle (6).png", "images/brother/Idle (7).png",
  "images/brother/Idle (8).png", "images/brother/Idle (9).png", "images/brother/Idle (10).png");
  
  brotherrunimg=loadAnimation("images/brother/Run (1).png", "images/brother/Run (2).png", "images/brother/Run (3).png",
  "images/brother/Run (4).png", "images/brother/Run (5).png", "images/brother/Run (6).png",
  "images/brother/Run (7).png", "images/brother/Run (8).png", "images/brother/Run (9).png", 
  "images/brother/Run (10).png",);

  brotherattackimg =loadAnimation("images/brother/Attack (1).png", "images/brother/Attack (2).png", "images/brother/Attack (3).png", 
  "images/brother/Attack (4).png", "images/brother/Attack (5).png", "images/brother/Attack (6).png", 
  "images/brother/Attack (7).png","images/brother/Attack (8).png", "images/brother/Attack (9).png",
  "images/brother/Attack (10).png")
  
  brotherdeadimg = loadAnimation("images/brother/Dead (1).png", "images/brother/Dead (2).png", "images/brother/Dead (3).png",
  "images/brother/Dead (4).png", "images/brother/Dead (5).png", "images/brother/Dead (6).png", "images/brother/Dead (7).png",
  "images/brother/Dead (8).png", "images/brother/Dead (9).png", "images/brother/Dead (10).png");

    }
}