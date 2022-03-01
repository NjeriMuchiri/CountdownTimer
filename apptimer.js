const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",,
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const discount = document.querySelector('.discount');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2022, 2, 24, 21, 30, 0);

const year = futureDate.getFullYear();

discount.textContent = `Discount ends on ${year}`;