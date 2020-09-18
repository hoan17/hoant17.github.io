
function refreshData(){


    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    var top = getRandomInt(90);
    var left = getRandomInt(80);

    $('img').css("top", to + 'vh');
    $('img').css("left", le + 'vw');

    setTimeout(refreshData, 1000);
}


refreshData(); // execute function
