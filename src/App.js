import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Desciption' },
    { id: 2, title: 'Javascript 2', body: 'Desciption 2' },
    { id: 3, title: 'Javascript 3', body: 'Desciption 3' },
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNevPost = (e) => {
    e.preventDefault()
    const newPost = {
      it: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNevPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
