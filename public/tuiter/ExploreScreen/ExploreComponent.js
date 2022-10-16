import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10 input-group">
                    <span class="input-group-text wd-override-input-search">
                        <i class="fas fa-search fa-1x fa-inverse wd-override-search-icon"></i>
                    </span>
                    <input type="text" class="form-control wd-override-input" placeholder="Search Tuiter"/>
                    <i class="fas fa-cog fa-2x fa-inverse d-flex flex-wrap align-items-center ms-2 wd-override-cog-icon"></i>
                </div>
           </div>
           
           <ul class="nav mt-2 mb-2 nav-tabs ">
               <li class="nav-item">
                   <a class="nav-link active" href="/for-you.html">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="/trending.html">Trending</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="/news.html">News</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="/sports.html">Sports</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link d-none d-md-block" href="/entertainment.html">Entertainment</a>
               </li>
           </ul>
           
           <div class="card text-white mt-2 mb-2 wd-card-image">
               <img src="../images/starship.jpeg" class="card-img wd-override-card-image">
                   <div class="card-img-overlay">
                       <p class="card-title wd-card-overlay ms-2 mb-0">SpaceX's Starship</p>
                   </div>
           </div>
           
           ${PostSummaryList()}
           
    `);
}
export default ExploreComponent;
