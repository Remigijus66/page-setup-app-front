import React, { useContext } from 'react';
import { useRef } from 'react';
import IndexContext from '../context/IndexContext';


const Posts = () => {
  const { posts, verticalLayout } = useContext(IndexContext)



  return (
    <div className={`border grow7 d-flex f-wrap ${verticalLayout}`}>
      {posts.map((e, i) => <div className='card' key={i} > <img src={e.image} alt="" />
        <h4>{e.header}</h4>
        <p>{e.text}</p>   </div>)}
    </div>
  );
};

export default Posts;