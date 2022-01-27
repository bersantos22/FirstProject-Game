class Monster {
    constructor(name, sprite, hp, moves) {
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}


function spawnMonster(bool){

let p = monsterList[Math.floor(Math.random() * monsterList.length)];
    let monster = new Monster(p[0], p[1], p[2], p[3]);

        if (bool) {
        for (let i = 0; i < 4; i++) {
            document.getElementById('m' + i).innerText = monster.moves[i][0];
        }
        }
            return monster;
}

let player1 = spawnMonster(true);
    s1 = document.createElement('img');
    s1.src = player1.sprite;
    document.getElementById('player1').appendChild(s1);
    document.getElementById('hp1').innerHTML= `<p><b>${player1.name} <br> HP: `+ player1.hp + '/' + player1.fullhp + '</b></p>';

let player2 = spawnMonster(false);
    s2 = document.createElement('img');
    s2.src = player2.sprite;
    document.getElementById('player2').appendChild(s2);
    document.getElementById('hp2').innerHTML= `<p><b>${player2.name} <br> HP: `+ player2.hp + '/' + player2.fullhp + '</b></p>';

for(i=0; i< 4;i++){
    let btn = document.getElementById('m'+i);
    let move = player1.moves[i];

    function addHandler(btn, move, player1, player2){
        btn.addEventListener('click', function(e){
            attack(move, player1, player2, 'hp2', '');
            setTimeout(attack,2000, player2.moves[Math.floor(Math.random()*3)], player2, player1, 'hp1',' Foe ');
        });
    }
    addHandler(btn, move, player1, player2);
}

function attack(move, attacker, receiver, hp, owner){
    document.getElementById('comment').innerHTML ='<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>';
    if(Math.random() < move[3]){
        let power = move[2] += Math.floor(Math.random() * 10);
                      let rtype = typeMatch[receiver.name];
                      let mtype = move[1];
                      let scale = 1;

                      for (i = 0; i < rtype.length; i++) {
                          if (rtype[i].includes(mtype)) {
                              switch (i) {
                                  case 0: //imunidade
                                      scale = 0;
                                      setTimeout(function() {
                                          document.getElementById('comment').innerHTML = '<p>It had no effect!</p>';
                                      }, 1000);
                                      break;
                                  case 1: //critical
                                      scale = 2;
                                      setTimeout(function() {
                                          document.getElementById('comment').innerHTML = '<p>It was super effective!</p>';
                                      }, 1000);
                                      break;
                                  case 2: //resistence
                                      scale = 0.5;
                                      setTimeout(function() {
                                          document.getElementById('comment').innerHTML = '<p>It was not very effective!</p>';
                                      }, 1000);
                                      break;
                              }
                              break;
                          }
                      }
                      power *= scale;
                      receiver.hp -= Math.floor(power);
                      document.getElementById(hp).innerHTML = `<p><b> HP: `  + receiver.hp + '/' + receiver.fullhp + '</b></p>';
                  } else {
                      setTimeout(function() {
                          document.getElementById('comment').innerHTML = '<p>Attack missed!</p>';
                      })
                  }
  checkWinner(hp);
}


function checkWinner(hp){
    let f = (player1.hp <=0) ? player1 : (player2.hp <=0)  ? player2: false;
    if (f != false){
        alert('GAME OVER: ' + f.name + ' fainted !');
        document.getElementById(hp).innerHTML = '<p><b>HP:  0/' + f.fullhp + '</b></p>';
        setTimeout(function(){
            location.reload();
        },1500)
    }
}