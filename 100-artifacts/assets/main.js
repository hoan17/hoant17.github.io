$("#memoryButton").on("click", function(){
    var randomNumber = Math.floor(Math.random() * 25) + 1;
    var imgName = "img_" + randomNumber + ".jpg";
    document.getElementById("imgid").src= "assets/img/memory" + "/" + imgName ;

    document.getElementById('memoryButton').className="";
    document.getElementById('desireButton').className="";
    document.getElementById('moodButton').className="";
    document.getElementById('fearButton').className="";
    document.getElementById('top').className="";
    document.getElementById('bottom').className="";

    document.body.style.backgroundColor = "HoneyDew";
    document.getElementById('memoryButton').classList.add('memory');
    document.getElementById('desireButton').classList.add('memory');
    document.getElementById('moodButton').classList.add('memory');
    document.getElementById('fearButton').classList.add('memory');

    document.getElementById('top').classList.add('memory');
    document.getElementById('bottom').classList.add('memory');
 });

 $("#desireButton").on("click", function(){
     var randomNumber = Math.floor(Math.random() * 25) + 1;
     var imgName = "img_" + randomNumber + ".jpg";
     document.getElementById("imgid").src= "assets/img/desire" + "/" + imgName ;

     document.getElementById('memoryButton').className="";
     document.getElementById('desireButton').className="";
     document.getElementById('moodButton').className="";
     document.getElementById('fearButton').className="";
     document.getElementById('top').className="";
     document.getElementById('bottom').className="";

      document.body.style.backgroundColor = "PeachPuff";
     document.getElementById('memoryButton').classList.add('desire');
     document.getElementById('desireButton').classList.add('desire');
     document.getElementById('moodButton').classList.add('desire');
     document.getElementById('fearButton').classList.add('desire');

     document.getElementById('top').classList.add('desire');
     document.getElementById('bottom').classList.add('desire');
  });

  $("#moodButton").on("click", function(){
      var randomNumber = Math.floor(Math.random() * 25) + 1;
      var imgName = "img_" + randomNumber + ".jpg";
      document.getElementById("imgid").src= "assets/img/mood" + "/" + imgName ;

      document.getElementById('memoryButton').className="";
      document.getElementById('desireButton').className="";
      document.getElementById('moodButton').className="";
      document.getElementById('fearButton').className="";
      document.getElementById('top').className="";
      document.getElementById('bottom').className="";

      document.body.style.backgroundColor = "black";
      document.getElementById('memoryButton').classList.add('mood');
      document.getElementById('desireButton').classList.add('mood');
      document.getElementById('moodButton').classList.add('mood');
      document.getElementById('fearButton').classList.add('mood');

      document.getElementById('top').classList.add('mood');
      document.getElementById('bottom').classList.add('mood');

   });

   $("#fearButton").on("click", function(){
       var randomNumber = Math.floor(Math.random() * 25) + 1;
       var imgName = "img_" + randomNumber + ".jpg";
       document.getElementById("imgid").src= "assets/img/fear" + "/" + imgName ;

       document.getElementById('memoryButton').className="";
       document.getElementById('desireButton').className="";
       document.getElementById('moodButton').className="";
       document.getElementById('fearButton').className="";
       document.getElementById('top').className="";
       document.getElementById('bottom').className="";
       
       document.body.style.backgroundColor = "GhostWhite";
       document.getElementById('memoryButton').classList.add('fear');
       document.getElementById('desireButton').classList.add('fear');
       document.getElementById('moodButton').classList.add('fear');
       document.getElementById('fearButton').classList.add('fear');

       document.getElementById('top').classList.add('fear');
       document.getElementById('bottom').classList.add('fear');

    });
