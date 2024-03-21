import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
interface User {
  name: string;
  email: string;
  _id:string;
}
const Admin = () => {
    const { state } = useAuthContext();
  const [userss, setUsers] = useState<User[]>([]);
   useEffect(() => {
     const fetchUsers = async () => {
       try {
         const response = await axios.get(
           `${import.meta.env.VITE_API}/api/users`,
           {
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${state.user?.token}`,
             },
           }
         );
         setUsers(response.data);
       } catch (error) {
         console.error("Error fetching users:", error);
       }
     };

     fetchUsers();
   }, [state.user?.token]);   

  return (
    <div className="h-[60vh] text-center flex flex-col gap-4">
      <div>
        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-400 ubuntu-bold mt-12">
          All Users ({userss.length})
        </h1>
      </div>
      <div className="sm:w-[40%] mx-auto max-h-[400px] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {userss.map((user, index) => (
            <Link
              to={`/user/${user._id}`}
              key={index}
              className="flex justify-center items-center py-4 px-6"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {index + 1}.
              </h3>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">
                  {user.name}
                </h3>
                <p className="text-gray-600 text-base">{user.email}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
