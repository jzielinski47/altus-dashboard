import { useEffect, useState } from "react";
import { getAllUsers } from "../../../../api/users";
import HButton from "../../../../components/Buttons/HButton";
import HUIButton from "../../../../components/Buttons/HUIButton";
import UserRow from "./UserRow";
import { iUser } from "../../../../interfaces";

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

  const headerStyle =
    "whitespace-nowrap px-4 py-2 font-normal text-white/60 hover:text-white/[87%] hover:bg-level-2 hover:cursor-pointer";

  return (
    <div className="w-full h-full flex-grow flex items-center justify-center flex-col gap-5">
      <h2 className="text-lg font-bold text-white/[87%]">List of Altus system users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-border-black text-sm rounded-lg bg-level-0">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2"></th>
              <th className={headerStyle}>Username</th>
              <th className={headerStyle}>Email address</th>
              <th className={headerStyle}>Role</th>
              <th className={headerStyle}>Created</th>
              <th className={headerStyle}>Last login</th>
              <th className={headerStyle}>Status</th>
              <th className="whitespace-nowrap px-4 py-2"></th>
              <th className="whitespace-nowrap px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border-black">
            {users.length > 0 ? (
              users.map((user, index) => <UserRow key={index} user={user} />)
            ) : (
              <p>Loading users...</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
