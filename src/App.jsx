import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./component/UserList";
import { UserData } from "./data";
import LoaderHoc from "./shared/LoaderHoc";
function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const UserListWithLoader = LoaderHoc(UserList);

  useEffect(() => {
    setTimeout(() => {
      setUsers(UserData); // mimic api call
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="container">
      <h5 className="text-center no-margin-bottom">Higer Order Component</h5>
      <UserListWithLoader isLoading={isLoading} users={users} />
    </div>
  );
}

export default App;
