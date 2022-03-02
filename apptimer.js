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
// console.log(futureDate);


const year = futureDate.getFullYear();
const hours = futureDate.getHours(); 
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


discount.textContent = `Discount ends on ${weekday} ${month} ${year} ${hours}: ${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
//   console.log(t)

// values in ms
const oneDay = 24*60*60*1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
// calculate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

// set values array;
const values = [days,hours,minutes,seconds];

function format(item){
  if(item < 10){
    return item = `0${item}`
  }
  return item;
}

items.forEach(function(item,index){
  item.innerHTML = format(values[index]);
});
}
// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime()