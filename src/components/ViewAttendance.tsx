import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import Loading from "./Loading";
import "react-datepicker/dist/react-datepicker.css";

interface Attendance {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  status: string;
  date: string;
}

const ViewAttendance: React.FC = () => {
  const { state } = useAuthContext();
  const [startDate, setStartDate] = useState<Date>(new Date());
   const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [attendanceData, setAttendanceData] = useState<Attendance[]>([]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  const handleViewAttendance = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/api/attendance/date/${startDate
          .toISOString()
          .slice(0, 10)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.user?.token}`,
          },
        }
      );
      setAttendanceData(response.data);
      setShow(true);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
      setShow(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh]  w-[80%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-400 ubuntu-bold mt-12">
          View Attendance
        </h1>
        <div className="w-[60%] mx-auto flex flex-col gap-9 sm:gap-0 sm:flex-row justify-between items-center">
          <div className="flex gap-2 flex-col -z-10">
            <h1 className="ubuntu-medium text-lg font-bold">Select Date</h1>
            <DatePicker
              className="border-2 border-gray-600 w-[200px] rounded-md text-center p-1 "
              selected={startDate}
              onChange={handleDateChange}
            />
          </div>
          <button
            className="h-[50px] w-[160px] bg-indigo-600 text-white rounded-lg"
            onClick={handleViewAttendance}
          >
            View Attendance
          </button>
        </div>
      </div>
      {show && (
        <div className="mt-[40px]">
          {loading ? (
            <Loading />
          ) : (
            <div className="relative overflow-x-auto max-h-[400px] -z-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((attendance) => (
                    <tr key={attendance._id} className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {attendance.userId.name}
                      </th>
                      <td className="px-6 py-4">{attendance.status}</td>
                      <td className="px-6 py-4">{attendance.userId.email}</td>
                      <td className="px-6 py-4">
                        {attendance.date.toString().slice(0, 10)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {attendanceData.length === 0 ? (
                <div className="text-2xl text-center text-indigo-500 mt-[50px]">
                  No Data Available
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewAttendance;
