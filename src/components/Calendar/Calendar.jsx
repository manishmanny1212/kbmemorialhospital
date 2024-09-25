import DaySelector from "./DaySelector/DaySelector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

export default function Calendar({ availableSlots, details, handleBooking }) {

  // initialized the selectedDate with the start of the current date, now by default the todays date will be selected
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}


/*
Notes:

1. The startOfDay function from the date-fns library is used to get the start of the day for a given date. 
   The "start of the day" is typically defined as midnight (00:00:00) on that date.

eg:-
const now = new Date();
const startOfToday = startOfDay(now);

console.log(startOfToday);
O/P: Wed May 22 2024 00:00:00 GMT+0530 (India Standard Time)

*/