import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ViewAttendanse: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  const handleViewAttendance = () => {
    // Implement your logic to view attendance based on the selected date
  };

  return (
    <div className="h-[70vh] w-[80%] mx-auto">
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
    </div>
  );
};

export default ViewAttendanse;
