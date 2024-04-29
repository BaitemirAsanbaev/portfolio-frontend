import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import GigaTitle from "./components/GigaTitle/GigaTitle";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/v1/post/all").then((res) => {
  //     setPosts(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  // console.log(posts);
  return (
    <div className="App">
      <Header/>
      <GigaTitle>Fullstack developer</GigaTitle>
      <Gallery/>
      <GigaTitle triple>Projects</GigaTitle>
      <Projects/>
    </div>
  );
}

export default App;
