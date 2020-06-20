class Form {
    constructor(){
        this.input=createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h2');
        this.buttonn=createButton('reset');
    }
    display(){
        var title = createElement('h2');
        title.html("Olympic Hurdles");
        title.position(displayWidth/2-40+0,0);

        this.input.position(displayWidth/2-40,displayHeight/2-40);

        this.button.position(displayWidth/2,displayHeight/2);
        this.buttonn.position(displayWidth-100,20);
        this.buttonn.mousePressed(()=>{
            this.buttonn.hide();
            game.update(0);
            player.updateCount(0);
            Player.updateRank(0);
        });
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("welcome "+player.name+" to the Olympics");
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
    hide () {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}