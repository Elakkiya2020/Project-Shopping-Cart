  $(document).ready(function() {
    var shoetype;
	var femaleshoe;
	var maleshoe;
	$("#gender").on("change", function() {
    console.log($('#gender :selected').val());
	var selectedgender = $('#gender :selected').val();
	if(selectedgender == 'female') {
	console.log(selectedgender);
	$('.men').addClass('d-none');
	$('.women').removeClass('d-none');
	$('#menfootsize').addClass('d-none');
	$('#womenfootsize').removeClass('d-none');
	femaleshoe = true;
	$('.shoes').removeClass('point-none');
	}else if(selectedgender == 'male'){
	console.log(selectedgender);
	$('.women').addClass('d-none');
	$('.men').removeClass('d-none');
	$('#womenfootsize').addClass('d-none');
	$('#menfootsize').removeClass('d-none');
	$('.shoes').removeClass('point-none');
	maleshoe = true;
	}else{
	$('.women').addClass('d-none');
	$('.men').addClass('d-none');
	$('#womenfootsize').addClass('d-none');
	$('#menfootsize').addClass('d-none');
	$('.shoes').addClass('point-none');
	$('.shoe-display.chart').addClass('d-none');
	$(".shoe-model").html('');
	$('.shoe-type').removeClass('selected');
	}
    });
	
    $(".shoe-type").on("click", function() {
	$('.shoe-type').removeClass('selected');
	$(this).addClass('selected');
    shoetype = $(this)[0].id;
	console.log(shoetype[0].id);
	$(".shoe-model").html(shoetype);
	$('.shoe-display.chart').removeClass('d-none');
    });
	
	$(".recommend-link").on("click", function() {
    var recommendsize;
	var tablesize;
	if(femaleshoe) {
	console.log(1);
	  recommendsize = $('#womenfootsize :selected').text();
	  tablesize = $(".women").find(".sizesection").clone();
	}else {
	console.log(2);
	  recommendsize = $('#menfootsize :selected').text();
	  tablesize = $(".men").find(".sizesection").clone();
	}
	 //.parent('.sizesection').addClass('selected');
	console.log(tablesize);
	$.each(tablesize, function(key, value) {
	//console.log(value);
	//console.log(value.lastElementChild.textContent);
	//console.log(value);
	var rootvalue = value.lastElementChild.textContent;
	if(rootvalue == recommendsize) {
	 // $(this).find().parent();
	// console.log(tablesize);
	 console.log(value);
	 // console.log($(this).tablesize);
	 // console.log(value);
	 $(".ewf").find('.sizesection').remove();
	  $(".ewf").append(value);
	}
	});
	console.log(recommendsize, tablesize);
    });
	
	
  });