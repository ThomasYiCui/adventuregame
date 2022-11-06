// npc function
function npc(x, y, type, team) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.team = team;
    this.lastAttack = 0;
    this.aX = 0;
    this.aY = 0;
    this.rChange = random(-1.5, 1.5);
    this.effects = [];
    this.closest = [this.x + 0.43, this.y + 0.56, 0];
    switch(this.type) {
        case "Slime Lv. 1":
            this.hp = 40;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 15;
            this.size = 15;
            this.reload = 50;
            this.spd = 4.8;
            this.range = 500;
            this.atkRange = 50;
            this.exp = 10;
            this.weight = 0.95;
            this.jumpCool = 100;
            this.knockBack = 3;
            this.gems = 19;
            this.blockChance = 0;
        break;
        case "Slime Lv. 2":
            this.hp = 120;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 40;
            this.size = 25;
            this.reload = 25;
            this.spd = 9.6;
            this.range = 1000;
            this.atkRange = 90;
            this.exp = 40;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 1;
        break;
        case "Slime Lv. 3":
            this.hp = 240;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 80;
            this.size = 25;
            this.reload = 25;
            this.spd = 9.6;
            this.range = 1000;
            this.atkRange = 100;
            this.exp = 40;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 2;
        break;
        case "KingSlime Lv. 1":
            this.hp = 800;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 100;
            this.size = 40;
            this.reload = 40;
            this.spd = 14.4;
            this.range = 1200;
            this.atkRange = 100;
            this.exp = 80;
            this.weight = 0.93;
            this.jumpCool = 80;
            this.knockBack = 12;
            this.gems = 69;
            this.blockChance = 3;
        break;
        case "Rock Giant Lv. 1":
            this.hp = 15000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 30000;
            this.size = 60;
            this.reload = 320;
            this.spd = 4;
            this.range = 1000;
            this.atkRange = 160;
            this.exp = 200;
            this.weight = 0.98;
            this.jumpCool = 80;
            this.knockBack = 20;
            this.gems = 1213;
            this.blockChance = 50;
        break;
        case "Rock Person Lv. 1":
            this.hp = 5000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 4800;
            this.size = 30;
            this.reload = 80;
            this.spd = 2;
            this.range = 1000;
            this.atkRange = 140;
            this.exp = 200;
            this.weight = 0.98;
            this.jumpCool = 80;
            this.knockBack = 10;
            this.gems = 152;
            this.blockChance = 25;
        break;
        case "ghost":
            this.hp = 3200;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 1480;
            this.size = 25;
            this.reload = 15;
            this.spd = 4.8;
            this.range = 900;
            this.atkRange = 90;
            this.exp = 100;
            this.weight = 0.99;
            this.knockBack = 6;
            this.gems = 2028;
            this.blockChance = 10;
        break;
        case "Goblin":
            /**
            this.hp = 1000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 600;
            this.size = 20;
            this.reload = 30;
            this.spd = 4.8;
            this.range = 800;
            this.atkRange = 70;
            this.exp = 40;
            this.weight = 0.99;
            this.knockBack = 6;
            this.gems = 20;
            **/
            this.hp = 200;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 120;
            this.size = 20;
            this.reload = 30
            this.spd = 1.9;
            this.range = 3200;
            this.atkRange = 70;
            this.exp = 40;
            this.weight = 0.99;
            this.knockBack = 6;
            this.gems = 21;
            this.blockChance = 15;
        break;
        case "Dungeon Goblin":
            this.hp = 3200;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 4640;
            this.size = 20;
            this.reload = 25
            this.spd = 2.3;
            this.range = 800;
            this.atkRange = 80;
            this.exp = 50;
            this.weight = 0.98;
            this.knockBack = 9;
            this.gems = 56;
            this.blockChance = 20;
        break;
        case "Dungeon Goblin Boss":
            this.hp = 8880;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 9680;
            this.size = 40;
            this.reload = 25
            this.spd = 5.3;
            this.range = 800;
            this.atkRange = 80;
            this.exp = 50;
            this.weight = 0.98;
            this.knockBack = 9;
            this.gems = 33;
            this.daggerR = 100;
            this.blockChance = 70;
        break;
        case "Dungeon Yeti Boss":
            this.hp = 50000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 100000;
            this.size = 65;
            this.reload = 100;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 200;
            this.knockBack = 18;
            this.exp = 175;
            this.weight = 0.99;
            this.gems = 2612;
            this.blockChance = 50;
        break;
        case "Dungeon Yeti":
            this.hp = 10000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 26000;
            this.size = 40;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 175;
            this.weight = 0.99;
            this.gems = 2612;
            this.blockChance = 50;
        break;
        case "Dungeon Snowman":
            this.hp = 5000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "snowball2";
            this.size = 25;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 175;
            this.weight = 0.99;
            this.gems = 412;
            this.blockChance = 10;
        break;
        case "GoblinBoss":
            this.hp = 600;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 100;
            this.size = 40;
            this.reload = 100;
            this.spd = 3.2;
            this.range = 700;
            this.atkRange = 90;
            this.exp = 900;
            this.knockBack = 15;
            this.weight = 0.99;
            this.gems = 132;
            this.blockChance = 30;
        break;
        case "Orc":
            this.hp = 2000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 1200;
            this.size = 25;
            this.reload = 40;
            this.spd = 3;
            this.range = 3200;
            this.atkRange = 100;
            this.exp = 30;
            this.weight = 0.99;
            this.knockBack = 9;
            this.gems = 83;
            this.blockChance = 30;
        break;
        case "Soldier":
            this.hp = 200;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = 50;
            this.size = 25;
            this.reload = 100;
            this.spd = 2;
            this.range = 600;
            this.atkRange = 50;
            this.knockBack = 5;
            this.exp = 0;
            this.weight = 0;
            this.gems = 0;
            this.blockChance = 40;
        break;
        case "Yeti":
            this.hp = 4000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 6000;
            this.size = 30;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 175;
            this.weight = 0.99;
            this.gems = 2612;
            this.blockChance = 5;
        break;
        case "Snowman":
            this.hp = 2000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "snowball";
            this.size = 20;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 175;
            this.weight = 0.99;
            this.gems = 412;
            this.blockChance = 1;
            this.accruacy = 0.1;
        break;
        case "Elf":
            this.hp = 5000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "elf arrow";
            this.size = 25;
            this.reload = 260;
            this.spd = 2;
            this.range = 1800;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 350;
            this.weight = 0.9;
            this.gems = 812;
            this.blockChance = 1;
            this.accruacy = 0.01;
        break;
    }
    this.player = player;
    this.playerHit = 0;
};
npc.prototype.draw = function() {
    if(this.player == undefined) {
        this.player = player;
    }
    if(this.type == "Slime Lv. 1" || this.type == "KingSlime Lv. 1" || this.type === "Slime Lv. 2") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + this.size/2 + 3, this.size + 3, this.size * 1.6 + 5, -Math.PI, 0);
        if(this.team === "enemy") {
            fill(255, 0, 0, 0.7);
        } else {
            fill(0, 0, 255, 0.7);
        }
        arc(round(this.x - cam.x), round(this.y - cam.y + this.size/2, 0, 40), this.size, this.size * 1.6, -Math.PI, 0);
    } else if(this.type === "Slime Lv. 3") {
        fill(30, 30, 30);
        arc(this.x - cam.x, this.y - cam.y + this.size/2 + 3, this.size + 3, this.size * 1.6 + 5, -Math.PI, 0);
        if(this.team === "enemy") {
            fill(255, 0, 0, 0.7);
        } else {
            fill(0, 0, 255, 0.7);
        }
        arc(round(this.x - cam.x), round(this.y - cam.y + this.size/2, 0, 40), this.size, this.size * 1.6, -Math.PI, 0);
    } else if(this.type == "Goblin" || this.type === "GoblinBoss") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(0, 200, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Dungeon Goblin") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(50, 170, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Dungeon Goblin Boss") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(50, 170, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Dungeon Yeti Boss") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 230);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Orc") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 50, 20);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Rock Giant Lv. 1" || this.type === "Rock Person Lv. 1") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(100, 100, 100);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "ghost") {
        fill(250, 250, 250, 0.1);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        stroke(0, 0, 0, 0.1);
        strokeWeight(3);
        eEllipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
    } else if(this.type == "Soldier") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + cos(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2 + sin(atan2(this.player.y - this.y, this.player.x - this.x) + 1 + this.rChange) * (this.size) * 3);
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(0, 0, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Yeti") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        stroke(0, 0, 0);
        
    } else if(this.type == "Snowman") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type == "Elf") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(0, 200, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        stroke(135, 83, 0);
        strokeWeight(5);
        fill(0, 0, 0, 0)
        eArc(this.x - cam.x + cos(atan2(player.y - this.y, player.x - this.x)) * 20, this.y - cam.y + sin(atan2(player.y - this.y, player.x - this.x)) * 20, this.size, this.size, -Math.PI/2 + atan2(player.y - this.y, player.x - this.x), Math.PI/2 + atan2(player.y - this.y, player.x - this.x));
    } else if(this.type == "Dungeon Yeti") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(atan2(this.player.y - this.y, this.player.x - this.x) + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        stroke(0, 0, 0);
        
    } else if(this.type == "Dungeon Snowman") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    }
    if(this.type == "Dungeon Goblin Boss") {
        fill(0, 0, 0);
        rect(7, 37, canvas.width - 14, 15);
        textAlign("center");
        text("Charlie leader of the Goblins", canvas.width/2, 25, 30)
        fill(255, 0, 0);
        rect(10, 40, canvas.width - 20, 9);
        fill(0, 255, 0)
        rect(10, 40, (this.hp/this.maxHp) * (canvas.width - 20), 9);
    } else if(this.type == "Dungeon Yeti Boss") {
        fill(0, 0, 0);
        rect(7, 37, canvas.width - 14, 15);
        textAlign("center");
        text("Timothy leader of the Yetis", canvas.width/2, 25, 30)
        fill(255, 0, 0);
        rect(10, 40, canvas.width - 20, 9);
        fill(0, 255, 0)
        rect(10, 40, (this.hp/this.maxHp) * (canvas.width - 20), 9);
        if(this.daggerR <= 0) {
            var r = atan2(this.y - player.y, this.x - player.x);
            projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(0.1, 0.1), "fireBall 1", "enemy"));
            this.daggerR = 100;
        }
        this.daggerR-=1;
    } else {
        textAlign("center");
        fill(0, 0, 0);
        rect(this.x - cam.x - this.size - 2, this.y - cam.y + this.size + 3, this.size * 2 + 4, 9)
        text(this.type, this.x - cam.x, this.y - cam.y - this.size - 10, 20)
        fill(255, 0, 0);
        rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 5, this.size * 2, 5)
        fill(0, 255, 0)
        rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 5, (this.hp/this.maxHp) * (this.size * 2), 5);
    }
};
npc.prototype.update = function() {
    this.x+=this.aX;
    this.y+=this.aY;
    this.aX*=this.weight;
    this.aY*=this.weight;
    if(frameCount % round(random(100, 3000)) == 0) {
        this.rChange = random(1.5, -1.5)
    }
    if(dist(this.x, this.y, this.player.x, this.player.y) < this.range) {
        if(dist(this.x, this.y, this.player.x, this.player.y) < this.closest[2]) {
            this.closest[0] = this.player.x;
            this.closest[1] = this.player.y;
            this.closest[2] = dist(this.x, this.y, this.player.x, this.player.y)
        }
        if(frameCount % 100 === 0) {
            this.closest[0] = this.player.x + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50));
            this.closest[1] = this.player.y + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50))
        }
        if(this.team !== "ally") {
            if(this.dmgWay == "hit") {
                if(dist(this.x, this.y, this.player.x, this.player.y) < this.atkRange && this.lastAttack <= 0) {
                    this.player.hp-=this.dmg;
                    this.lastAttack = this.reload;
                    var r = atan2(this.y - this.player.y, this.x - this.player.x);
                    this.player.aX = -cos(r) * this.knockBack;
                    this.player.aY = -sin(r) * this.knockBack;
                } 
            } else if(this.dmgWay == "shoot") {
                if(this.lastAttack <= 0) {
                    var r = atan2(this.y - player.y, this.x - player.x);
                    projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(this.accruacy, -this.accruacy), this.dmg, this.team));
                    this.lastAttack = this.reload;
                }
            }
        }
    }
    if(dist(this.x, this.y, player.x, player.y) < this.range) {
        if(dist(this.x, this.y, this.player.x, this.player.y) < this.closest[2]) {
            this.closest[0] = player.x;
            this.closest[1] = player.y;
            this.closest[2] = dist(this.x, this.y, player.x, player.y)
        }
        if(frameCount % 100 === 0) {
            this.closest[0] = player.x + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50));
            this.closest[1] = player.y + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50))
        }
        if(this.team !== "ally") {
            if(this.dmgWay === "hit") {
                if(dist(this.x, this.y, player.x, player.y) < this.atkRange && this.lastAttack <= 0) {
                    player.hp-=constrain(this.dmg - player.armorPoint, 1, 9007199250000);
                    this.lastAttack = this.reload;
                    var r = atan2(this.y - player.y, this.x - player.x);
                    player.aX = -cos(r) * this.knockBack;
                    player.aY = -sin(r) * this.knockBack;
                }
            }  else if(this.dmgWay == "shoot") {
                if(this.lastAttack <= 0) {
                    var r = atan2(this.y - player.y - 10, this.x - player.x - 10);
                    projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(-0.1, 0.1) - this.rChange, this.dmg, this.team));
                    this.lastAttack = this.reload;
                }
            }
        }
    }
    if(this.type == "Slime Lv. 1") {
        if(this.team == "enemy") {
            slimes+=1;
        } else if(this.team == "ally") {
            allySlimes+=1
        }
    } else if(this.type == "Slime Lv. 2") {
        if(this.team == "enemy") {
            slimes2+=1;
        } else if(this.team == "ally") {
            allySlimes+=1
        }
    } else if(this.type == "Slime Lv. 3") {
        if(this.team == "enemy") {
            slimes3+=1;
        } else if(this.team == "ally") {
            allySlimes+=1
        }
    } else if(this.type == "Goblin") {
        Goblins+=1;
    } else if(this.type == "GoblinBoss") {
        GoblinBoss+=1;
    } else if(this.type == "ghost") {
        ghosts+=1;
    } else if(this.type == "Zombie") {
        zombies+=1;
    } else if(this.type == "Rock Giant Lv. 1") {
        rockGiants+=1;
    } else if(this.type == "KingSlime Lv. 1") {
        if(this.team == "enemy") {
            kingSlimes+=1;
        } else if(this.team == "ally") {
            allySlimes+=1;
        }
    } else if(this.type == "Rock Person Lv. 1") {
        rockPeople+=1;
    } else if(this.type == "Orc") {
        orcs+=1;
    } else if(this.type == "Yeti") {
        yetis+=1;
    } else if(this.type == "Snowman") {
        snowmen+=1;
    } else if(this.type == "Elf") {
        elves+=1;
    } else if(this.type == "Dungeon Goblin") {
        eD+=1;
    } else if(this.type == "Dungeon Goblin Boss") {
        eD+=1;
    } else if(this.type == "Dungeon Yeti Boss") {
        eD+=1;
    } else if(this.type == "Dungeon Yeti") {
        eD+=1;
    } else if(this.type == "Dungeon Snowman") {
        eD+=1;
    }
    for(var i = 0; i < this.effects.length; i+=1) {
        if(this.effects[i][0] == "fire") {
            this.hp-=this.effects[i][2];
            this.effects[i][1]-=1;
            if(round(random(0, 100)) < 10) {
                var r = random(0, 360);
                projectiles.push(new projectile(this.x + cos(r) * (this.size * 2), this.y + sin(r) * (this.size * 2), r, "fireParticle" + round(random(1, 3)).toString(), "ally"))
            }
            if(this.effects[i][1] <= 0) {
                this.effects.splice(i, 1);
            }
        }
    } 
    if(this.type === "Slime Lv. 1" || this.type === "KingSlime Lv. 1" || this.type === "Slime Lv. 2" || this.type === "Slime Lv. 3" || this.type === "Slime Lv. 4") {
        this.jumpCool-=1;
        if(this.jumpCool <= 0) {
            if(this.closest[0] < this.x || random(0, 100) < 10) {
                this.aX-=this.spd + random(-0.1, 0.1);
            } else if(this.closest[0] > this.x || random(0, 100) < 10) {
                this.aX+=this.spd + random(-0.1, 0.1);
            }
            if(this.closest[1] < this.y || random(0, 100) < 10) {
                this.aY-=this.spd + random(-0.1, 0.1);
            } else if(this.closest[1] > this.y || random(0, 100) < 10) {
                this.aY+=this.spd + random(-0.1, 0.1);
            }
            if(this.type == "Slime Lv. 1") {
                this.jumpCool = 180 + random(-10, 10);
            } else if(this.type === "KingSlime Lv. 1") {
                this.jumpCool = 280 + random(-10, 10);
            } else if(this.type === "Slime Lv. 2") {
                this.jumpCool = 170 + random(-10, 10);
            } else if(this.type === "Slime Lv. 3") {
                this.jumpCool = 160 + random(-10, 10);
            } else if(this.type === "Slime Lv. 2") {
                this.jumpCool = 75 + random(-10, 10);
            }
        }
    } else {
        if(dist(this.x, this.y, this.player.x, this.player.y) < this.range) {
            this.x+=cos(atan2(this.player.y - this.y, this.player.x - this.x) + this.rChange) * this.spd;
            this.y+=sin(atan2(this.player.y - this.y, this.player.x - this.x) + this.rChange) * this.spd;
        }
    }
    if(this.team !== "ally" && player.attacking && player.stamina >= 1 && player.selectedInventory === 0) {
        for(var i = 0; i < player.weponCollision.length; i+=1) {
            if(dist(this.x, this.y, player.x + cos(player.r) * player.weponCollision[i], player.y + sin(player.r) * player.weponCollision[i]) < 10 + this.size/2 + player.weponSpd * 5) {
                var r = atan2(this.y - player.y, this.x - player.x);
                this.hp-=player.weponDamage * (player.strength/100);
                this.playerHit = 100;
                this.aX = cos(r) * 4;
                this.aY = sin(r) * 4;
                if(player.enchant[0] === "lifesteal") {
                    player.hp+=(player.weponDamage * (player.strength/100)) * 0.2 * player.maxHp/1000;
                } else {
                    for(var i = 0; i < this.effects.length; i+=1) {
                        if(player.enchant === this.effects[i]) {
                            break;
                        }
                        this.effects.push(player.enchant);
                    }
                    if(this.effects.length === 0) {
                        this.effects.push(player.enchant);
                    }
                }
                break;
            }
        }
    }
    this.lastAttack-=1;
    this.playerHit-=1;
    this.closest[2] = this.range;
    if(this.player.hp <= 0) {
        this.player = player;
    }
};
npc.prototype.collide = function(n, i, j) {
    if(dist(n.x, n.y, this.x, this.y) < this.range) {
        if(this.team !== n.team) {
            this.player = n;
        }
        if(dist(n.x, n.y, this.x, this.y) < this.size + n.size + 20) {
            if(dist(n.x, n.y, this.x, this.y) < this.size + n.size) {
                n.x+=(n.x - this.x)/15;
                n.y+=(n.y - this.y)/15;
                this.x+=(this.x - this.x)/15;
                this.y+=(this.y - this.y)/15;
            }
            if(this.team !== n.team && dist(n.x, n.y, this.x, this.y) < this.closest[2]) {
                this.closest[2] = dist(n.x, n.y, this.x, this.y);
                this.player = npcs[j];
            }
            if(this.team !== n.team) {
                if(this.lastAttack <= 0 && dist(n.x, n.y, this.x, this.y) < this.atkRange && this.dmgWay == "hit") {
                    var r = atan2(this.y - n.y, this.x - n.x);
                    n.hp-=this.dmg;
                    n.aX = -cos(r) * this.knockBack;
                    n.aY = -sin(r) * this.knockBack;
                    this.lastAttack = this.reload;
                }
                if(n.lastAttack <= 0 && dist(n.x, n.y, this.x, this.y) < n.atkRange && n.dmgWay == "hit") {
                    var r = atan2(this.y - n.y, this.x - n.x);
                    this.hp-=n.dmg;
                    this.aX = cos(r) * n.knockBack;
                    this.aY = sin(r) * n.knockBack;
                    n.lastAttack = n.reload;
                }
            }
        }
    }
};
