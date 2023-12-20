import Post from './components/Post'
import Header from './components/Header'

import styles from './App.module.css'

import './global.css'
import Sidebar from './components/SIdebar'

// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/zatiro.png',
      name: 'Tiago Cardoso',
      role: 'Tech Lead @Embraer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-12-17 21:55:46'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-12-18 21:55:46'),
  },
]

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          ))}
        </main>
      </div>
    </>
  )
}
