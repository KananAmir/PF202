import './App.css'
import Article from './components/Article'
import Greeting from './components/Greeting'
import ParentComp from './components/Parent'
import Products from './components/Products'
import Users from './components/Users'

function App() {

  let groupName = "PF202"

  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ]


  let username = "Gunel"


  const users = [
  {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    username: "janedoe",
    email: "janedoe@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    username: "michael123",
    email: "michael123@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    username: "sarah_smith",
    email: "sarah_smith@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    username: "alex_dev",
    email: "alex_dev@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    username: "emily99",
    email: "emily99@example.com",
    avatarImage: "https://i.pravatar.cc/150?img=6"
  }
];

  return (
    <>

      <Users users={users}/>
      <hr />
      <ParentComp />

      <hr />
      <Greeting name={"Hazrat"} age={22} />
      <Greeting name={"Teymur"} age={29} />
      <Greeting name={username} age={29} />
      <hr />
      <h2>Banner</h2>
      {/* <img src="https://www.bigscal.com/wp-content/uploads/2024/02/Frontend-Development-Services-714x430.webp" alt="" /> */}
      {/* <img src="/images/frontend.webp" alt="frontend" /> */}
      <img src="/html.png" alt="frontend" />
      <hr />
      <h2>Hello {groupName}!</h2>
      <hr />
      <Article />
      <hr />
      <h3>Web Technologies</h3>
      <ul>
        {webTechs.map((tech, index) => {
          return (<li key={index}>{tech}</li>)
        })}
      </ul>
      <hr />
      {/* <Products/> */}
    </>
  )
}

// function greeting (username){
//   return `Hello ${username}`
// }

// console.log(greeting("John Doe")) // Hello John Doe
// console.log(greeting("Hazrat Karimzada")); // Hello Hazrat Karimzada

export default App
