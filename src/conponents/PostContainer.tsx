import React from 'react';
import {postAPI} from "../services/PostService";

const PostContainer = () => {
    const {data: posts} =  postAPI.useFetchAllPostsQuery('')
    return (
        <div>
            
        </div>
    );
};

export default PostContainer;