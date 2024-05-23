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
});
