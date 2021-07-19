$(window).load(function() {
    function assignFavStar(){
    $(".commonClassUsedforEachStar").each(function(index){
    //get localStorage item for each
    if ( favResult === true ) {//do this first
    $(".commonClassUsedforEachStar").addClass( "icon-star" );
    } else {
    $(".commonClassUsedforEachStar").addClass( "icon-star-empty" );
    }
    
    });
    
    }
    }
    
    if (window.localStorage) {
        var didTheyFave = $(".icon-star-empty").click(function() {
        if($(this).hasClass("icon-star")) {
        $( this ).addClass( "icon-star-empty" );
        $( this ).removeClass( "icon-star" );
        var fav = false;
        } else {
        $( this ).addClass( "icon-star" );
        $( this ).removeClass( "icon-star-empty" );
        var fav = true;
        }
        localStorage.setItem("didTheyFave", fav);
        });
        }