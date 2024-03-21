import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


interface AttendanceDataa {
  _id: string;
  userId: string;
  status: string;
  date: string;
  __v: number;
}


const UserAttendance: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [attendance, setAttendance] = useState<AttendanceDataa[]>([]);
  const { state } = useAuthContext();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
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

  const handleUserChange = (userId: string) => {
    setSelectedUserId(userId);
  };

  const fetchAttendance = async () => {
    try {
      const response = await axios.get<AttendanceDataa[]>(
        `${import.meta.env.VITE_API}/api/attendance/${selectedUserId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.user?.token}`,
          },
        }
      );
      setAttendance(response.data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => handleUserChange(e.target.value)}
        value={selectedUserId}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name} - {user.email}
          </option>
        ))}
      </select>
      <button onClick={fetchAttendance} disabled={!selectedUserId}>
        Show Attendance
      </button>
      <ul>
        {attendance.map((entry) => (
          <li key={entry._id}>
            Date: {entry.date}, Status: {entry.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAttendance;
