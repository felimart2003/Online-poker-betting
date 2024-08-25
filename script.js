let players = [];
let pot = 0;

function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        const player = {
            name: playerName,
            chips: 1000 // Starting chips
        };
        players.push(player);
        updatePlayerList();
        updateBetPlayerSelect();
        document.getElementById('playerName').value = '';
        document.getElementById('gameArea').style.display = 'block';
    }
}

function updatePlayerList() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.chips} chips`;
        playerList.appendChild(li);
    });
}

function updateBetPlayerSelect() {
    const betPlayer = document.getElementById('betPlayer');
    betPlayer.innerHTML = '';
    players.forEach((player, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = player.name;
        betPlayer.appendChild(option);
    });
}

function placeBet() {
    const playerIndex = document.getElementById('betPlayer').value;
    const betAmount = parseInt(document.getElementById('betAmount').value);
    
    if (playerIndex !== '' && !isNaN(betAmount) && betAmount > 0) {
        const player = players[playerIndex];
        if (player.chips >= betAmount) {
            player.chips -= betAmount;
            pot += betAmount;
            updatePlayerList();
            updatePot();
            document.getElementById('betAmount').value = '';
        } else {
            alert('Not enough chips!');
        }
    }
}

function updatePot() {
    document.getElementById('potAmount').textContent = pot;
}