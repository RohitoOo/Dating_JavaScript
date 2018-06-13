$(document).ready(function () {
	var d = new Date();

	var	day = d.getDay();
  var time = d.getTime();
  console.log(time);

	var	msg = ["Sunday Funday!",
			   "Back to the grind!",
			   "Toonie Tuesdays...",
			   "Boom! Wednesday Woppers!",
			   "Thirsty Thursday, yo!",
			   "It's Friday! We should be kickin' it!",
			   "Paaarrrtttyyy!"]

	$('#' + day).attr('id', 'today');
	$("#message").text(msg[day]);

});
