function retangularCollision({retangle1, retangle2}) {
    return(retangle1.attackBox.position.x + retangle1.attackBox.width >= retangle2.position.x && retangle1.attackBox.position.x <= retangle2.position.x + retangle2.width && retangle1.attackBox.position.y + retangle1.attackBox.height >= retangle2.position.y && retangle1.attackBox.position.y <= retangle2.position.y + retangle2.height)
}

let lastKey 

function determineWinner({player, enemy, timerid}) {
    clearTimeout(timerid)
    document.querySelector('#displaytext').style.display = 'flex'
    if(player.health === enemy.health) {
        document.querySelector('#displaytext').innerHTML = 'Tie'
    } else if(player.health > enemy.health) {
        document.querySelector('#displaytext').innerHTML = 'Player 1 Wins!'
    } else if(enemy.health > player.health) {
        document.querySelector('#displaytext').innerHTML = 'Player 2 Wins!'
    }
}

let timer = 60
let timerid 
function decreaseTimer() {
        if(timer > 0) {
        timerid = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer

    }
    if(timer === 0 ) {
        determineWinner({player, enemy, timerid})
 }
}
