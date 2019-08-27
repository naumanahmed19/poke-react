import React, { Component } from 'react';

const Like = (props) => {
    return (
        <a className="btn btn-link"
            onClick={props.onLike}>
            <span className={props.liked ? 'fa fa-heart' : 'fa fa-heart-o'}></span>
        </a>);
}
export default Like;