import React from "react";
import { Link, useParams } from "react-router-dom";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export function User() {
  let params = useParams();

  let [loading, setLoading] = React.useState(true);
  let [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/users/${params.id}`);
      const newData = await response.json();
      setUser(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Link to="/">Home</Link>
      {!loading && user ? (
        <div className="card" style={{ width: "13rem" }}>
          <img src={user.avatar} className="card-img-top img-thumbnail"></img>
          <div className="card-body">
            <h5 className="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <p className="card-text">{user.email}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
