import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
const PostItem = (
    {
        post = {}
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                {/* ============================The most left column to show avatar*/}
                <div className="col-1 me-4">
                    <img src={`${post.avatar}`} className="rounded-circle" height={48} width={48}/>
                </div>
                {/* The middle major content columns */}
                <div className="col-10">
                    {/* ============================The row that shows author, handle and three dots */}
                    <div className="row">
                        <div className="col">
                            <span className="wd-override-text-bold">{post.source}</span>
                            <i className="fas fa-check-circle fa-inverse wd-override-icon-color-blue"></i>
                            <span className="wd-override-text-color-gray"> {post.handle} · {post.time}</span>
                        </div>
                        <div className="col" style={{"flex": "0 0 25px"}}>
                            <i className="fas fa-ellipsis-h wd-override-icon-color-gray"></i>
                        </div>
                    </div>
                    {/* ============================Displays the post title */}
                    <p className="wd-override-text-color-white mb-0">{post.title}</p>
                    {/* ============================Displays the card image and text on it */}
                    <div className="card wd-override-card mt-2 mb-2">
                        <img src={`${post.photo}`} className="card-img wd-post-image-radius"/>
                    </div>
                    {/* ============================Displays the bottom icons */}
                    <div className="row">
                        <div className="col-3">
                            <i className="far fa-comment fa-inverse wd-override-icon-color-gray"></i>
                            <span className="wd-override-text-color-gray"> {post.message}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-retweet fa-inverse wd-override-icon-color-gray"></i>
                            <span className="wd-override-text-color-gray"> {post.transfer}</span>
                        </div>
                        <div className="col-3">
                            <i className="far fa-heart fa-inverse wd-override-icon-color-gray"></i>
                            <span className="wd-override-text-color-gray"> {post.like}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-upload wd-override-icon-color-gray"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;