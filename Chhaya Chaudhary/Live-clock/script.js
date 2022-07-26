const name = document.getElementById("data");
      name.addEventListener("keypress", setName);
      name.addEventListener("blur", setName);

      setInterval(function() {
        var date = new Date();
        var period = date.getHours() >= 12 ? " PM" : " AM";
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if(hours<10)
          hours="0" + hours;
        if(minutes<10)
          minutes="0" + minutes;
        if(seconds<10)
          seconds="0" + seconds;
        var time =
          hours +
          ":" +
          minutes +
          ":" +
          seconds +
          period;
        document.getElementById("time").textContent = time;
        var greeting_msg;
        if (date.getHours() >= 12 && date.getHours() <= 17)
          greeting_msg = "Good Afternoon";
        else if (date.getHours() > 17 && date.getHours() < 24)
          greeting_msg = "Good Evening";
        else greeting_msg = "Good Morning";
        document.getElementById("msg").innerHTML = greeting_msg;
      },1000);

      function getName() {
        if (localStorage.getItem("myData") === null) {
          name.innerHTML = "[Enter Name]";
        } else {
          name.innerHTML = localStorage.getItem("myData");
        }
      }
      function print_Date(){
        document.getElementById("date").textContent=new Date().toDateString();
      }
      function setName(e) {
        if (e.type === "keypress") {
          if (e.keyCode == 13) {
            localStorage.setItem("myData", e.target.innerHTML);
            name.blur();
          }
        } else {
          localStorage.setItem("myData", e.target.innerHTML);
        }
      }
      getName();
      print_Date();
      setInterval();