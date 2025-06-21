# To-Do-Website

This project is a simple and interactive To-Do List web application with a dynamic background that changes based on the time of day. It also includes a loader animation before displaying the main content.

## Demo
![Image](https://github.com/addresskrish/To-Do-Website/blob/main/images/TO-DO-B.png)

## Features
- **Live Clock**: Displays current time in `HH:MM AM/PM` format.
- **Day Indicator**: Shows the current day of the week.
- **Dynamic Background**: The background changes according to the time of day (Sunrise, Morning, Sunset, Night).
- **To-Do List Functionality**: Users can add, mark as completed, and delete tasks.
- **Smooth UI**: Includes an animated loader before the page content appears.

## How It Works
1. **Loading Animation**
   - Initially, a spinner loader is displayed.
   - Once all background images are preloaded, the main page appears.

2. **Clock and Background Update**
   - The clock updates every second.
   - Background images change dynamically based on the time:
     - **4 AM - 6 AM** → Sunrise
     - **7 AM - 3 PM** → Morning
     - **4 PM - 6 PM** → Sunset
     - **7 PM - 3 AM** → Night

3. **To-Do List Functionalities**
   - Users can add tasks using the input field and `+` button.
   - Clicking a task marks it as completed (strikethrough effect).
   - Double-clicking removes the task.
