import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Attendance {
  id: number;
  userName: string;
  status: string;
  email: string;
  date: string;
}

const ViewAttendanse: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [show , setShow] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  const handleViewAttendance = () => {
    setShow(!show)
  };

  // Dummy array of attendance data
  const dummyData: Attendance[] = [
    {
      id: 1,
      userName: "Puskar",
      status: "Absent",
      email: "fake@gmail.com",
      date: "10/05/28",
    },
    {
      id: 2,
      userName: "John Doe",
      status: "Present",
      email: "john.doe@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    {
      id: 3,
      userName: "Jane Smith",
      status: "Absent",
      email: "jane.smith@example.com",
      date: "10/05/28",
    },
    
  ];

  return (
    <div className="min-h-[70vh]  w-[80%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-400 ubuntu-bold mt-12">
          View Attendance
        </h1>
        <div className="w-[60%] mx-auto flex flex-col gap-9 sm:gap-0 sm:flex-row justify-between items-center">
          <div className="flex gap-2 flex-col">
            <h1 className="ubuntu-medium text-lg font-bold">Select Date</h1>
            <DatePicker
              className="border-2 border-gray-600 w-[200px] rounded-md text-center p-1"
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
      {show && (<div className="mt-[40px]">
        <div className="relative overflow-x-auto max-h-[400px]">
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
              {dummyData.map((attendance) => (
                <tr key={attendance.id} className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {attendance.userName}
                  </th>
                  <td className="px-6 py-4">{attendance.status}</td>
                  <td className="px-6 py-4">{attendance.email}</td>
                  <td className="px-6 py-4">{attendance.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>)}
    </div>
  );
};

export default ViewAttendanse;
