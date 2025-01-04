import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/users";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/* {" "}
      {users.length > 0 ? (
        users.map((user, index) => <div key={index}>{JSON.stringify(user)}</div>)
      ) : (
        <p>Loading users...</p>
      )} */}
    </div>
  );
};

export default AdminPanel;
