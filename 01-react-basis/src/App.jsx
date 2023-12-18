import Post from './components/Post'
import Header from './components/Header'

import styles from './App.module.css'

import './global.css'
import Sidebar from './components/SIdebar'

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Tiago Cardoso"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam quae saepe nihil aperiam cumque nemo, id animi provident officia! Deserunt adipisci beatae nisi, amet ipsum doloribus officia laboriosam laudantium!"
          />
          <Post
            author="Bruno Perini"
            content="O conhecimento está disperso pela sociedade."
          />
        </main>
      </div>
    </>
  )
}
