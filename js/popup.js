var semana=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ];
var requestCalendarGoogle = "https://www.googleapis.com/calendar/v3/calendars/0538djil1mtduscku37mvu3nos%40group.calendar.google.com/events?key=AIzaSyCkV23-71YAErg4DAtfgZ5xEtvVe8ziffA&singleEvents=True&orderBy=startTime";

var llamarCalendario= function(){
	$.getJSON(requestCalendarGoogle, function(data){
		$.each(data.items,function(key,value){
			var inicio = new Date(data.items[key].start.dateTime);
			var fin = new Date(data.items[key].end.dateTime);

			switch(semana[inicio.getDay()]){
				case "Viernes": $("table#tabla_viernes tbody").append('<tr><td><span class="titulo">'+ data.items[key].summary +'</span><br/><span class="horario">'+ inicio.toLocaleTimeString()+'-'+fin.toLocaleTimeString()+'</span></td></tr>');
								break;
				case "Sabado": $("table#tabla_sabado tbody").append('<tr><td><span class="titulo">'+ data.items[key].summary +'</span><br/><span class="horario">'+ inicio.toLocaleTimeString()+'-'+fin.toLocaleTimeString()+'</span></td></tr>');
								break;
				case "Domingo": $("table#tabla_domingo tbody").append('<tr><td><span class="titulo">'+ data.items[key].summary +'</span><br/><span class="horario">'+ inicio.toLocaleTimeString()+'-'+fin.toLocaleTimeString()+'</span></td></tr>');
								break;
			}
		});
	});
}

$(document).ready(function(){
	llamarCalendario();
});