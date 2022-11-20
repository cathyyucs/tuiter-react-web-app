import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
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
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: !tuit.liked
                    }))} className="fas fa-heart me-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: !tuit.liked
                    }))} className="far fa-heart me-2"></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                {
                    tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: !tuit.disliked
                    }))} className="fas fa-thumbs-down me-2"></i>
                }
                {
                    !tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                        disliked: !tuit.disliked
                    }))} className="far fa-thumbs-down me-2"></i>
                }
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="fas fa-share-alt me-2"></i>
            </div>
        </div>
    )
}

export default TuitStats;