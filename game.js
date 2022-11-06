// playlist for the bois: https://open.spotify.com/playlist/3i6twnnYkkdmpeNHU91SXZ
var scenes = document.getElementsByClassName('scene');
var scene = "adventure";
var levelTab = 0;
var gemCounter = 0;
var npcs = [];
var dNpcs = [];
var popUps = [];
var eD = 0;
var grass = [];
var owns = localStorage.getItem("owned") || "0,0,0,0,0,0,0,0";
owns = "1,1,1,1,0,1,1,0";
owns = owns.split(",");
var buy = new Audio("buy.mp3");
gems = parseInt(localStorage.getItem("gems")) || 0;
var name = "Thomas";
var slimes = 0;
var Goblins = 0;
var ghosts = 0;
var elves = 0;
var yetis = 0;
var slimes2 = 0;
var slimes3 = 0;
var snowmen = 0;
var rockGiants = 0;
var rockPeople = 0;
var allySlimes = 0;
var GoblinBoss = 0;
var swordElves = 0;
var frameCount = 0;
var orcs = 0;
var kingSlimes = 0;
var allySoldiers = 0;
var quest = "None";
var slimesKilled = 0;
var goblinsKilled = 0;
var ghostsKilled = 0;
var talking = false;
var talkingTo = "";
var dialougeLayer = 1;
var bandagesT1 = parseInt(localStorage.getItem("bandagesT1")) || 0;
var manaPotionT1 = parseInt(localStorage.getItem("manaPotionT1")) || 0;
var itemCoolDown = 0;
var dialouges = {
    "Gaurd 1": {
        "1": {
            says: "Hello",
            canSay: [["Hi", "next"], ["Nevermind see you", "exit"]]
        },
        "2": {
            says: "Your a warrior right?",
            canSay: [["Yea", "next"], ["No sorry. Cya.", "exit"]]
        },
        "3": {
            says: "Perfect I could use some help killing those Pesky Slimes.",
            canSay: [["Ok, I will help.", "next"], ["Sorry, but no.", "exit"]]
        },
        "4": {
            says: "Thank you just defeat 6 Slimes for me.",
            canSay: [["Got it", "q1"]]
        },
    },
    "Gaurd 2": {
        "1": {
            says: "Hello!",
            canSay: [["Hi", "next"], ["Wrong person sorry", "exit"]]
        },
        "2": {
            says: "Your the new and rising warrior right?",
            canSay: [["Yea", "next"], ["No sorry. Cya.", "exit"]]
        },
        "3": {
            says: "Oh well then can you help me with something?",
            canSay: [["Ok?", "next"], ["Sorry, but no.", "exit"]]
        },
        "4": {
            says: "I heard the goblins are planning an attack.",
            canSay: [["Yea", "next"], ["Oh, no", "exit"]]
        },
        "5": {
            says: "Can ya teach them a lesson",
            canSay: [["Sure thing", "q2"], ["Nope!", "exit"]]
        },
    }
}
if(name !== "Thomas") {
    alert("Error: Crash, Reason: Unknown, Hello you just incountered a bug we are fixing when you exit out of this your code should disappear sorry for the inconvenience.")
}
var projectiles = [];
var cam = {
    x: player.x - canvas.width/2,
    y: player.y - canvas.height/2,
};
var projectileStats = {
    "boltOrb 1": {
        size: 5,
        dmg: 30,
        range: 400,
        decayRate: 400,
        spd: 3,
        cost: 20,
        knockback: 2,
        effect: [],
    },
    "minigun": {
        size: 5,
        dmg: 10,
        range: 500,
        decayRate: 500,
        spd: 5,
        cost: 5,
        knockback: 1,
        effect: [],
    },
    "minigun2": {
        size: 7.5,
        dmg: 30,
        range: 600,
        decayRate: 200,
        spd: 7.5,
        cost: 20,
        knockback: 1.5,
        effect: [],
    },
    "minigun3": {
        size: 9,
        dmg: 60,
        range: 750,
        decayRate: 250,
        spd: 9,
        cost: 150,
        knockback: 2,
        effect: [["fire", 45, 0.25]],
    },
    "minigun4": {
        size: 12,
        dmg: 10,
        range: 1500,
        decayRate: 200,
        spd: 12,
        cost: 520,
        knockback: 2.5,
        effect: [["fire", 90, 10]],
    },
    "boltOrb 2": {
        size: 15,
        dmg: 50,
        range: 500,
        decayRate: 500,
        spd: 2.5,
        cost: 5,
        knockback: 4,
        effect: [],
    },
    "snowball": {
        size: 10,
        dmg: 1000,
        range: 500,
        decayRate: 500,
        spd: 4,
        cost: 0,
        knockback: 10,
        effect: [],
    },
    "snowball2": {
        size: 20,
        dmg: 6000,
        range: 1000,
        decayRate: 100,
        spd: 6,
        cost: 0,
        knockback: 15,
        effect: [],
    },
    "fireParticle1": {
        size: 5,
        dmg: 10,
        range: 150,
        decayRate: 20,
        spd: 0.3,
        cost: 0,
        knockback: 0.5,
        effect: [["fire", 20, 1]],
    },
    "fireParticle2": {
        size: 10,
        dmg: 10,
        range: 150,
        decayRate: 20,
        spd: 0.6,
        cost: 0,
        knockback: 1,
        effect: [["fire", 50, 0.25]],
    },
    "fireParticle3": {
        size: 15,
        dmg: 1,
        range: 150,
        decayRate: 20,
        spd: 1,
        cost: 0,
        knockback: 1.5,
        effect: [["fire", 100, 0.1]],
    },
    "fireBall 1": {
        size: 25,
        dmg: 100,
        range: 650,
        decayRate: 50,
        spd: 6,
        cost: 40,
        knockback: 4,
        effect: [["fire", 1000, 0.05]],
    },
    "elf arrow": {
        size: 15,
        dmg: 10000,
        range: 650,
        decayRate: 200,
        spd: 10,
        cost: 0,
        knockback: 7,
        effect: [],
    },
}
// projectile function
function projectile(x, y, r, type, team) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.type = type;
    this.size = projectileStats[type].size;
    this.dmg = projectileStats[type].dmg;
    this.life = projectileStats[type].range;
    this.decayRate = projectileStats[type].decayRate;
    this.spd = projectileStats[type].spd;
    this.cost = projectileStats[type].cost;
    this.effects = projectileStats[type].effect;
    this.knockback = projectileStats[type].knockback;
    this.team = team;
    
};
projectile.prototype.draw = function() {
    if(this.type == "boltOrb 1" || this.type == "boltOrb 2" || this.type == "minigun" || this.type == "minigun2" || this.type == "minigun3") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(0, 125, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0)
    } else if(this.type == "minigun4") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(250, 180, 60);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0)
    } else if(this.type == "snowball") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type == "snowball2") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type == "fireBall 1") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 150, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type == "fireParticle1") {
        stroke(0, 0, 0, this.life/400);
        strokeWeight(3);
        eEllipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(250, 0, 0, this.life/400);
        ellipse(this.x - cam.x, this.y - cam.y, this.size - this.life/250, this.size - this.life/250, 0);
    } else if(this.type == "fireParticle2") {
        stroke(0, 0, 0, this.life/400);
        strokeWeight(3);
        eEllipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(250, 200, 0, this.life/400);
        ellipse(this.x - cam.x, this.y - cam.y, this.size - this.life/250, this.size - this.life/250, 0);
    } else if(this.type == "fireParticle3") {
        stroke(0, 0, 0, this.life/400);
        strokeWeight(3);
        eEllipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(250, 250, 100, this.llife/400);
        ellipse(this.x - cam.x, this.y - cam.y, this.size - this.life/250, this.size - this.life/250, 0);
    }else if(this.type == "elf arrow") {
        stroke(0, 0, 0);
        strokeWeight(5);
        line(this.x - cam.x - cos(this.r) * this.size/2, this.y - cam.y - sin(this.r) * this.size/2, this.x - cam.x + cos(this.r) * this.size/2, this.y - cam.y + sin(this.r) * this.size/2);
    }
};
projectile.prototype.update = function() {
    this.x+=cos(this.r) * this.spd;
    this.y+=sin(this.r) * this.spd;
    this.life-=1;
    if(this.team !== "ally" && player.attacking && player.stamina >= 1 && player.selectedInventory === 0) {
        for(var i = 0; i < player.weponCollision.length; i+=1) {
            if(dist(this.x, this.y, player.x + cos(player.r) * player.weponCollision[i], player.y + sin(player.r) * player.weponCollision[i]) < 10 + this.size/2 + player.weponSpd * 5 + 10) {
                this.r = atan2(this.y - (player.y + sin(player.r) * player.weponCollision[i]), this.x - (player.x + cos(player.r) * player.weponCollision[i]));
                this.team = "ally"
            }
        }
    }
};
projectile.prototype.collide = function(t) {
    if(dist(t.x, t.y, this.x, this.y) < this.size + t.size && t.team !== this.team) {
        if(random(0, 100) < t.blockChance && !t.player) {
            this.r = random(0, 360);
            this.team = "enemy"
        } else {
            t.hp-=this.dmg;
            var r = atan2(this.y - t.y, this.x - t.x);
            t.aX = -cos(r) * this.knockback;
            t.aY = -sin(r) * this.knockback;
            this.life -= this.decayRate;
            for(var i = 0; i < this.effects.length; i+=1) {
                for(var j = 0; j < t.effects.length; j+=1) {
                    if(t.effects[j] === this.effects[i]) {
                        break;
                    }
                }
                t.effects.push(this.effects[i]);
            }
        }
        t.range+=100;
        if(this.team == "ally") {
            t.playerHit = 100;
        }
    }
};

// pop up function
function popUp(txt, x, y, size, lifetime) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.aX = (random(-100, 100)/100);
    this.aY = (random(0, 700)/100);
    this.size = size;
    this.lifeTime = lifetime
};
popUp.prototype.draw = function() {
    fill(25, 25, 25, this.lifeTime/100);
    text(this.txt, this.x, this.y, this.size);
};
popUp.prototype.update = function() {
    this.lifeTime-=1;
    this.y-=this.aY;
    this.x+=this.aX;
    this.aX*=0.95;
    this.aY*=0.95;
};

// rectangular button
function button(x, y, w, h, col, d, txt) {
    fill(0, 0, 0);
    rect(x - 3, y - 3, w + 6, h + 6);
    if(mouseX > x && mouseY > y && mouseX < x + w && mouseY < y + h) {
        fill(col[0] + 10, col[1] + 10, col[2] + 10)
        if(clicked) {
            d();
        }
    } else {
        fill(col[0], col[1], col[2])
    }
    rect(x, y, w, h);
    fill(255, 255, 255);
    textAlign("center")
    text(txt[0], x + w/2, y + h/2 + txt[1]/2, txt[1]);
};
// collision function
function collideRect(x, y, w, h, t, alive) {
    if(t.x + t.size > x && t.x - t.size < x + w && t.y + t.size > y && t.y - t.size < y + h) {
        t.x -= t.aX;
        t.y -= t.aY;
        if(!(t.x + t.size < x + t.spd * 2 || t.x - t.size > x + w - t.spd * 2)) {
            if(t.y < y + h/2) {
                t.y = y - t.size;
            } else {
                t.y = y + h + t.size;
            }
        }
        if(!(t.y + t.size < y + t.spd * 2 || t.y - t.size > y + h - t.spd * 2)) {
            if(t.x < x + w/2) {
                t.x = x - t.size;
            } else {
                t.x = x + w + t.size;
            }
        }
    }
};
for(var i = 0; i < 10; i+=1) {
    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
}
// enery thing
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fill(46, 125, 30)
    rect(0, 0, canvas.width, canvas.height)
    switch(scene) {
        case "adventure":
            {
            // desert boime
            fill(200, 150, 60);
            rect(-19500 - cam.x, -8000 - cam.y, 15000, 16000);
            fill(200, 150, 60, 0.3);
            rect(-4500 - cam.x, -8000 - cam.y, 50, 16000);
            rect(-4500 - cam.x, -8000 - cam.y, 100, 16000);
            rect(-4500 - cam.x, -8000 - cam.y, 150, 16000); 
            rect(-19550 - cam.x, -8000 - cam.y, 50, 16000);
            rect(-19600 - cam.x, -8000 - cam.y, 100, 16000);
            rect(-19650 - cam.x, -8000 - cam.y, 150, 16000); 
            rect(-19550 - cam.x, -8050 - cam.y, 15100, 50);
            rect(-19600 - cam.x, -8100 - cam.y, 15200, 100);
            rect(-19650 - cam.x, -8150 - cam.y, 15300, 150); 
            rect(-19550 - cam.x, 8000 - cam.y, 15100, 50);
            rect(-19600 - cam.x, 8000 - cam.y, 15200, 100);
            rect(-19650 - cam.x, 8000 - cam.y, 15300, 150); 
            // forest boime
            fill(4, 102, 0);
            rect(-4500 - cam.x, -25000 - cam.y, 15000, 16000);
            fill(4, 102, 0, 0.3);
            rect(11500 - cam.x, -25000 - cam.y, 50, 16000);
            rect(11500 - cam.x, -25000 - cam.y, 100, 16000);
            rect(11500 - cam.x, -25000 - cam.y, 150, 16000); 
            rect(-4550 - cam.x, -25000 - cam.y, 50, 16000);
            rect(-4600 - cam.x, -25000 - cam.y, 100, 16000);
            rect(-4650 - cam.x, -25000 - cam.y, 150, 16000); 
            rect(-4550 - cam.x, -25050 - cam.y, 15100, 50);
            rect(-4600 - cam.x, -25100 - cam.y, 15200, 100);
            rect(-4650 - cam.x, -25150 - cam.y, 15300, 150); 
            rect(-4550 - cam.x, -9000 - cam.y, 15100, 50);
            rect(-4600 - cam.x, -9000 - cam.y, 15200, 100);
            rect(-4650 - cam.x, -9000 - cam.y, 15300, 150); 
            // snow biome
            fill(200, 200, 200);
            rect(2650 - cam.x, -8000 - cam.y, 15000, 16000);
            fill(200, 200, 200, 0.3);
            rect(2600 - cam.x, -8000 - cam.y, 50, 16000);
            rect(2550 - cam.x, -8000 - cam.y, 100, 16000);
            rect(2500 - cam.x, -8000 - cam.y, 150, 16000); 
            rect(17650 - cam.x, -8000 - cam.y, 50, 16000);
            rect(17650 - cam.x, -8000 - cam.y, 100, 16000);
            rect(17650 - cam.x, -8000 - cam.y, 150, 16000); 
            rect(2600 - cam.x, -8050 - cam.y, 15100, 50);
            rect(2550 - cam.x, -8100 - cam.y, 15200, 100);
            rect(2500 - cam.x, -8150 - cam.y, 15300, 150); 
            rect(2600 - cam.x, 8000 - cam.y, 15100, 50);
            rect(2550 - cam.x, 8000 - cam.y, 15200, 100);
            rect(2500 - cam.x, 8000 - cam.y, 15300, 150); 
            fill(0, 110, 0)
            stroke(0, 110,0);
            strokeWeight(5);
            for(var i = 0; i < grass.length; i+=1) {
                rect(grass[i][0] - cam.x, grass[i][1] - cam.y, 5, 15);
                line(grass[i][0] - cam.x + 2.5, grass[i][1] - cam.y + 15, grass[i][0] - cam.x - 10, grass[i][1] - cam.y + 3);
                line(grass[i][0] - cam.x + 2.5, grass[i][1] - cam.y + 15, grass[i][0] - cam.x + 15, grass[i][1] - cam.y + 3);
                if(grass[i][0] - cam.x < -25) {
                    grass[i][0] = cam.x + canvas.width + random(0, 20);
                } else if(grass[i][0] - cam.x > canvas.width + 25) {
                    grass[i][0] = cam.x - random(0, 20);
                }
                if(grass[i][1] - cam.y < -25) {
                    grass[i][1] = cam.y + canvas.height + random(0, 20);
                } else if(grass[i][1] - cam.y > canvas.height + 25) {
                    grass[i][1] = cam.y - random(0, 20);
                }
            }
            } // background
            {
            fill(120, 105, 75)
            arc(-18550 - cam.x, 0 - cam.y, 150, 150, -Math.PI, 0);
            fill(0, 0, 0)
            arc(-18550 - cam.x, 0 - cam.y, 90, 90, -Math.PI, 0);
            fill(0, 0, 0, 0.2)
            arc(-18550 - cam.x, 0 - cam.y, 95, 95, -Math.PI, 0);
            arc(-18550 - cam.x, 0 - cam.y, 100, 100, -Math.PI, 0);
            arc(-18550 - cam.x, 0 - cam.y, 105, 105, -Math.PI, 0);
            if(dist(-18550, 50, player.x, player.y) < 200) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to enter Desert Dungeon", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "doungen1"
                    player.x = 0;
                    player.y = 0;
                    dNpcs = [];
                    for(var i = 0; i < 5; i+=1) {
                        dNpcs.push(new npc(random(-2180, -1000), random(-50, 70), "Dungeon Goblin", "enemy"))
                    }
                    for(var i = 0; i < 15; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Goblin", "enemy"))
                    }
                    dNpcs.push(new npc(-2600, 0, "Dungeon Goblin Boss", "enemy"))
                }
            } 
            } // desert dungeon
            {
            fill(205, 205, 245)
            arc(16550 - cam.x, 0 - cam.y, 150, 150, -Math.PI, 0);
            fill(0, 0, 0)
            arc(16550 - cam.x, 0 - cam.y, 90, 90, -Math.PI, 0);
            fill(0, 0, 0, 0.2)
            arc(16550 - cam.x, 0 - cam.y, 95, 95, -Math.PI, 0);
            arc(16550 - cam.x, 0 - cam.y, 100, 100, -Math.PI, 0);
            arc(16550 - cam.x, 0 - cam.y, 105, 105, -Math.PI, 0);
            if(dist(16550, 50, player.x, player.y) < 200) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to enter Snow Dungeon", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "doungen2"
                    player.x = 0;
                    player.y = 0;
                    dNpcs = [];
                    for(var i = 0; i < 5; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Yeti", "enemy"))
                    }
                    for(var i = 0; i < 10; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Snowman", "enemy"))
                    }
                    dNpcs.push(new npc(-2600, 0, "Dungeon Yeti Boss", "enemy"))
                }
            } 
            } // snow dungeon
            {
            fill(105, 59, 17);
            rect(-230 - cam.x, -650 - cam.y, 60, 550);
            rect(-230 - cam.x, -700 - cam.y, 1000, 61);
            rect(-230 - cam.x, 100 - cam.y, 60, 551);
            rect(-230 - cam.x, 600 - cam.y, 1000, 61);
            rect(769 - cam.x, -700 - cam.y, 60, 1360);
            fill(95, 49, 7);
            rect(-230 - cam.x, 660 - cam.y, 1059, 100);
            rect(-170 - cam.x, -640 - cam.y, 940, 100);
            rect(-230 - cam.x, -150 - cam.y, 60, 100);
            collideRect(-230, -650, 60, 575, player);
            collideRect(-230, 100, 60, 550, player);
            collideRect(-230, 600, 1059, 130, player);
            collideRect(-230, -700, 1000, 130, player);
            collideRect(770, -700, 60, 1360, player)
            } // walls
            {
            fill(100, 50, 12);
            rect(50 - cam.x, -25 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(50 - cam.x, -125 - cam.y, 40, 150);
            rect(210 - cam.x, -125 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(90 - cam.x, -135 - cam.y, 40, 150);
            rect(170 - cam.x, -135 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(130 - cam.x, -145 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(50 - cam.x, 24 - cam.y, 200, 50);
            fill(0, 0, 200);
            ellipse(100 - cam.x, 65 - cam.y, 20, 20, 0);
            if(dist(100, 80, player.x, player.y) < 100 && !talking) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to talk to Gaurd", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    talking = true;
                    if(player.upgrades < 20) {
                        talkingTo = "Gaurd 1"
                    } else if(player.upgrades >= 20) {
                        talkingTo = "Gaurd 2"
                    }
                }
            } 
            collideRect(50, -125, 200, 175, player);
            } // gaurd building
            {
            fill(100, 50, 12);
            rect(300 - cam.x, -25 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(300 - cam.x, -125 - cam.y, 40, 150);
            rect(460 - cam.x, -125 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(340 - cam.x, -135 - cam.y, 40, 150);
            rect(420 - cam.x, -135 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(380 - cam.x, -145 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(300 - cam.x, 24 - cam.y, 200, 50);
            fill(0, 0, 200);
            ellipse(350 - cam.x, 65 - cam.y, 20, 20, 0);
            if(dist(350, 80, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Todd", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "shop"
                }
            }
            collideRect(300, -125, 200, 175, player);
            } // shop building
            {
            fill(100, 50, 12);
            rect(50 - cam.x, -325 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(50 - cam.x, -425 - cam.y, 40, 150);
            rect(210 - cam.x, -425 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(90 - cam.x, -435 - cam.y, 40, 150);
            rect(170 - cam.x, -435 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(130 - cam.x, -445 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(50 - cam.x, -276 - cam.y, 200, 50);
            fill(0, 0, 200);
            ellipse(100 - cam.x, -235 - cam.y, 20, 20, 0);
            if(dist(100, -220, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Zeminia", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "enchant"
                }
            }
            collideRect(50, -425, 200, 175, player);
            } // enchanters building
            {
            fill(100, 50, 12);
            rect(300 - cam.x, -325 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(300 - cam.x, -425 - cam.y, 40, 150);
            rect(460 - cam.x, -425 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(340 - cam.x, -435 - cam.y, 40, 150);
            rect(420 - cam.x, -435 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(380 - cam.x, -445 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(300 - cam.x, -276 - cam.y, 200, 50);
            fill(0, 0, 200);
            ellipse(350 - cam.x, -235 - cam.y, 20, 20, 0);
            if(dist(350, -220, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Bliskana", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "swordShop"
                }
            }
            collideRect(300, -425, 200, 175, player);
            } // building
            textAlign("center")
            for(var i = 0; i < npcs.length; i+=1) {
                if(npcs[i].x - cam.x >= -npcs[i].size && npcs[i].y - cam.y >= -npcs[i].size && npcs[i].x - cam.x <= canvas.width + npcs[i].size && npcs[i].y - cam.y <= canvas.height + npcs[i].size) {
                    npcs[i].draw();
                }
                npcs[i].update();
                for(var j = 0; j < npcs.length; j+=1) {
                    if(i !== j) {
                        npcs[i].collide(npcs[j], i, j)
                    }
                }
                collideRect(-230, -650, 60, 575, npcs[i]);
                collideRect(-230, 100, 60, 550, npcs[i]);
                collideRect(-230, 600, 1000, 130, npcs[i]);
                collideRect(-230, -700, 1000, 130, npcs[i]);
                collideRect(770, -700, 60, 1360, npcs[i])
                collideRect(50, -425, 200, 175, npcs[i]);
                collideRect(300, -425, 200, 175, npcs[i]);
                collideRect(50, -125, 200, 175, npcs[i]);
                collideRect(300, -125, 200, 175, npcs[i]);
                if(npcs[i].hp <= 0) {
                    if(npcs[i].playerHit >= 0) {
                        console.log(npcs[i].playerHit);
                        changeGems(npcs[i].gems);
                        if(quest[5] === "6" && quest[7] === "S" && quest[8] == "l" && quest[9] == "i" && npcs[i].type === "Slime Lv. 1") {
                            slimesKilled+=1;
                            quest = "Kill 6 Slimes || " + slimesKilled + "/" + 6
                            if(slimesKilled >= 6) {
                                quest = "None";
                                slimesKilled = 0;
                                changeGems(300)
                                player.hp+=10;
                                popUps.push(new popUp("Quest Complete", canvas.width/2 - random(-10, 10), canvas.height/4 + random(-20, 20), 
     50, 300))
                                popUps.push(new popUp("+300 Gems", canvas.width/2 - random(-10, 10), canvas.height/4 + random(70, 90), 
     20, 300))
                            }
                        } else if(quest[5] === "1" && quest[6] === "0" && quest[8] == "G" && quest[9] === "o" && quest[10] === "b" && npcs[i].type === "Goblin") {
                            goblinsKilled+=1;
                            quest = "Kill 10 Goblins || " + goblinsKilled + "/" + 10
                            if(goblinsKilled >= 10) {
                                quest = "None";
                                goblinsKilled = 0;
                                changeGems(1000)
                                player.hp+=30;
                                popUps.push(new popUp("Quest Complete", canvas.width/2 - random(-10, 10), canvas.height/4 + random(-20, 20), 
     50, 300))
                                popUps.push(new popUp("+1000 Gems", canvas.width/2 - random(-10, 10), canvas.height/4 + random(70, 90), 
     20, 300))
                            }
                        } else if(quest[5] === "1" && quest[6] === "5" && quest[8] == "G" && quest[9] === "h" && quest[10] === "o" && npcs[i].type === "Ghost") {
                            goblinsKilled+=1;
                            quest = "Kill 15 Ghosts || " + ghostsKilled + "/" + 10
                            if(ghostsKilled >= 10) {
                                quest = "None";
                                ghostsKilled = 0;
                                changeGems(1000)
                                player.hp+=30;
                                popUps.push(new popUp("Quest Complete", canvas.width/2 - random(-10, 10), canvas.height/4 + random(-20, 20), 
     50, 300))
                                popUps.push(new popUp("+1000 Gems", canvas.width/2 - random(-10, 10), canvas.height/4 + random(70, 90), 
     20, 300))
                            }
                        }
                        if(npcs[i].team === "enemy") {
                            player.exp+=npcs[i].exp;
                        }
                    }
                    npcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                projectiles[i].collide(player);
                for(var j = 0; j < npcs.length; j+=1) {
                    projectiles[i].collide(npcs[j])
                }
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
            }
            if(frameCount % 10 === 0) {
                    //npcs.push(new npc(random(-4500, -3600), random(-1200, 1200), "Rock Person Lv. 1", "enemy"));
                if(slimes < 15) {
                    npcs.push(new npc(random(-2100, -1000), random(-1500, 1500), "Slime Lv. 1", "enemy"));
                }
                if(Goblins < 15 && player.upgrades >= 10) {
                    npcs.push(new npc(random(-12300, -4400), random(-1500, 1500), "Goblin", "enemy"));
                    //npcs.push(new npc(random(-6000, -4000), random(-1000, 1000), "Goblin", "enemy"));
                }
                if(ghosts < 10 && player.upgrades >= 20) {
                    npcs.push(new npc(random(3000, 9600), random(-1500, 1500), "ghost", "enemy"));
                }
                if(rockPeople < 3 && player.upgrades >= 25) {
                    npcs.push(new npc(random(-15500, -9600), random(-1500, 1500), "Rock Person Lv. 1", "enemy"));
                }
                if(orcs < 10) {
                    npcs.push(new npc(random(-14500, -8600), random(-1500, 1500), "Orc", "enemy"));
                }
                if(yetis < 5) {
                    npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Yeti", "enemy"));
                }
                if(snowmen < 15) {
                    npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Snowman", "enemy"));
                }
                if(elves < 10) {
                    npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf", "nuetral"))
                }
                if(swordElves < 10) {
                    //npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf Warrior", "nuetral"))
                }
            }
            if(frameCount % 500 === 0) {
                if(GoblinBoss < 2 && player.upgrades >= 20) {
                    npcs.push(new npc(random(-10350, -9550), random(-100, 100), "GoblinBoss", "enemy"));
                }
                if(rockGiants < 2 && player.upgrades >= 30) {
                    npcs.push(new npc(random(-10950, -9050), random(-100, 100), "Rock Giant Lv. 1", "enemy"));
                }
                if(kingSlimes < 2 && player.upgrades > 10) {
                    npcs.push(new npc(random(-1500, -900), random(-600, 600), "KingSlime Lv. 1", "enemy"));
                }
            }
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(talking) {
                fill(0, 0, 0);
                textAlign("center");
                text(dialouges[talkingTo][dialougeLayer.toString()].says, canvas.width/2, canvas.height - 100, 30);
                for(var i = 0; i < dialouges[talkingTo][dialougeLayer.toString()].canSay.length; i+=1) {
                    button(canvas.width/2 + i * 210 - dialouges[talkingTo][dialougeLayer.toString()].canSay.length/2 * 210, canvas.height - 50, 200, 40, [50, 50, 50], function() {
                        if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "next") {
                            dialougeLayer += 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "exit") {
                            talking = false;
                            dialougeLayer = 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1][0] === "q") {
                            slimesKilled = 0;
                            goblinsKilled = 0;
                            ghostsKilled = 0;
                            if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1][1] === "1") {
                                quest = "Kill 6 Slimes"
                            } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1][1] === "2") {
                                quest = "Kill 10 Goblins"
                            } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1][1] === "3") {
                                quest = "Kill 15 Ghosts"
                            }
                            talking = false;
                            dialougeLayer = 1;
                        }
                    }, [dialouges[talkingTo][dialougeLayer.toString()].canSay[i][0], 20])
                }
            }
            fill(0, 0, 0);
            textAlign("center");
            text("Base", canvas.width/2 - cos(atan2(player.y - 15, player.x - 95)) * 400, canvas.height/2 - sin(atan2(player.y - 15, player.x - 195)) * 400, 15)
            text("Desert Dungeon", canvas.width/2 - cos(atan2(player.y - 0, player.x + 18550)) * 400, canvas.height/2 - sin(atan2(player.y - 0, player.x + 18550)) * 400 + 7.5, 15)
            text("Snow Dungeon", canvas.width/2 - cos(atan2(player.y - 0, player.x - 16550)) * 400, canvas.height/2 - sin(atan2(player.y - 0, player.x - 16550)) * 400 + 7.5, 15)
        break;
        case "shop":
            button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                if(gems >= 100) {
                    changeGems(-100);
                    popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    bandagesT1+=1;
                }
            }, ["Bandage Tier 1 [100 Gems]", 20]);
            button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                if(gems >= 100) {
                    changeGems(-100)
                    popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    manaPotionT1+=1;
                }
            }, ["Mana Potion Tier 1 [100 Gems]", 20]);
            if(owns[4] == "0") {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 5000) {
                        changeGems(-5000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "bronze armor";
                        player.armorPoints = 20;
                        owns[4] = "1";
                    }
                }, ["Bronze Armor [10000]", 20]);
            } else {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "bronze armor";
                    player.armorPoints = 20;
                }, ["Bronze Armor [OWNED]", 20]);
            }
            if(owns[5] == "0") {
                button(20 + canvas.width/2, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 10000) {
                        changeGems(-10000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "iron armor";
                        player.armorPoints = 100;
                        owns[4] = "1";
                    }
                }, ["Iron Armor [40000]", 20]);
            } else {
                button(20 + canvas.width/2, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "iron armor";
                    player.armorPoints = 100;
                }, ["Iron Armor [OWNED]", 20]);
            }
            if(owns[5] == "0") {
                button(20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 80000) {
                        changeGems(-80000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "gold armor";
                        player.armorPoints = 400;
                        owns[4] = "1";
                    }
                }, ["Gold Armor [80000]", 20]);
            } else {
                button(20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "gold armor";
                    player.armorPoints = 400;
                }, ["Gold Armor [OWNED]", 20]);
            }
            if(owns[6] == "0") {
                button(canvas.width/2 + 20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 100000) {
                        changeGems(-100000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "diamond armor";
                        player.armorPoint = 1000;
                        owns[5] = "1"
                    }
                }, ["Diamond Armor [200000]", 20]);
            } else {
                button(canvas.width/2 + 20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "diamond armor";
                    player.armorPoint = 1000;
                }, ["Diamond Armor [OWNED]", 20]);
            }
            button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure"
                buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "enchant":
            if(player.atkE.substring(0, 7) == "minigun") {
                if(player.atkE === "minigun") {
                    button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 7500) {
                            changeGems(-7500)
                            popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.atkE = "minigun2";
                            player.reload = 5;
                            buy.play();
                        }
                    }, ["Minigun Upgrade Lv. 2 [7500 Gems]", 20]);
                } else if(player.atkE === "minigun2") {
                    button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 25000) {
                            changeGems(-25000)
                            popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.atkE = "minigun3";
                            player.reload = 5;
                            buy.play();
                        }
                    }, ["Minigun Upgrade Lv. 3 [25000 Gems]", 20]);
                } else if(player.atkE === "minigun3") {
                    button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 40000) {
                            changeGems(-40000)
                            popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.atkE = "minigun4";
                            player.reload = 5;
                            buy.play();
                        }
                    }, ["Minigun Upgrade Lv. 4 [40000 Gems]", 20]);
                } else if(player.atkE === "minigun4") {
                    button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.atkE = "minigun4";
                        player.reload = 5;
                        buy.play();
                    }, ["Minigun Upgrade Lv. 4 [OWNED]", 20]);
                }
            } else {
                button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 5000) {
                        changeGems(-5000)
                        popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.atkE = "minigun";
                        player.reload = 5;
                        buy.play();
                    }
                }, ["Minigun Upgrade Lv. 1 [5000 Gems]", 20]);
            }
            if(player.inventory[1].substring(0, 14) === "Ring of Slimes") {
                if(player.inventory[1] === "Ring of Slimes Lv. 1") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 10000) {
                            changeGems(-10000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 2";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 2 [10000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 2") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 15000) {
                            changeGems(-15000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 3";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 3 [15000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 3") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 20000) {
                            changeGems(-20000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 4";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 4 [20000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 4") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        buy.play();
                    }, ["Ring of Slimes [MAXED]", 20]);
                }
            } else {
                button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 5000) {
                        changeGems(-5000)
                        popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.inventory[1] = "Ring of Slimes Lv. 1";
                        buy.play();
                    }
                }, ["Ring of Slimes Lv. 1 [5000 Gems]", 20]);
            }
            if(owns[2] == "0") {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 10000) {
                        changeGems(-10000);
                        popUps.push(new popUp("Enchant Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.enchant = ["lifesteal"];
                        buy.play();
                        owns[2] = "1"
                    }
                }, ["Life Steal Enchant [10000 Gems]", 20]);
            } else {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Enchant Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.enchant = ["lifesteal"];
                    buy.play();
                }, ["Life Steal Enchant [OWNED]", 20]);
            }
            if(owns[3] == "0") {
                button(canvas.width/2 + 20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 20000) {
                        changeGems(-20000)
                        popUps.push(new popUp("Enchant Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.enchant = ["fire", 100, 0.1];
                        buy.play();
                        owns[3] = "1"
                    }
                }, ["Fire Enchant [20000 Gems]", 20]);
            } else {
                button(canvas.width/2 + 20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Enchant Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.enchant = ["fire", 100, 0.1];
                    buy.play();
                }, ["Fire Enchant [OWNED]", 20]);
            }
            button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure"
                buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "swordShop":
            if(owns[0] == "0") {
                button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 2000) {
                        gems-=2000;
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 5;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120];
                        player.wepon = "Long Sword"
                        changeGems(-2000)
                        player.inventory[0] = "Long Sword"
                        buy.play();
                        owns[0] = "1";
                    }
                }, ["Long Sword [2000 Gems]", 20]);
            } else {
                button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 5;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120];
                    player.wepon = "Long Sword"
                    player.inventory[0] = "Long Sword"
                    buy.play();
                }, ["Long Sword [OWNED]", 20]);
            }
            if(owns[1] == "0") {
                button(20 + canvas.width/2, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 20000) {
                        changeGems(-20000)
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 10;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];
                        player.wepon = "Dragon Slayer"
                        player.inventory[0] = "Dragon Slayer"
                        buy.play();
                        owns[1] = "1";
                    }
                }, ["Dragon Slayer [20000 Gems]", 20]);
            } else {
                button(20 + canvas.width/2, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 10;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];
                    player.wepon = "Dragon Slayer"
                    player.inventory[0] = "Dragon Slayer"
                    buy.play();
                }, ["Dragon Slayer [OWNED]", 20]);
            }
             button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure";
                 buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "doungen1":
            if(player.x > -3400 && player.y > -720 && player.x < -1700 && player.y < 880 || player.x > -1980 && player.y > -140 && player.x < -300 && player.y < 160 || player.x > -400 && player.y > -320 && player.x < 480 && player.y < 480) {
                    
            } else {
                player.hp = -1;
            }
            fill(40, 40, 40);
            rect(0, 0, canvas.width, canvas.height);
            fill(60, 60, 60);
            rect(-400 - cam.x, -400 - cam.y, 800, 160);
            rect(-400 - cam.x, 400 - cam.y, 800, 160)
            rect(400 - cam.x, -400 - cam.y, 160, 880)
            rect(-480 - cam.x, -400 - cam.y, 160, 340)
            rect(-480 - cam.x, 80 - cam.y, 160, 480)
            
            rect(-1880 - cam.x, -230 - cam.y, 1400, 160);
            rect(-1880 - cam.x, 90 - cam.y, 1400, 160)

            rect(-3400 - cam.x, -800 - cam.y, 1520, 160);
            rect(-3400 - cam.x, 800 - cam.y, 1600, 160);
            rect(-3480 - cam.x, -800 - cam.y, 160, 1720);
            rect(-1880 - cam.x, -800 - cam.y, 160, 740);
            rect(-1880 - cam.x, 80 - cam.y, 160, 800);
            collideRect(-3400, -800, 1520, 160, player);
            collideRect(-3400, 800, 1600, 160, player);
            collideRect(-3480, -800, 160, 1720, player);
            collideRect(-1880, -800, 160, 740, player);
            collideRect(-1880, 80, 160, 800, player);
            
            collideRect(-400, -400, 800, 160, player);
            collideRect(-400, 400, 800, 160, player);
            collideRect(400, -400, 160, 880, player);
            collideRect(-480, -400, 160, 340, player);
            collideRect(-480, 80, 160, 480, player);
            
            collideRect(-1880, -230, 1400, 160, player);
            collideRect(-1880, 90, 1400, 160, player);
            textAlign("center");
            for(var i = 0; i < dNpcs.length; i+=1) {
                if(dNpcs[i].x - cam.x >= -dNpcs[i].size && dNpcs[i].y - cam.y >= -dNpcs[i].size && dNpcs[i].x - cam.x <= canvas.width + dNpcs[i].size && dNpcs[i].y - cam.y <= canvas.height + dNpcs[i].size) {
                    dNpcs[i].draw();
                }
                dNpcs[i].update();
                if(dNpcs[i].x > -3400 && dNpcs[i].y > -720 && dNpcs[i].x < -1700 && dNpcs[i].y < 880 || dNpcs[i].x > -1980 && dNpcs[i].y > -140 && dNpcs[i].x < -300 && dNpcs[i].y < 160 || dNpcs[i].x > -400 && dNpcs[i].y > -320 && dNpcs[i].x < 480 && dNpcs[i].y < 480) {
                    
                } else {
                    dNpcs[i].hp = -1;
                }
                for(var j = 0; j < dNpcs.length; j+=1) {
                    if(i !== j) {
                        dNpcs[i].collide(dNpcs[j], i, j)
                    }
                }
                collideRect(-3400, -800, 1520, 160, dNpcs[i]);
            collideRect(-3400, 800, 1600, 160, dNpcs[i]);
            collideRect(-3480, -800, 160, 1720, dNpcs[i]);
            collideRect(-1880, -800, 160, 740, dNpcs[i]);
            collideRect(-1880, 80, 160, 800, dNpcs[i]);
            
            collideRect(-400, -400, 800, 160, dNpcs[i]);
            collideRect(-400, 400, 800, 160, dNpcs[i]);
            collideRect(400, -400, 160, 880, dNpcs[i]);
            collideRect(-480, -400, 160, 340, dNpcs[i]);
            collideRect(-480, 80, 160, 480, dNpcs[i]);
            
            collideRect(-1880, -230, 1400, 160, dNpcs[i]);
            collideRect(-1880, 90, 1400, 160, dNpcs[i]);
                if(dNpcs[i].hp <= 0) {
                    if(dNpcs[i].playerHit >= 0) {
                        changeGems(dNpcs[i].gems);
                        if(dNpcs[i].team === "enemy") {
                            player.exp+=dNpcs[i].exp;
                        }
                    }
                    dNpcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                for(var j = 0; j < dNpcs.length; j+=1) {
                    projectiles[i].collide(dNpcs[j])
                }
                projectiles[i].collide(player);
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(eD <= 0) {
                player.x = 16550;
                player.y = 0;
                popUps.push(new popUp("Doungen Cleared [+50000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                changeGems(50000);
                player.exp+=1000;
                scene = "adventure"
            }
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
                scene = "adventure"
            }
        break;
        case "doungen2":
            if(player.x > -3400 && player.y > -720 && player.x < -1700 && player.y < 880 || player.x > -1980 && player.y > -140 && player.x < -300 && player.y < 160 || player.x > -400 && player.y > -320 && player.x < 480 && player.y < 480) {
                    
            } else {
                player.hp = -1;
            }
            fill(40, 40, 40);
            rect(0, 0, canvas.width, canvas.height);
            fill(60, 60, 60);
            rect(-400 - cam.x, -400 - cam.y, 800, 160);
            rect(-400 - cam.x, 400 - cam.y, 800, 160)
            rect(400 - cam.x, -400 - cam.y, 160, 880)
            rect(-480 - cam.x, -400 - cam.y, 160, 340)
            rect(-480 - cam.x, 80 - cam.y, 160, 480)
            
            rect(-1880 - cam.x, -230 - cam.y, 1400, 160);
            rect(-1880 - cam.x, 90 - cam.y, 1400, 160)

            rect(-3400 - cam.x, -800 - cam.y, 1520, 160);
            rect(-3400 - cam.x, 800 - cam.y, 1600, 160);
            rect(-3480 - cam.x, -800 - cam.y, 160, 1720);
            rect(-1880 - cam.x, -800 - cam.y, 160, 740);
            rect(-1880 - cam.x, 80 - cam.y, 160, 800);
            collideRect(-3400, -800, 1520, 160, player);
            collideRect(-3400, 800, 1600, 160, player);
            collideRect(-3480, -800, 160, 1720, player);
            collideRect(-1880, -800, 160, 740, player);
            collideRect(-1880, 80, 160, 800, player);
            
            collideRect(-400, -400, 800, 160, player);
            collideRect(-400, 400, 800, 160, player);
            collideRect(400, -400, 160, 880, player);
            collideRect(-480, -400, 160, 340, player);
            collideRect(-480, 80, 160, 480, player);
            
            collideRect(-1880, -230, 1400, 160, player);
            collideRect(-1880, 90, 1400, 160, player);
            textAlign("center");
            for(var i = 0; i < dNpcs.length; i+=1) {
                if(dNpcs[i].x - cam.x >= -dNpcs[i].size && dNpcs[i].y - cam.y >= -dNpcs[i].size && dNpcs[i].x - cam.x <= canvas.width + dNpcs[i].size && dNpcs[i].y - cam.y <= canvas.height + dNpcs[i].size) {
                    dNpcs[i].draw();
                }
                dNpcs[i].update();
                if(dNpcs[i].x > -3400 && dNpcs[i].y > -720 && dNpcs[i].x < -1700 && dNpcs[i].y < 880 || dNpcs[i].x > -1980 && dNpcs[i].y > -140 && dNpcs[i].x < -300 && dNpcs[i].y < 160 || dNpcs[i].x > -400 && dNpcs[i].y > -320 && dNpcs[i].x < 480 && dNpcs[i].y < 480) {
                    
                } else {
                    dNpcs[i].hp = -1;
                }
                for(var j = 0; j < dNpcs.length; j+=1) {
                    if(i !== j) {
                        dNpcs[i].collide(dNpcs[j], i, j)
                    }
                }
                collideRect(-3400, -800, 1520, 160, dNpcs[i]);
            collideRect(-3400, 800, 1600, 160, dNpcs[i]);
            collideRect(-3480, -800, 160, 1720, dNpcs[i]);
            collideRect(-1880, -800, 160, 740, dNpcs[i]);
            collideRect(-1880, 80, 160, 800, dNpcs[i]);
            
            collideRect(-400, -400, 800, 160, dNpcs[i]);
            collideRect(-400, 400, 800, 160, dNpcs[i]);
            collideRect(400, -400, 160, 880, dNpcs[i]);
            collideRect(-480, -400, 160, 340, dNpcs[i]);
            collideRect(-480, 80, 160, 480, dNpcs[i]);
            
            collideRect(-1880, -230, 1400, 160, dNpcs[i]);
            collideRect(-1880, 90, 1400, 160, dNpcs[i]);
                if(dNpcs[i].hp <= 0) {
                    if(dNpcs[i].playerHit >= 0) {
                        changeGems(dNpcs[i].gems);
                        if(dNpcs[i].team === "enemy") {
                            player.exp+=dNpcs[i].exp;
                        }
                    }
                    dNpcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                for(var j = 0; j < dNpcs.length; j+=1) {
                    projectiles[i].collide(dNpcs[j])
                }
                projectiles[i].collide(player);
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(eD <= 0) {
                player.x = 16550;
                player.y = 0;
                popUps.push(new popUp("Doungen Cleared [+50000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                changeGems(50000);
                player.exp+=1000;
                scene = "adventure"
            }
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
                scene = "adventure"
            }
        break;
    }
    clicked = false;
    gemCounter = lerp(gemCounter, gems, 0.05);
    fill(10, 5, 7);
    textAlign("left");
    text("Gems: " + round(gemCounter) + " Lvl: " + round(player.upgrades), 10, 35, 20);
    text("Quest: " + quest, 10, 55, 20);
    text("Position: " + round(player.x) + ", " + round(player.y), 10, 75, 20)
    text("Base Position: 195, 15", 10, 95, 20);
    if(keys[66] && itemCoolDown <= 0) {
        if(bandageT1 > 0) {
            player.hp+=100;
            bandagesT1-=1;
            player.hp = constrain(player.hp, -1, player.maxHp)
            itemCoolDown = 100;
        }
    }
    if(keys[77] && itemCoolDown <= 0) {
        if(manaPotionT1 > 0) {
            player.mana+=100;
            manaPotionT1-=1;
            player.mana = constrain(player.mana, -1, player.maxMana)
            itemCoolDown = 100;
        }
    }
    if(frameCount % 500 === 0) {
        localStorage.setItem("x", parseInt(player.x));
        localStorage.setItem("y", parseInt(player.y));       
        localStorage.setItem("hp", parseInt(player.hp));
        localStorage.setItem("maxHp", parseInt(player.maxHp));
        localStorage.setItem("mana", parseInt(player.mana));
        localStorage.setItem("maxMana", parseInt(player.maxMana));
        localStorage.setItem("manaRegen", parseInt(player.manaRegen));
        localStorage.setItem("maxStamina", parseInt(player.maxStamina));
        localStorage.setItem("staminaRegen", parseInt(player.staminaRegen));
        localStorage.setItem("lvl", parseInt(player.lvl));
        localStorage.setItem("exp", parseInt(player.exp));
        localStorage.setItem("strength", parseInt(player.strength));
        localStorage.setItem("hpRegen", parseInt(player.hpRegen));
        localStorage.setItem("atkE", player.atkE);
        localStorage.setItem("spd", player.spd);
        localStorage.setItem("bandagesT1", bandagesT1);
        localStorage.setItem("manaPotionT1", manaPotionT1)
        localStorage.setItem("enchant", player.enchant);
        localStorage.setItem("weponDamage", player.weponDamage);
        localStorage.setItem("wepon", player.wepon);
        localStorage.setItem("atkE", player.atkE)
        localStorage.setItem("reload", player.reload)
        localStorage.setItem("weponCollision", player.weponCollision);
        localStorage.setItem("armor", player.armor);
        localStorage.setItem("armorPoint", player.armorPoint)
        localStorage.setItem("inventory", player.inventory);
        localStorage.setItem("upgrades", player.upgrades);
        localStorage.setItem("upgradeOn", player.upgradeOn)
        localStorage.setItem("owned", owns)
    }
    slimes = 0;
    Goblins = 0;
    orcs = 0;
    elves = 0;
    yetis = 0;
    ghosts = 0;
    allySlimes = 0;
    GoblinBoss = 0;
    rockPeople = 0;
    rockGiant = 0;
    snowmen = 0;
    swordElves = 0;
    itemCoolDown-=1;
    frameCount+=1;
    eD = 0;
};
start();
