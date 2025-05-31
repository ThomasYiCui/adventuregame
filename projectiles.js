
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
    if(this.type == "decayParticle" || "fireParticle1" || "fireParticle2" || "fireParticle3") {
        this.spd+=random(-0.1, 0.1);
    }
    
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
    } else if(this.type == "decayParticle") {
        stroke(0, 0, 0, this.life/130);
        strokeWeight(3);
        line(this.x - cam.x + random(-20, 20), this.y - cam.y + random(-20, 20), this.x - cam.x + random(-20, 20), this.y - cam.y + random(-20, 20))
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
        fill(250, 250, 100, this.life/400);
        ellipse(this.x - cam.x, this.y - cam.y, this.size - this.life/250, this.size - this.life/250, 0);
    } else if(this.type == "elf arrow") {
        stroke(0, 0, 0);
        strokeWeight(5);
        line(this.x - cam.x - cos(this.r) * this.size/2, this.y - cam.y - sin(this.r) * this.size/2, this.x - cam.x + cos(this.r) * this.size/2, this.y - cam.y + sin(this.r) * this.size/2);
    } else if(this.type == "arrow") {
        stroke(0, 0, 0);
        strokeWeight(5);
        line(this.x - cam.x - cos(this.r) * this.size/2, this.y - cam.y - sin(this.r) * this.size/2, this.x - cam.x + cos(this.r) * this.size/2, this.y - cam.y + sin(this.r) * this.size/2);
    } else if(this.type == "Blue") {
        fill(0, 0, 250, 0.7);
        ellipse(this.x - cam.x, this.y - cam.y, 100 * Math.min(1, (2000 - this.life)/200), 100 * Math.min(1, (2000 - this.life)/200), 0);
        fill(0, 0, 255, 0.8);
        ellipse(this.x - cam.x, this.y - cam.y, 70 * Math.min(1, (2000 - this.life)/200), 70 * Math.min(1, (2000 - this.life)/200), 0);
        fill(0, 0, 255, 0.9);
        ellipse(this.x - cam.x, this.y - cam.y, 40 * Math.min(1, (2000 - this.life)/200), 40 * Math.min(1, (2000 - this.life)/200), 0);
    } else if(this.type == "Red") {
        fill(250, 0, 0, 0.6);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        stroke(250, 0, 0, 1)
        eEllipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0)
    } else if(this.type == "Purple") {
        fill(153, 51, 255, 0.7);
        ellipse(this.x - cam.x, this.y - cam.y, 150 * Math.min(1, (300 - this.life)/50), 150 * Math.min(1, (300 - this.life)/50), 0);
        fill(153, 51, 255, 0.8);
        ellipse(this.x - cam.x, this.y - cam.y, 120 * Math.min(1, (300 - this.life)/50), 120 * Math.min(1, (300 - this.life)/50), 0);
        fill(153, 51, 255, 0.9);
        ellipse(this.x - cam.x, this.y - cam.y, 100 * Math.min(1, (300 - this.life)/50), 100 * Math.min(1, (300 - this.life)/50), 0);
    }
};
projectile.prototype.update = function() {
    this.x+=cos(this.r) * this.spd;
    this.y+=sin(this.r) * this.spd;
    if(this.type === "Blue") {
      this.r+=Math.round(this.life/3500)/(10.8 + ((2001 - this.life)/12))
    } else if(this.type === "Red") {
      this.size+=0.5
      if(this.life <= 100) {
        this.size+=20;
      }
    }
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
  if(this.type === "Blue") {
    if(dist(t.x, t.y, this.x, this.y) < 100 + t.size) {
      t.hp-=1000
    }
  }
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
                if((this.effects[i][0] == "lightningS" || this.effects[i][0] == "lightning") && player.mana >= 50) {
                    player.mana-=50;
                    stroke(50, 100, 255, 200);
                    strokeWeight(10);
                    line(t.x - cam.x, t.y - cam.y, this.x - cam.x, this.y - cam.y);
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
