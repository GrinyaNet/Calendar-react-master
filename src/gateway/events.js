const baseUrl = 'https://669781f802f3150fb66de387.mockapi.io/users';

export const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2024, 7, 4, 10, 15),
    dateTo: new Date(2024, 7, 4, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2024, 7, 16, 10, 15),
    dateTo: new Date(2024, 7, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2024, 7, 17, 10, 30),
    dateTo: new Date(2024, 7, 17, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2020, 7, 25, 10, 30),
    dateTo: new Date(2020, 7, 25, 11, 0),
  },  
  {
    id: 5,
    title: 'TEST!!!',
    description: 'at the cafe',
    dateFrom: new Date('2024-08-10T12:08'),
    dateTo: new Date('2024-08-10T12:32'),
  },  
];

//export default events;
export const createTask = eventsData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventsData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Faild to create task');
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(tasksList => tasksList.map(({ _id, ...task }) => ({ id: _id, ...task })));
};