$.ajax({
  url: "http://ipinfo.io./json",
  //6dc433aa52d1c005c5f7773f4ba62cdf
  success:  function(res, txt,xhr){
    console.log(res);
    $("#ciudad").html(res.city);
    $("#pais").html(res.country);

    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather?q=Londonzip='+res.city+',us&APPID=6dc433aa52d1c005c5f7773f4ba62cdf',
success: function(res2, txt2,xhr2){
  console.log(res2);
  var tempCelsius = Math.round(Number(res2.main.temp)) -273;
  $("#temp").html(tempCelsius);
      }
    });
  }
});
