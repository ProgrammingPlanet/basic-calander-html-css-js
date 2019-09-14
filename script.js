		
	function getDaysInMonth(month, year)
	{
     	var date = new Date(Date.UTC(year, month, 1));
     	var days = [];
     	while (date.getMonth() === month) {
        	days.push(new Date(date));
        	date.setDate(date.getDate() + 1);
     	}
     	return days;
	}

	function add(obj)
	{
		var html = obj.innerHTML;
		if(html == 'Add Event')
		{
			var ev = prompt('Please Enter Event Details.');
			if(ev != null && ev.length > 0)
			{
				var _id = obj.getAttribute('id');

				events.push({"id":_id,"data":ev});

				obj.innerHTML = `<a href='#' onclick='show("${_id}")'>show</a> 
							<a href='#' onclick='edit("${_id}")'>edit</a> 
							<a href='#' onclick='del("${_id}")'>delete</a>`;
			}
		}
	}

	function show(id)
	{
		events.forEach(function(val){
			if(val.id == id)
			{
				alert(val.data);
				return 0;
			}
		});
	}

	function edit(id)
	{
		events.forEach(function(val){
			if(val.id == id)
			{
				var ev = prompt('Edit and click on ok.',val.data);
				val.data = ev;
				return 0;
			}
		});
	}

	function del(id)
	{
		console.log(id);
		events.forEach(function(val,i){
			if(val.id == id)
			{	
				setTimeout(function(){document.getElementById(id).innerHTML = 'Add Event';},500)
				alert('delete succesfully')
				events.splice(i,1);
				// return 0;
			}
		});
	}

	var d =  new Date();

	var days = getDaysInMonth(d.getMonth(),d.getFullYear());

	var events = [];

	for(var i=0; i< days.length; i++)
	{
		var info = days[i].toString().split(' '); //
		var e = `<div class="day" id="day${info[2]}">
					<div>${info[2]}</div><br>
					<div id="name${info[2]}">${info[0]}</div><br>
					<div id="event${info[2]}" class="event" onclick="add(this)">Add Event</div>
				</div>`;
		var calander = document.getElementById('calander');
		calander.insertAdjacentHTML( 'beforeend', e );	
	}

	
