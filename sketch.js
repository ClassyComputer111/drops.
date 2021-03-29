const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var drops = []
var maxDrops = 100;
var engine,world;

function preload(){
    
}

function setup(){
    createCanvas(500,800)

    
    engine = Engine.create();
    world = engine.world;

   
    if(frameCount % 150 === 0)
    { for(var i=0; i<maxDrops; i++)
        { drops.push(new Drop(random(0,400), random(0,400))); }
     }


    
}

function draw(){
    
}   

