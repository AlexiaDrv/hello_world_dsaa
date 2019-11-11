$('#form').on('submit', function(){
      $('#gif').css("display", "block");
      $('#image-nasa').css("display", "none");
    	let date = $('#form-date').val()
      $.getJSON('https://api.nasa.gov/planetary/apod?api_key=l3dgycpHOzEgdPnRtk49jmioh3VQ69SdkNRNtfpa&date='+date)
      .done(function(data){
		          console.log(data.title);
              console.log(data.explanation)
              $('#image-titre').text(data.title)
              $('#image-description').text(data.explanation);
              $('#gif').css("display", "none")
      if(data.media_type=='image'){
              $('#video-nasa').css("display", "none");
  			               $('#image-nasa')
                    .attr('src',data.url)
                    .css("display", "block");
        }else{
            $('#image-nasa').css("display", "none");
            $('#video-nasa')

              .attr('src',data.url)
              .css("display", "block");
        }
              	});
              return false;
	});
