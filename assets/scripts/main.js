var landingImages = ['blue-shirt-girl', 'cactus', 'jacket-back', 'shirt-boy', 'shirt-girl']

var galleryImages = ['blue-shirt-girl', 'cactus', 'jacket-boy', 'shirt-boy', 'shirt-girl'];

var productImages = ['jacket-boy', 'jacket-girl', 'jacket-close', 'jacket-back'];

function randomRotation(){
    return ((Math.random() - 0.5) * 2.0) * 8.0;
}

$(function(){
    
    for(var i = 0; i < landingImages.length; i++){
        var randRotation = randomRotation();
        var randZ = Math.floor(Math.random() * 10);
        $('#image-stack-container .image-stack').append('<div class="img-container" style="z-index:'+randZ+';"><img style="transform: rotateZ('+randRotation+'deg)" src=assets/images/'+landingImages[i]+'.jpg></div>');
        
    }
    
    for(var i = 0; i < galleryImages.length; i++){
        $('#products-gallery').append(
            '<div class="gallery-item-box">'+
            '<div class="gallery-item" style="background-image:url(assets/images/'+galleryImages[i]+'.jpg)">'+
            '<div class="alt-image"></div>'+
            '<div class="overlay"><h3>Product Title</h3></div>'+
            '</div></div>');
    }
    
    for(var i = 0; i < productImages.length; i++){
        $('#product-overlay .img-stack').append(
            '<div class="img-container">'+
            '<img style="transform:translateX(-50%) translateY(-50%) rotateZ('+randomRotation()+'deg)" src="assets/images/'+productImages[i]+'.jpg">'+
            '</div>'
            );
    }
    
    /* INTERACTION */
    
    $('#image-stack-container .image-stack').click(function(){
        $(this).find('.img-container').each(function(i){
            //$(this).find('img').css('transform', 'rotateZ('+randomRotation()+'deg)');
            if(i%2==0){
                console.log('left');
                $(this).addClass('left');
            }else{
                console.log('right');
                $(this).addClass('right');
            }
        });
        
        $('#landing-title span').addClass('open');
        $('#landing-nav').fadeIn();
    });
    
    var productIndex = 0;
    
    $('#product-overlay .img-stack img').click(function(){
        var $container = $(this).parent();
        $container.addClass('clicked');
        
        setTimeout(function(){
            $container.prependTo($container.parent());
            
            setTimeout(function(){
                $container.removeClass('clicked');
            }, 200);
        }, 500);

        productIndex++;
        productIndex%=productImages.length;
        console.log(productIndex);
    });
    
    $('#about-link').click(function(){
        $('#about-overlay').fadeIn();
    });
    
    $('#about-overlay button.close').click(function(){
        $('#about-overlay').fadeOut();
    });
    
    $('.gallery-item').click(function(){
        $('#product-overlay').fadeIn();
    });
    
    $('#product-overlay button.close').click(function(){
        $('#product-overlay').fadeOut();
    });
})

