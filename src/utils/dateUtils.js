export const getWeekStartDate = (date, n) => {
  const dateCopy = new Date(date);  
  const dayOfWeek = dateCopy.getDay();  
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

      //console.log(difference);

  const monday = new Date(dateCopy.setDate(date.getDate() + difference + n));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

 export const monthShift = (date, n) => {
  let currDate = new Date(date);  
  let ferstMonthDay = getWeekStartDate(currDate, n); // первый день недели (дата полная)
  let lastMonthDay = getWeekStartDate(currDate, n + 6); // последний день недели (дата полная)
  
  let firstDay = ferstMonthDay.getDate(); //первый день недели (число)

  let lastDay = lastMonthDay.getDate(); //последний день недели (число)
  let newMonth = ferstMonthDay.getMonth(); //месяц первого деня недели (число)

  
  currDate = new Date(currDate.setDate(currDate.getDate() + n));
  
  
  return [
    firstDay,
    lastDay,
    newMonth,
    currDate   
  ];
 };

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
