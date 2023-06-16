import { useFetch } from "./hooks/useFetch";

const Users = () => {
  const { data } = useFetch([], "https://jsonplaceholder.typicode.com/users");
  console.log(data);

  return <div>Users</div>;
};

export default Users;
