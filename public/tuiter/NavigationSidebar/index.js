import NavigationSideBarItems from "./NavigationSideBarItems.js";
import RenderSideBarItems from "./navSideBarHelper.js";

const NavigationSidebar = (activeBarItemName) => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
            <!-- continue rest of list, e.g.,
                Home, Explore, Notifications,  Messages, etc. -->
       
            ${RenderSideBarItems(activeBarItemName, NavigationSideBarItems)}
                   
            <a href="#" class="list-group-item list-group-item-action">
                <span class="fa-stack" style="font-size:0.5rem;">
                    <i class="far fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis fa-inverse fa-stack-1x"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="/tuit.html" class="btn btn-primary btn-block rounded-pill ">
                Tuit</a>
        </div>
 `);
}

export default NavigationSidebar;