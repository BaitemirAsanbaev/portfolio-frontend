import "./App.css";
import Certificates from "./components/Certificates/Certificates";
import Contacts from "./components/Contacts/Contacts";
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
      <GigaTitle triple>Certificates</GigaTitle>
      <Certificates/>
      <GigaTitle triple>Contacts</GigaTitle>
      <Contacts/>
    </div>
  );
}

export default App;
