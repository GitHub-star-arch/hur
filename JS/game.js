class Game {
    constructor() {}
    getState () {
        var readState = database.ref('gameState');
        readState.on("value",function(data){
            gameState=data.val();
        })
    }
    update (state) {
        database.ref('/').update({
            gameState : state
        })
    }
    async start () {
        if (gameState === 0) {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if (playerCountref.exists()) {
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        play1 = createSprite(100,200);
        play2 = createSprite(300,200);
        play3 = createSprite(500,200);
        play4 = createSprite(700,200);
        players = [play1,play2,play3,play4]
        play1.addImage(c1i);
        play2.addImage(c3i);
        play3.addImage(c2i);
        play4.addImage(c4i);
    }
    play () {
        form.hide();
        //textSize(30);
        //text("gameStart",120,100);
        Player.playerInfo();
        player.readRank();
        image(trasck,0,-displayHeight*4,displayWidth,displayHeight*5)
        if (allPlayers!== undefined) {
            var index = 0, x=275, y;
            //var displayPosition = 130;
            for (var plar in allPlayers) {
                index=index+1;
                x=x+260;
                y=displayHeight-allPlayers[plar].hurdles;
                players[index-1].x=x
                players[index-1].y=y;
                if (index === player.index) {
                    players[index-1].shapeColor="red";
                    fill(255,0,0)
                    ellipse(x,y,60,60)
                    camera.position.x=displayWidth/2
                    camera.position.y=players[index-1].y
                }
                //if (plar === "player"+player.index) {
                //    fill("red");
                //} else {
                //    fill("black");
                //}   
            //displayPosition+= 20;
            //textSize(15);
            //text(allPlayers[plar].name+":"+allPlayers[plar].hurdles,120,displayPosition);
            }
        
        }
        if (keyIsDown(UP_ARROW) && player.index!== null) {
            player.hurdles+=10;
            player.update();
        }
        if (player.hurdles>100) {
            gameState = 2;
            player.Rank+=1
            Player.updateRank(player.Rank);
            stroke("red");
            textSize(100);
            fill("red");
            text("playerRank:"+player.Rank,displayWidth/2-100,displayHeight-5000);
            console.log(player.Rank);
        }
        drawSprites();
    }
}