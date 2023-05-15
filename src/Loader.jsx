import { Comment } from "react-loader-spinner";
const Loader = (props) => {
  console.log(props.bgColor);
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      position="center"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor={props.bgColor}
    />
  );
};

export default Loader;
