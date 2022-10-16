import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whoItems from "./whoItems.js";
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <li class="list-group-item wd-override-text-bold wd-override-text-color-white">Who to follow</li>
           ${
                whoItems.map(whoItem => {
                    return WhoToFollowListItem(whoItem);
                }).join('')
            }
           </ul>
    `);
}
export default WhoToFollowList;