export const inputExample = {
  firstName: 'Fred',
  surname: 'Smith',
  age: 28,
  address: {
    street: 'Hursley Park',
    city: 'Winchester',
    postcode: 'SO21 2JN',
  },
  phone: [
    {
      type: 'home',
      number: '0203 544 1234',
    },
    {
      type: 'office',
      number: '01962 001234',
    },
    {
      type: 'office',
      number: '01962 001235',
    },
    {
      type: 'mobile',
      number: '077 7700 1234',
    },
  ],
  email: [
    {
      type: 'work',
      address: ['fred.smith@my-work.com', 'fsmith@my-work.com'],
    },
    {
      type: 'home',
      address: ['freddy@my-social.com', 'frederic.smith@very-serious.com'],
    },
  ],
  other: {
    over18: true,
    misc: null,
    'alternative.address': {
      street: 'Brick Lane',
      city: 'London',
      postcode: 'E1 6RF',
    },
  },
};

export const transformersExample = {
  name: '$.firstName',
  homePhone: "phone[type='home'].number",
  wormEmail: "email[type='work'].address[0]",
};
