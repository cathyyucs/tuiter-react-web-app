const WhoToFollowListItem = (whoItem) => {
    return(`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-3 col-xl-3 col-xxl-2 d-flex flex-wrap align-items-center">
                        <img src="${whoItem.avatarIcon}" class="wd-avatar-image">
                    </div>
                    <div class="col-5 col-xl-6 col-xxl-7 pe-0">
                        <div>
                            <span class="wd-override-text-bold wd-override-text-color-white">${whoItem.userName}</span>
                            <i class="fas fa-check-circle fa-0.5x fa-inverse"></i>
                        </div>
                        <p class="wd-override-text-color-white">${whoItem.handle}</p>
                    </div>
                    <div class="col-4 col-xl-3 col-xxl-3 ps-0 d-flex flex-wrap align-items-center">
                        <button class="btn btn-primary rounded-pill wd-override-button">Follow</button>
                    </div>
                </div>
            </li>
    `);
}
export default WhoToFollowListItem;