import React, { useState } from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <string>{props.post.id}. {props.post.title}</string>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem;