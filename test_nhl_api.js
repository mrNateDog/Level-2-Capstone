//DATE PICKER
$(document).ready(function () {
  $("#resetButton").click(function () {
    $(".card").remove();
  });
  $("#submit").click(function () {
    var dateValue = $("#dateSelect").val();
    $nhlLink = "https://www.nhl.com/gamecenter/ + $dateValue";

    fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=" + dateValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // $("#schedule-container").text(data.copyright);
        let cardCount = data.totalGames;
        let x = 0;
        while (x < cardCount) {
          data.dates.forEach((date) => {
            date.games.forEach((game) => {
              console.log(game);
              $("#schedule-container").append(`
              <div class="card card-sm border-1 p-1"> 
                <div class="card-body">
                  <h5 class="card-header">${game.teams.away.team.name} vs ${
                game.teams.home.team.name
              }</h5>
              <br>
                  <p class="card-text">Date: ${new Date(game.gameDate)}</p> 
                  <p class="card-link">Location: ${game.venue.name}</p>
                 <a href="https://www.nhl.com/gamecenter/${
                   game.gamePk
                 }" target='_blank'>Preview</a> 
                </div>
              </div>`);
              x++;
            });
          });
        }
      });
  });
});
