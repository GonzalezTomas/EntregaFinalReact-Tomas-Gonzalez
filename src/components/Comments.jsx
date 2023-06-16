import { useFetch } from "./hooks/useFetch";

const Comments = () => {
  const { data } = useFetch(
    [],
    "https://jsonplaceholder.typicode.com/comments"
  );
  console.log(data);

  return <div>Comments</div>;
};

export default Comments;
