import "../App.css";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <button className="menu-bnt">⏩</button>
        <h3 className="title">brunch</h3>
        <button className="search-bnt">🔍</button>
      </div>
      <div className="profile">
        <img className="profileImg" src={props.profileImg} />
        <strong className="name">{props.name}</strong>
        <a className="job">{props.job}</a>
        <div className="num">
          <div>
            <a>구독자</a>
            <a className="count">{props.followerNum}</a>
          </div>
          <div>
            <a>관심작가</a>
            <a className="count">{props.followingNum}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
