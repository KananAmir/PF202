import './App.css'
import BlogsComponent from './components/Blogs';
import Card from './components/Card';
import Counter from "./components/Counter"
import Layout from './components/Layout';
function App() {

   const blogs = [
    {
      id: 1,
      title: "React Nədir?",
      content: "React, komponent əsaslı frontend kitabxanasıdır...",
      author: "Elvin Məmmədov",
      date: "2024-02-04",
      image: "https://166tech.az/uploads/blogs/45562333.webp"
    },
    {
      id: 2,
      title: "Props Necə İşləyir?",
      content: "Props vasitəsilə komponentlər arasında məlumat ötürülə bilər...",
      author: "Aygün Quliyeva",
      date: "2024-02-03",
      image: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-16-react-props/social-2.png"
    },
    {
      id: 3,
      title: "Componentlərin Üstünlükləri",
      content: "Componentlər kodun təkrar istifadəsinə və daha asan idarə olunmasına imkan yaradır...",
      author: "Nihad Əhmədov",
      date: "2024-02-02",
      image: "https://uploads.toptal.io/blog/image/123159/toptal-blog-image-1495787019340-f5fde535832471deed297a8bf1974e2a.jpg"
    }
  ];


  return (
    <>
    {/* <Counter/> */}
    <BlogsComponent blogs={blogs} />
    {/* <Card cardTitle={"React Props"}>
      <h3>PF202</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus alias laudantium dolor.</p>
    </Card> */}

    {/* <Layout>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At impedit, id harum ipsam tempore sunt?</p>
    </Layout>

    <hr />
    <Layout>
      <aside>left part</aside>
      <section>main section</section>
    </Layout> */}

    </>
  )
}

export default App
