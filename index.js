$(document).ready(function(){
	$('#search-by-title-button').click(function(){
		//console.log($('#selectfilter').val());
		let inputyear = $('#year').val();
		let inputtitle = $('#title').val();
		$('#cardcontainer div').html('');
		
		
		if(inputtitle &&  inputyear){
			//console.log("hello");
			$.ajax({
				url: "http://www.omdbapi.com/?apikey=1630f2e1&t="+inputtitle+"&y="+inputyear, 
				success: function(result){
					//console.log(result);
					let title = result.Title;
					if (result.Poster) {
						$("#cardcontainer").append(`<div class="card" >
            <img class="card-img-top" src=`+result.Poster+` alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">`+result.Title+`</h5>
              <p class="card-text">Year: `+result.Year+`</p>
              <p class="card-text">Rated:`+result.Rated+`</p>
              <p class="card-text">Released: `+result.Releasd+`</p>
              <p class="card-text">Runtime: `+result.Runtime+`</p>
              <p class="card-text">Actors: `+result.Actors+`</p>
              <p class="card-text">Awards: `+result.Awards+`</p>
              <p class="card-text">BoxOffice: `+result.BoxOffice+`</p>
              <p class="card-text">Country: `+result.Country+`</p>
              <p class="card-text">DVD: `+result.DVD+`</p>
              <p class="card-text">Director: `+result.Director+`</p>
              <p class="card-text">Genre: `+result.Genre+`</p>
              <p class="card-text">Language: `+result.Language+`</p>
              <p class="card-text">Metascore: `+result.Metascore+`</p>
              <p class="card-text">Plot: `+result.Plot+`</p>
              <p class="card-text">Production: `+result.Production+`</p>
              <p class="card-text">Ratings: `+result.Ratings[0].Value+`</p>
              <p class="card-text">Type: `+result.Type+`</p>
              <p class="card-text">Website: `+result.Website+`</p>
              <p class="card-text">Write: `+result.Write+`</p>
              <p class="card-text">imdbID: `+result.imdbID+`</p>
              <p class="card-text">imdbRating: `+result.imdbRating+`</p>
              <p class="card-text">imdbVotes: `+result.imdbVotes+`</p>
              
            </div>
          </div>`);
	       			
					}else{
					$("#cardcontainer").append(`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="Default-Icon-icon.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">`+result.Title+`</h5>
              <p class="card-text">Year: `+result.Year+`</p>
              <p class="card-text">Rated:`+result.Rated+`</p>
              <p class="card-text">Released: `+result.Releasd+`</p>
              <p class="card-text">Runtime: `+result.Runtime+`</p>
              <p class="card-text">Actors: `+result.Actors+`</p>
              <p class="card-text">Awards: `+result.Awards+`</p>
              <p class="card-text">BoxOffice: `+result.BoxOffice+`</p>
              <p class="card-text">Country: `+result.Country+`</p>
              <p class="card-text">DVD: `+result.DVD+`</p>
              <p class="card-text">Director: `+result.Director+`</p>
              <p class="card-text">Genre: `+result.Genre+`</p>
              <p class="card-text">Language: `+result.Language+`</p>
              <p class="card-text">Metascore: `+result.Metascore+`</p>
              <p class="card-text">Plot: `+result.Plot+`</p>
              <p class="card-text">Production: `+result.Production+`</p>
              <p class="card-text">Ratings: `+result.Ratings[0].Value+`</p>
              <p class="card-text">Type: `+result.Type+`</p>
              <p class="card-text">Website: `+result.Website+`</p>
              <p class="card-text">Write: `+result.Write+`</p>
              <p class="card-text">imdbID: `+result.imdbID+`</p>
              <p class="card-text">imdbRating: `+result.imdbRating+`</p>
              <p class="card-text">imdbVotes: `+result.imdbVotes+`</p>
              
            </div>
          </div>`);	
					}
					
	       }});
		}
		else{
			alert("Incorrect inputs please enter correct details");
		}
		
	});

	$('#search-by-id-button').click(function(){
		let inputimdbvalue = $('#inputimdb').val();
		$('#cardcontainer div').html('');
		
		
		if(inputimdbvalue){
			//console.log("hello");
			$.ajax({
				url: "http://www.omdbapi.com/?apikey=1630f2e1&i="+inputimdbvalue, 
				success: function(result){
					//console.log(result);
					let title = result.Title;
					if (result.Poster) {
						$("#cardcontainer").append(`<div class="card" >
            <img class="card-img-top" src=`+result.Poster+` alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">`+result.Title+`</h5>
              <p class="card-text">Year: `+result.Year+`</p>
              <p class="card-text">Rated:`+result.Rated+`</p>
              <p class="card-text">Released: `+result.Releasd+`</p>
              <p class="card-text">Runtime: `+result.Runtime+`</p>
              <p class="card-text">Actors: `+result.Actors+`</p>
              <p class="card-text">Awards: `+result.Awards+`</p>
              <p class="card-text">BoxOffice: `+result.BoxOffice+`</p>
              <p class="card-text">Country: `+result.Country+`</p>
              <p class="card-text">DVD: `+result.DVD+`</p>
              <p class="card-text">Director: `+result.Director+`</p>
              <p class="card-text">Genre: `+result.Genre+`</p>
              <p class="card-text">Language: `+result.Language+`</p>
              <p class="card-text">Metascore: `+result.Metascore+`</p>
              <p class="card-text">Plot: `+result.Plot+`</p>
              <p class="card-text">Production: `+result.Production+`</p>
              <p class="card-text">Ratings: `+result.Ratings[0].Value+`</p>
              <p class="card-text">Type: `+result.Type+`</p>
              <p class="card-text">Website: `+result.Website+`</p>
              <p class="card-text">Write: `+result.Write+`</p>
              <p class="card-text">imdbID: `+result.imdbID+`</p>
              <p class="card-text">imdbRating: `+result.imdbRating+`</p>
              <p class="card-text">imdbVotes: `+result.imdbVotes+`</p>
              
            </div>
          </div>`);
	       			
					}else{
					$("#cardcontainer").append(`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="Default-Icon-icon.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">`+result.Title+`</h5>
              <p class="card-text">Year: `+result.Year+`</p>
              <p class="card-text">Rated:`+result.Rated+`</p>
              <p class="card-text">Released: `+result.Releasd+`</p>
              <p class="card-text">Runtime: `+result.Runtime+`</p>
              <p class="card-text">Actors: `+result.Actors+`</p>
              <p class="card-text">Awards: `+result.Awards+`</p>
              <p class="card-text">BoxOffice: `+result.BoxOffice+`</p>
              <p class="card-text">Country: `+result.Country+`</p>
              <p class="card-text">DVD: `+result.DVD+`</p>
              <p class="card-text">Director: `+result.Director+`</p>
              <p class="card-text">Genre: `+result.Genre+`</p>
              <p class="card-text">Language: `+result.Language+`</p>
              <p class="card-text">Metascore: `+result.Metascore+`</p>
              <p class="card-text">Plot: `+result.Plot+`</p>
              <p class="card-text">Production: `+result.Production+`</p>
              <p class="card-text">Ratings: `+result.Ratings[0].Value+`</p>
              <p class="card-text">Type: `+result.Type+`</p>
              <p class="card-text">Website: `+result.Website+`</p>
              <p class="card-text">Write: `+result.Write+`</p>
              <p class="card-text">imdbID: `+result.imdbID+`</p>
              <p class="card-text">imdbRating: `+result.imdbRating+`</p>
              <p class="card-text">imdbVotes: `+result.imdbVotes+`</p>
              
            </div>
          </div>`);	
					}
					
	       }});
		}
		else{
			alert("Incorrect inputs please enter correct details");
		}
		
	});
	 














});