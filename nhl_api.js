//DEFAULT FETCH FROM NHL API
/* 
    fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=2021-12-21")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // $("#schedule-container").text(data.copyright);
        data.dates.forEach((date) => {
          console.log(data.dates);
          $("#dateText").append();
          date.games.forEach((game) => {
            $("#schedule-container").append(game.teams.away.team.name);
            $("#schedule-container").append(" <b> vs </b>");
            $("#schedule-container").append(game.teams.home.team.name);
            $("#schedule-container").append("<br/>");
          });
        });
      });
  });
});
*/
//USING DATE PICKER
$(document).ready(function () {
  $("#submit").click(function () {
    var dateValue = $("#dateSelect").val();
    $nhlLink = "https://www.nhl.com/gamecenter/ + $dateValue";

    fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=" + dateValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // $("#schedule-container").text(data.copyright);
        data.dates.forEach((date) => {
          date.games.forEach((game) => {
            $("#schedule-container").append(game.teams.away.team.name);
            $("#schedule-container").append(" <b> vs </b>");
            $("#schedule-container").append(game.teams.home.team.name);
            $("#schedule-container").append("<br/>");
          });
        });
      });
  });
});
