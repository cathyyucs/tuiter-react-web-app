const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <!-- The most left column to show avatar -->
                <div class="col-1 me-4">
                    <img src="${post.avatar}" class="wd-avatar-image">
                </div>
                <!-- The middle major content columns -->
                <div class="col-10">
                    <!-- The row that shows author, handle and three dots -->
                    <div class="row">
                        <div class="col">
                            <span class="wd-override-text-bold wd-override-text-color-white">${post.source}</span>
                            <i class="fas fa-check-circle fa-inverse"></i>
                            <span class="wd-override-text-color-gray">${post.handle} · ${post.time}</span>
                        </div>
                        <div class="col" style="flex:0 0 25px">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <!-- Displays the post title -->
                    <p class="wd-override-text-color-white mb-0">${post.title}</p>
                    <!-- Displays the card image and text on it -->
                    <div class="card wd-override-card mt-2 mb-2">
                        <img src="${post.photo}" class="card-img wd-post-image-radius">
                        ${TextBelowImage(post)}
                    </div>
                    <!-- Displays the bottom icons -->
                    <div class="row">
                        <div class="col-3">
                            <i class="far fa-comment fa-inverse wd-override-icon-color-gray"></i>
                            <span class="wd-override-text-color-gray">${post.message}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa wd-override-color-gray fa-retweet fa-inverse wd-override-icon-color-gray"></i>
                            <span class="wd-override-text-color-gray">${post.transfer}</span>
                        </div>
                        <div class="col-3">
                            <i class="far wd-override-color-gray fa-heart fa-inverse wd-override-icon-color-gray"></i>
                            <span class="wd-override-text-color-gray">${post.like}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa wd-override-color-gray fa-upload fa-inverse wd-override-icon-color-gray"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `);
}

const TextBelowImage = (post) => {
    if (post.content1.length !== 0) {
        return (`
            <div class="card-body wd-override-text-below-card">
                <p class="card-subtitle">${post.content1}</p>
                <p class="card-text text-muted">${post.content2}</p>
            </div>
        `);
    }
    return (``);
}

export default PostItem;