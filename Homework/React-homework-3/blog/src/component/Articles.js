const Articles = (props) => {
  let imgList = props.imgPost,
    title = props.title;
  let articles = imgList.map((img, i) => {
    return <Article imgPost={img} title={title[i]}></Article>;
  });
  return <>{articles}</>;
};

const Article = (props) => {
  return (
    <div className="posting">
      <img src={props.imgPost}></img>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Articles;
