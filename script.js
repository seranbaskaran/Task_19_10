
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
  let allWicketKeepers=[];
  let allBatsmans=[];
  let allAllRounders=[];
  let allBowler=[];

  function getData(teamDataA, teamDataB) {
    let teamAwicketKeepers = teamDataA.squads.filter(player => player.role === "wk");
    let teamBwicketKeepers = teamDataB.squads.filter(player => player.role === "wk");
    let teamAbatsmans = teamDataA.squads.filter(player => player.role === "bat");
    let teamBbatsmans = teamDataB.squads.filter(player => player.role === "bat");
    let teamAallRounders = teamDataA.squads.filter(player => player.role === "ar");
    let teamBallRounders = teamDataB.squads.filter(player => player.role === "ar");
    let teamAallBowler = teamDataA.squads.filter(player => player.role === "bowl");
    let teamBallBowler = teamDataB.squads.filter(player => player.role === "bowl");
  
    allWicketKeepers = [
      ...teamAwicketKeepers,
      ...teamBwicketKeepers
    ];
    allBatsmans = [
      ...teamAbatsmans,
      ...teamBbatsmans
    ];
    allAllRounders = [
      ...teamAallRounders,
      ...teamBallRounders
    ];
    allBowler = [
      ...teamAallBowler,
      ...teamBallBowler
    ];
  }
getData(data.data.teams.teama, data.data.teams.teamb);
function displayPlayer(teamplayers) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    teamplayers.forEach(player => {
        const row = document.createElement('tr');
        row.setAttribute('class', 'row');
        row.addEventListener('click', () => {
            console.log(player);
        });
        const playerType = getPlayerType(player.role);

        const thumbUrl = player.team_id === "teama" ? data.data.teams.teama.thumb_url : data.data.teams.teamb.thumb_url;

        row.innerHTML = `
            <td><img src="${thumbUrl}" alt="Player Image" width="50"></td>
            <td>${player.name}</td>
            <td>${player.player_id}</td>
            <td>${playerType}</td>
        `;
        tableBody.appendChild(row);
    })
}

function getPlayerType(playervalue){
    switch (playervalue) {
                case 'ar':
                    return "all rounder";
                case 'bat':
                    return "batsman";
                case 'wk':
                    return "Wicket Keeper";
                case 'bowl':
                    return "Bowler";
    }            
}
function showAnother(player){
    console.log(player);
}
