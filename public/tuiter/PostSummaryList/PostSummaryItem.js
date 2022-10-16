const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="wd-override-text-color-gray mb-0">${post.topic}</div>
                    <div>
                        <span class="wd-override-text-bold wd-override-text-color-white">${post.userName}</span>
                        <i class="fas fa-check-circle fa-0.5x fa-inverse"></i>
                        <span class="wd-override-text-color-gray">- ${post.time}</span>
                    </div>
                    <div class="wd-override-text-bold wd-override-text-color-white">${post.title}</div>
                </div>
                <div class="col-3 wd-post-summary-frame">
                    <img src="${post.image}" class="wd-post-summary-image">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;
