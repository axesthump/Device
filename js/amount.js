$( function() {
    $( "#slider-range" ).slider({
      range: true,
      step: 500,
      min: 0,
      max: 10000,
      values: [ 0, 5000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( " " + ui.values[ 0 ]);
        $( "#amount_max" ).val( " " + ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( " " + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount_max" ).val( " " + $( "#slider-range" ).slider( "values", 1 ));
  } );


// Изменения ввода данных в первый инпут
$("input#amount").change(function() {
  var value1 = $("input#amount").val();
  var value2 = $("input#amount_max").val();

  if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $("input#amount").val(value1);
  }
  $("#slider-range").slider("values", 0, value1);
});

// Изменения ввода данных во второй инпут
$("input#amount_max").change(function() {
  var value1 = $("input#amount").val();
  var value2 = $("input#amount_max").val();

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $("input#amount_max").val(value2);
  }
  $("#slider-range").slider("values", 1, value2);
});