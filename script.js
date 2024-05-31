$(document).ready(function() {
    $("#addPostButton").click(function() {
        var postContent = $("#postContent").val();
        if (postContent) {
            var newPost = `
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
            $("#postContent").val("");  
        } else {
            alert("Please write something in the post.");
        }
    });
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

    $("div").click(function(){
        $("div").addClass("hi")
    })
    var tg = $("h6")
    console.log($(".show") instanceof jQuery)
});
