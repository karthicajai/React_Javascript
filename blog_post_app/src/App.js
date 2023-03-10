import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import Footer from "./components/Footer";
import About from "./pages/About";
import Missing from "./pages/Missing";
import PostPage from "./pages/PostPage";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  
  return (
    <div className="App">
      <Header
        title={"ReactJs Blog"}
      />
      <Nav></Nav>
      <switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/post">
          <NewPost/>
        </Route>
        <Route exact path="/post/:id">
          <PostPage/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="*" component={Missing}/>
      </switch>
      <Footer/>
    </div>
  );
}

export default App;
