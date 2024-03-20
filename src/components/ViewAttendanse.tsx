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
      <div>
        <div className="w-[60%] mx-auto flex justify-between">
          <div>
            <h1>Select Date</h1>
            <DatePicker selected={startDate} onChange={handleDateChange} />
          </div>
          <button onClick={handleViewAttendance}>View Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default ViewAttendanse;
