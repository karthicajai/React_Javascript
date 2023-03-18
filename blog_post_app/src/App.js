import Home from "./components/Home";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import Footer from "./components/Footer";
import About from "./pages/About";
import Missing from "./pages/Missing";
import PostPage from "./pages/PostPage";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { format } from 'date-fns';


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "January 01, 2022 11:17:36 AM",
      body: "Hello world"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "March 18, 2023 4:04:56 PM",
      body: "Hello everyone"
    }
  ])

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');

    const newPost = {id, title: postTitle, datetime, body: postBody};
    const allPosts = [...posts, newPost];

    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const remPosts = posts.filter( post => post.id !== id);
    setPosts(remPosts);
    navigate('/');
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home posts={posts} />} />

        <Route path="post">
          <Route index element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }/>
          <Route path=":id" element={
            <PostPage
              posts={posts}
              handleDelete={handleDelete}
            />}
          />
        </Route> 

        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
