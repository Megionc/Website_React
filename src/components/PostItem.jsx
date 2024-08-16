import React, { useState } from "react";

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <string>1. Javascript</string>
                <div>
                    Javascript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem;