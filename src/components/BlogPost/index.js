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
        <span>Featured</span>
        <h1>Beautiful is always beautiful</h1>
      </Card>
    </div>
  );
};

export default BlogPost;
