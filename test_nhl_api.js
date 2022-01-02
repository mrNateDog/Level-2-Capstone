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
              // $("#dateHeader").append(dateValue);
              // $("#schedule-container" ).append("<br/>");
              // $("#schedule-container" ).append("<br/>");
              $("#schedule-container").append(`
              <div class="card" style="width: 400px;"> 
                <div class="card-body">
                  <h5 class="card-title">${game.teams.away.team.name} VS ${
                game.teams.home.team.name
              }</h5>
                  <p class="card-text">Date: ${new Date(game.gameDate)}</p>
                  <p class="card-text">Location: ${game.venue.name}</p>
                  <a href="
                </div>
              </div>`);
              x++;
            });
          });
        }
      });
  });
});
