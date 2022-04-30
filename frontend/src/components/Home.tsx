import React from "react";
import { Link } from "react-router-dom";
import { User } from "./User";

export function Home() {
  let [loading, setLoading] = React.useState(true);
  let [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/users");
      const newData = await response.json();
      setUsers(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Forename</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? users.map((user: User) => (
                <tr key={user.id} className="align-middle">
                  <th>
                    <Link to={`/user/${user.id}`}>
                      <img className="img-thumbnail" src={user.avatar}></img>
                    </Link>
                  </th>
                  <th>{user.first_name}</th>
                  <th>{user.last_name}</th>
                  <th>{user.email}</th>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
