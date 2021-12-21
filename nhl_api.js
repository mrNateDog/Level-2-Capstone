fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=2021-12-19")
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
