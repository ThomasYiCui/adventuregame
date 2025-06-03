function minigunUpgrade() {
  if(player.spellInventory[1] === "minigun") {
    if(player.spellInventory[2] !== "minigun2") {
        button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
            if(gems >= 2000) {
                changeGems(-2000)
                popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                player.atkE = "minigun2";
                player.spellInventory[2] = "minigun2"
                player.reload = 5;
                buy.play();
            }
        }, ["Minigun Upgrade Lv. 2 [2000 Gems]", 20]);
    } else if(player.spellInventory[3] !== "minigun3") {
        button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
            if(gems >= 25000) {
                changeGems(-25000)
                popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                player.atkE = "minigun3";
                player.spellInventory[3] = "minigun3"
                player.reload = 5;
                buy.play();
            }
        }, ["Minigun Upgrade Lv. 3 [25000 Gems]", 20]);
    } else if(player.spellInventory[4] !== "minigun4") {
        button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
            if(gems >= 80000) {
                changeGems(-80000)
                popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                player.atkE = "minigun4";
                player.spellInventory[4] = "minigun4"
                player.reload = 5;
                buy.play();
            }
        }, ["Minigun Upgrade Lv. 4 [80000 Gems]", 20]);
    } else if(player.spellInventory[4] === "minigun4") {
        button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
            popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
            player.atkE = "minigun4";
            player.reload = 5;
            buy.play();
        }, ["Minigun Upgrade Lv. 4 [OWNED]", 20]);
    }
  } else {
      button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
          if(gems >= 500) {
              changeGems(-500)
              popUps.push(new popUp("Upgrade Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
              player.atkE = "minigun";
              player.spellInventory[1] = "minigun"
              player.reload = 5;
              buy.play();
          }
      }, ["Minigun Upgrade Lv. 1 [500 Gems]", 20]);
  }
}
