
# MediCare

React-based web application that allows users to find medical centers in a specific state and city across the country and book appointments and avail facilities.





## User Interface

### Landing Page:

- A top navigation bar with access to platform sections such as Find Doctors, Hospitals, Medicines, and more.
- A search section for users to select a state and city, leading to a list of available medical centers in the chosen area.
- Both State and City have a dropdown where the options will be fetched from an api which is provided in the description below.


#### Hero section to select state and city
![landing1](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-page1.jpg?raw=true)

---

#### Specializations available
![landing2](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-page2.jpg?raw=true)

---

#### Blogs and overall consumers
![landing3](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-page3.jpg?raw=true)

---

#### Download app and footer section
![landing4](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-page4.jpg?raw=true)


### Slot Booking:
- A detailed booking section for users to select a medical center, with a calendar-like interface to choose an appointment date.
- The ability to book an appointment within a time frame from today up to one week in advance.
- A selection of available time slots for the selected day.

---
#### All available hospitals in the city
![booking1](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-search1.jpg?raw=true)

---

#### Select date and slot time
![booking1](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-search2.jpg?raw=true)

---

#### Make the booking using mail
![booking1](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-search3.jpg?raw=true)


### Past Bookings Page:

- A personalized page displaying all user bookings, including details such as the medical center's name, appointment date, and time.
![booking1](https://github.com/Apoorv0503/MediCare/blob/main/demo-img/medify-booking1.jpg?raw=true)
## API Reference

#### Get all states

```http
  GET https://meddata-backend.onrender.com/states
```


#### Get a particular City of a state

```http
  GET https://meddata-backend.onrender.com/cities/:state
```

#### Get a list of all medical centers based on a state and city

```http
  https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>
```

