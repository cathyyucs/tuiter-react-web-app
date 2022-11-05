import React from "react";
import TuitStats from "./tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                {/* ============================The most left column to show avatar*/}
                <div className="col-1 me-4">
                    <img src={tuit.image} className="rounded-circle" height={48} width={48}/>
                </div>
                {/* The middle major content columns */}
                <div className="col-10">
                    {/* ============================The row that shows author, handle and three dots */}
                    <div className="row">
                        <div className="col">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <span className="wd-override-text-bold">{tuit.userName} </span>
                            <i className="fas fa-check-circle fa-inverse wd-override-icon-color-blue"></i>
                            <span className="wd-override-text-color-gray"> {tuit.handle} · {tuit.time}</span>
                        </div>
                    </div>
                    {/* ============================Displays the post title */}
                    <p className="wd-override-text-color-white mb-0">{tuit.tuit}</p>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;


