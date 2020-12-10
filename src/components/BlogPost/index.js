import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = props => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span>Featured</span>
          <h1>Beautiful is always beautiful</h1>
          <span>posted onjuly 21,2020 bySora Blogging Tips</span>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
