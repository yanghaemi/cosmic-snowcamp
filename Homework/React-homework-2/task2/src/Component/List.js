const List = (props) => {
  {
    props.data.map((a, i) => {
      <div>{a.DESC_KOR}</div>;
    });
  }
};

export default List;
