import Post from "./Post";
import Header from "./components/Header";

import './global.css'

export default function App() {

  return (
    <>
      <Header />
      
      <Post
        author="Tiago Cardoso"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam quae saepe nihil aperiam cumque nemo, id animi provident officia! Deserunt adipisci beatae nisi, amet ipsum doloribus officia laboriosam laudantium!"
      />
      <Post
        author="Bruno Perini"
        content="O conhecimento está disperso pela sociedade."
      />
    </>
  )
}