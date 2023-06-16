import { useFetch } from "./hooks/useFetch";

const Posts = () => {
  const { data } = useFetch([], "https://jsonplaceholder.typicode.com/posts");
  console.log(data);

  return <div>Posts</div>;
};

export default Posts;
