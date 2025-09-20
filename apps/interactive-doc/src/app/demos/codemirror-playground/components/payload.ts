// In app/components/playground/payload.ts

export const defaultPayload: any = {
  data: {
    user: {
      id: "a1b2c3d4",
      profile: {
        firstName: "Alex",
        lastName: "Garcia",
        age: 34,
        isVerified: true,
        lastLogin: "2025-09-20T22:15:00.000Z",
        tags: ["developer", "jsonata", "xstate", "react"],
      },
      contact: {
        primaryEmail: "alex.garcia@example.com",
        secondaryEmail: null,
        phones: [
          { type: "mobile", number: "555-0101", ext: null },
          { type: "work", number: "555-0102", ext: "x123" },
        ],
      },
    },
    orders: [
      {
        orderId: "ord001",
        date: "2025-08-15",
        total: 150.75,
        shipped: true,
        items: [
          { sku: "SKU01", name: "XState T-Shirt", quantity: 2, price: 25.0 },
          { sku: "SKU02", name: "React Mug", quantity: 1, price: 15.5 },
          { sku: "SKU03", name: "Code Editor Pro", quantity: 1, price: 85.25 },
        ],
      },
      {
        orderId: "ord002",
        date: "2025-09-01",
        total: 45.0,
        shipped: false,
        items: [
          { sku: "SKU01", name: "XState T-Shirt", quantity: 1, price: 25.0 },
          { sku: "SKU04", name: "JSONata Stickers", quantity: 2, price: 10.0 },
        ],
      },
    ],
    metadata: {
      source: "web-app",
      apiVersion: "v2.1",
      traceId: "xyz-987-654",
    },
  },
  expressions: {
    getFullName: {
      name: "Get User Full Name",
      description: "Concatenates the user's first and last name.",
      expression: "user.profile.firstName & ' ' & user.profile.lastName"
    },
    getShippedOrderSummaries: {
      name: "Shipped Order Summaries",
      description: "Filters for shipped orders and creates a summary.",
      expression: "orders[shipped=true].{\"ID\": orderId, \"Date\": date, \"NumberOfItems\": $count(items)}"
    },
    getInventoryReport: {
      name: "Get Inventory Report",
      description: "Creates a distinct list of all items ever ordered.",
      expression: "orders.items.{\"Item\": name, \"SKU\": sku} ~> $distinct()"
    }
  }
};


export const jsonataData: any = {
  data: {
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
  },

  expressions: {
    name: '$.firstName',
    homePhone: "phone[type='home'].number",
    wormEmail: "email[type='work'].address[0]",
  }

}
