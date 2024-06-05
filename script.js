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
$(document).ready(function() {
    $("#addPostButton").click(addPost);
    $(".hide").click(function(){
        $(".profile-img").hide("slow")
    })
    $(".show").click(function(){
        $(".profile-img").show("slow")
    })
    $(".border").click(function () {
        $(".profile-img img").toggleClass("red-borders")
    })
    $("p").click(function(){
        $(this).css("color", "red")
    })
    $(".breakfast-wrapper").hide()
    $( ".breakfast-btn" ).click(function(){
        $(".breakfast-wrapper").show()
        $("#milk").css({
            "position": "relative",
        });
        $("#milk").animate( {
            bottom: 54,
            left: 20,
        }, {
            duration: "slow",  // 
        step: function() {
            $(this).css({
                'transform': 'rotate(45deg)'
            });
        },
            complete: function() {
                
                $("#box").css({
                    'transform': 'rotate(' + 320 + 'deg)',
                    '-ms-transform': 'rotate(' + 320 + 'deg)', /* IE 9 */
                    '-webkit-transform': 'rotate(' + 320 + 'deg)', /* Safari and Chrome */
                    '-o-transform': 'rotate(' + 320 + 'deg)', /* Opera */
                    '-moz-transform': 'rotate(' + 320 + 'deg)' /* Firefox */
                });
                $( "#cereal img" ).attr("src", "./assets/images/pngtree-fruit-cereal-breakfast-icon-cartoon-vector-picture-image_7852498.png");
                $( "#cereal img" ).animate({ right: '+=50' });
            }
        });
    });
    
    
});