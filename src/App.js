import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Desciption' },
    { id: 2, title: 'Javascript 2', body: 'Desciption 2' },
    { id: 3, title: 'Javascript 3', body: 'Desciption 3' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Посты не найдены!
        </h1>
      }
    </div>
  );
}

export default App;
