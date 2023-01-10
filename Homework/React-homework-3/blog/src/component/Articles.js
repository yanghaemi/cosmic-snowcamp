const Articles = (props) => {
  let articleList = props.items;
  let articles = articleList.map((article, i) => {
    return (
      <div className="item">
        <Article
          src={article.src}
          imgPost={article.imgSrc}
          title={article.title}
          preview={article.preview}
          createDate={article.createDate}
        ></Article>
      </div>
    );
  });
  return <>{articles}</>;
};

const Article = (props) => {
  return (
    <>
      <a href={props.src} className="textColor">
        <img src={props.imgPost}></img>
        <h3 className="titlePost">{props.title}</h3>
        <p>{props.preview}</p>
        <p>{props.createDate}</p>
      </a>
    </>
  );
};

export default Articles;
