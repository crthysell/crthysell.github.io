$(document).ready(function(){

	
    var $container = $('.productfilter'), 
        filters = {};
    

        $('input[type="checkbox"]').on('change',function(){

            var filterValue= '';

        	//go through each checkbox, if checked get value and add to filterValue

        	$('input[type="checkbox"]').each(function(index, value){
        		// console.log(index);
        		// console.log($(this).attr('data-filter'));
        		// console.log($(this).is(":checked"));
        		if($(this).is(":checked")) {
        			filterValue= filterValue + ($(this).attr('data-filter'));

                    // if the filerVaules contain the class colorful
                    if( filterValue.indexOf(".colorful") > -1 ) {
                        
                        $(filterValue).find('img').each(function(index, value) {
                        
                            var altImg = $(value).attr('data-color');
                            $(value).attr('src', altImg);

                        });

                    }

                    // if the filerVaules contain the class neutral
                    if( filterValue.indexOf(".neutral") > -1 ) {

                        $(filterValue).find('img').each(function(index, value) {
                        
                            var altImg = $(value).attr('data-neutral');
                            $(value).attr('src', altImg);

                        });
                    }

        		}

        	});

        	$container.isotope({filter: filterValue});

        });

        $('#clear-filter').on('click', function(){
            $container.isotope({filter: '*'});
            $('input[type="checkbox"]').attr('checked',false);

            $('.colorful.neutral').find('img').each(function(index, value) {
                        
                var resetImg = $(value).attr('data-original');
                $(value).attr('src', resetImg);
             });

        });


            

});



        // var filters = {};

// $('#').on('click', 'input[type="checkbox"]',function() {
//   var $this = $(this);
//   // get group key
//   var $inputGroup = $this.parents('.input-group');
//   var filterGroup = $inputGroup.attr('data-filter-group');
//   // set filter for group
//   filters[ filterGroup ] = $this.attr('data-filter');
//   // combine filters
//   var filterValue = '';
//   for ( var prop in filters ) {
//     filterValue += filters[ prop ];
//   }
//   // set filter for Isotope
//   $container.isotope({ filter: filterValue });
// });

// });
