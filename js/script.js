$(function(){
	
	//$('.plus').click(function(){
	//	$('.information_json_plus_answer').before(
    //        '<tr>' +
    //        '<td><input type="text" class="col-xs-5" id="information_json_name[]" placeholder="answer"></td>' +
    //        '<td><input type="checkbox" class="checkbox" id="information_json_val[]"></td>' +
    //        '<td><span class="btn btn-danger minus pull-right">&ndash;</span></td>' +
    //        '</tr>'
	//	);
	//});
	
	
	
	$('.plus-new').click(function(){
		$('.information_json_new').before(
			'<tr> class="question"' +
				'<th>question</th>' +
				'<th>multanswer</th>' +
				'<th></th>' +
			'</tr>'+
			'<tr>' +
				'<td><input type="text" class="form-control" id="information_json_name[]" placeholder="Question"></td>' +
				'<td><input type="checkbox" class="checkbox" id="information_json_val[]"></td>' +
				'<td><span class="btn btn-danger minus pull-right">&ndash;</span></td>' +
			'</tr>'+
			'<tr class="information_json_plus">'+
				'<td></td>'+
				'<td></td>'+
				'<td><span class="btn btn-success plus pull-right">+</span></td>'+
			'</tr>'
		);
    
	});
	
	$(document).on('click', '.plus', function(){
		$( this ).closest( 'tr' ).before(
			'<tr>' +
				'<td><input type="text" class="form-control" id="information_json_name[]" placeholder="answer"></td>' +
				'<td><input type="checkbox" class="checkbox" id="information_json_val[]" placeholder="chbox"></td>' +
				'<td><span class="btn btn-danger minus pull-right">&ndash;</span></td>' +
			'</tr>'
        );
	});	
	
	$(document).on('click', '.minus', function(){
        $(this).closest( 'tr' ).remove();
        $(this).closest( 'tr.question' ).remove(); 
        $(this).closest('plus').remove();
	});
	
});	
