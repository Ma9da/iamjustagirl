function addPost(){
    const postContent = $("#postContent").val();
    if (postContent) {
        const newPost = `
            <div class="post">
                <div class="post-author">
                    <figure class="post-author-img">
                        <img src="https://img.freepik.com/free-photo/anime-stylecelebrating-valentines-day_23-2151257994.jpg" alt="">
                    </figure>
                    <p class="post-author-name">
                        john smith
                    </p>
                    <p class="post-author-date">
                        ${new Date().toLocaleDateString()}
                    </p>
                </div>
                <p class="post-content">
                    ${postContent}
                </p>
            </div>`;
        $(".posts").append(newPost);
        $("#postContent").val("") 
    } else {
        alert("Please write something in the post.");
    }
}
function imagDisplay(){
    $(".profile-img").toggle("slow", () => {
        if ($(".profile-img").is(":visible")) {
            $(".img-display").text("hide");
        } else if (!$(".profile-img").is(":visible")){
            $(".img-display").text("show");
        }
    });    
}
function addBorder() {
    $(".profile-img img").toggleClass("red-borders");
    if ($(".profile-img img").hasClass("red-borders")) {
        $(".border").text("Remove Border");
    } else {
        $(".border").text("Add Border");
    }
}
function changePcolor(){
    $(this).css("color", "red")
}
function breakFast(){
        $(".breakfast-wrapper").show();
        
        $("#milk").css({
            "position": "relative",
        });
    
        $("#milk").animate({
            bottom: 54,
            left: 20,
        }, {
            duration: "slow",
            step: function() {
                $(this).css({
                    'transform': 'rotate(45deg)'
                });
            },
            complete: function() {
                // This function is called once the animation on #milk is complete
                $("#box").css({
                    'transform': 'rotate(' + 320 + 'deg)',
                    '-ms-transform': 'rotate(' + 320 + 'deg)', /* IE 9 */
                    '-webkit-transform': 'rotate(' + 320 + 'deg)', /* Safari and Chrome */
                    '-o-transform': 'rotate(' + 320 + 'deg)', /* Opera */
                    '-moz-transform': 'rotate(' + 320 + 'deg)' /* Firefox */
                });
                $( "#cereal img" ).attr("src", "./assets/images/pngtree-fruit-cereal-breakfast-icon-cartoon-vector-picture-image_7852498.png");
                $( "#cereal img" ).animate({ right: '+=50' }, {
                    duration: "slow",
                    complete: function() {
                        // This function is called once the animation on #cereal img is complete
                        $(".breakfast-wrapper").hide("slow");
                    }
                });
            }
        });
}
function newsTab() {
    var tickerText = $('.news-tab p');
    var containerWidth = $('.news-tab').width();
    var textWidth = tickerText.width();
    
    tickerText.css({ left: containerWidth });

    tickerText.animate(
      { left: -textWidth }, 
      {
        duration: 50000, // Adjust this value to control the speed
        easing: 'linear',
        complete: function() {
          newsTab(); // Restart the animation when complete
        }
      }
    );
  }



$(document).ready(() => {
    $("#addPostButton").click(addPost);
    $(".img-display").click(imagDisplay)
    $(".border").click(addBorder)
    $("p").click(changePcolor)
    $(".breakfast-wrapper").hide()
    $( ".breakfast-btn").click(breakFast)
    newsTab()
}); 