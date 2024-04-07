import "./App.css";
import GigaTitle from "./components/GigaTitle/GigaTitle";
import Header from "./components/Header/Header";

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
      {/* <div>
        {posts.map((item, id) => {
          const base64String = btoa(
            String.fromCharCode.apply(null, item.image.buffer.data)
          );

          return (
            <div key={id}>
              <img
                src={`data:${item.image.encoding};base64,${base64String}`}
                alt="img"
                width={300}
              />
              <p>{item.text}</p>
              <p>{item.description}</p>
              <a href={item.githubLink}>github</a>
              <br />
              <a href={item.siteLink}>site</a>
              <div>
                {item.tags.map((item) => {
                  return <small>{item}</small>;
                })}
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
