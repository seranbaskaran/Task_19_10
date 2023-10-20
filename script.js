let data={
  "data": {
    "teams": {
      "teama": {
        "tid": 7,
        "title": "New Zealand",
        "abbr": "NZ",
        "alt_name": "New Zealand",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "country": "nz",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 46141,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Devon Conway"
          },
          {
            "player_id": 16609,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Will Young"
          },
          {
            "player_id": 1081,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Rachin Ravindra"
          },
          {
            "player_id": 16509,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Daryl Mitchell"
          },
          {
            "player_id": 44185,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK/C)",
            "role": "wk",
            "playing11": true,
            "name": "Tom Latham"
          },
          {
            "player_id": 1082,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Glenn Phillips"
          },
          {
            "player_id": 1708,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Mark Chapman"
          },
          {
            "player_id": 1923,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mitchell Santner"
          },
          {
            "player_id": 486,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Matt Henry"
          },
          {
            "player_id": 16643,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Lockie Ferguson"
          },
          {
            "player_id": 47,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Trent Boult"
          }
        ]
      },
      "teamb": {
        "tid": 498,
        "title": "Afghanistan",
        "abbr": "AFG",
        "alt_name": "Afghanistan",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "country": "af",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 93570,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK)",
            "role": "wk",
            "playing11": true,
            "name": "Rahmanullah Gurbaz"
          },
          {
            "player_id": 45172,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Ibrahim Zadran"
          },
          {
            "player_id": 44977,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Rahmat Shah"
          },
          {
            "player_id": 44991,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(C)",
            "role": "bat",
            "playing11": true,
            "name": "Hashmatullah Shahidi"
          },
          {
            "player_id": 93481,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Azmatullah Omarzai"
          },
          {
            "player_id": 1153,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Ikram Alikhil"
          },
          {
            "player_id": 319,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mohammad Nabi"
          },
          {
            "player_id": 1157,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Rashid Khan"
          },
          {
            "player_id": 93418,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Mujeeb Ur Rahman"
          },
          {
            "player_id": 1404,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Naveen-ul-Haq"
          },
          {
            "player_id": 62778,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Fazalhaq Farooqi"
          }
        ]
      }
    }
  }
}
const allPlayer = [];
let teamData = data['data']['teams'];

for (let i in teamData) {
    for (let j in teamData[i]['squads']) {
        teamData[i]['squads'][j]['team'] = data['data']['teams'][i]['title'];
        allPlayer.push(teamData[i]['squads'][j]);
    }
}

const roleFilters = {}; // Create an object to store players by role

// Loop through the players and group them by role
allPlayer.forEach(player => {
    if (!roleFilters[player.role]) {
        roleFilters[player.role] = [];
    }
    roleFilters[player.role].push(player);
});

let selectedPlayers = [];

function displayPlayersByRole(role) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    roleFilters[role].forEach(player => {
        const row = document.createElement('tr');
        row.setAttribute('class', 'row');
        row.addEventListener('click', () => {
            selectedPlayers.push(player);
            showPlayerInSection(player);
        });

        const playerTypeImage = getPlayerTypeImage(player.role);
        const thumbUrl = player.team === "New Zealand" ? teamData.teama.thumb_url : teamData.teamb.thumb_url;

        row.innerHTML = `
            <td><img src="${thumbUrl}" alt="Player Image" width="50"></td>
            <td>${player.name}</td>
            <td>${player.player_id}</td>
            <td><img src="${playerTypeImage}" alt="Player Type" width="50"></td>
        `;

        tableBody.appendChild(row);
    });
}

function getPlayerTypeImage(playerRole) {
    switch (playerRole) {
        case 'ar':
            return "https://png.pngtree.com/png-clipart/20210225/ourmid/pngtree-wooden-cricket-bat-clipart-sporting-goods-png-image_2957536.png";
        case 'bat':
            return "https://images.vexels.com/media/users/3/316363/isolated/preview/02c4382e5d08daec77666410ddae3e6a-cricket-bat.png";
        case 'wk':
            return "https://cdn.iconscout.com/icon/premium/png-256-thumb/wicket-keeper-gloves-4399285-3757032.png?f=webp";
        case 'bowl':
            return "https://e7.pngegg.com/pngimages/488/27/png-clipart-cricket-balls-tennis-balls-stump-cricket-sport-sphere.png";
    }
}

function showPlayerInSection(player) {
    const choosedPlayerDiv = document.querySelector('.single-fantasy-tip');
    const playerType = getPlayerTypeStr(player.role);

    const playerSection = choosedPlayerDiv.querySelector(`.${playerType}-section`);

    const playerDiv = document.createElement('div');
    playerDiv.className = 'player-info';

    const playerImage = document.createElement('img');
    playerImage.src = '//staticg.sportskeeda.com/cricket_images/fantasy_v2/player1.svg'; // Assuming you have a property for player images

    const playerName = document.createElement('p');
    playerName.className = 'player-name';
    playerName.textContent = player.name;

    playerDiv.appendChild(playerImage);
    playerDiv.appendChild(playerName);
    playerSection.appendChild(playerDiv);
}

// Function to get the player type
function getPlayerTypeStr(playerRole) {
    switch (playerRole) {
        case 'ar':
            return 'all-rounder';
        case 'bat':
            return 'batter';
        case 'wk':
            return 'wicket-keeper';
        case 'bowl':
            return 'bowler';
        default:
            return 'other';
    }
}
