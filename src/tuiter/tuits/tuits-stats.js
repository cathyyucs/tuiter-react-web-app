import React from "react";

const TuitStats = ({tuit}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-2"></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                <i className="fas fa-share-alt me-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;