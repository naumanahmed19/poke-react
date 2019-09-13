import React from 'react';

const Like = (props) => {
    return (
        <span className="btn btn-link"
            onClick={props.onLike}>
            <span className={props.liked ? 'fa fa-heart' : 'fa fa-heart-o'}></span>
        </span>);
}
export default Like;