const data = [
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'array<object>',
          name: 'addresses',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'object',
          name: 'addresses[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'string',
          name: 'addresses[*].address_line_1',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'option<string>',
          name: 'addresses[*].address_line_2',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'string',
          name: 'addresses[*].city',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'geometry<point>',
          name: 'addresses[*].coordinates',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'string',
          name: 'addresses[*].country',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'string',
          name: 'addresses[*].post_code',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'person',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'address_history'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'address_history'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '4.834959ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'number',
          name: 'avg_review',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'number',
          name: 'number_of_reviews',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'array<record<product>>',
          name: 'product_id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'product_id[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'array<string>',
          name: 'product_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        },
        {
          flex: false,
          kind: 'string',
          name: 'product_name[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'avg_product_review'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '4.021916ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'colour',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'string',
          name: 'currency',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'in',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'out',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'number',
          name: 'price',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'string',
          name: 'product_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'number',
          name: 'quantity',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'string',
          name: 'size',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'cart'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'cart'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '2.042625ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'currency',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'monthly_sales'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'monthly_sales'
        },
        {
          flex: false,
          kind: 'string',
          name: 'month',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'monthly_sales'
        },
        {
          flex: false,
          kind: 'number',
          name: 'number_of_orders',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'monthly_sales'
        },
        {
          flex: false,
          kind: 'number',
          name: 'sum_sales',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'monthly_sales'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '2.074042ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'colour',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'currency',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'in',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'order_status',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'out',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'payment_method',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'number',
          name: 'price',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'product_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'number',
          name: 'quantity',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: true,
          kind: 'object',
          name: 'shipping_address',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'string',
          name: 'size',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'option<datetime>',
          name: 'time.processed_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'option<datetime>',
          name: 'time.shipped_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'order'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'order'
        }
      ],
      indexes: [
        {
          cols: 'order_status, time.created_at',
          index: '',
          name: 'order_count',
          what: 'order'
        },
        {
          cols: 'product_name',
          index: '',
          name: 'order_product',
          what: 'order'
        }
      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '6.244417ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'person',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          flex: true,
          kind: 'array<object>',
          name: 'stored_cards',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          flex: true,
          kind: 'object',
          name: 'stored_cards[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'payment_details'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'payment_details'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '1.000417ms'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: true,
          kind: 'object',
          name: 'address',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'record<address_history>',
          name: 'address_history',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'option<string>',
          name: 'company_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          assert: 'string::is::email($value)',
          flex: false,
          kind: 'string',
          name: 'email',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'string',
          name: 'first_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'string',
          name: 'last_name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'string',
          name: 'name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'record<payment_details>',
          name: 'payment_details',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'string',
          name: 'phone',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'person'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'person'
        }
      ],
      indexes: [
        {
          cols: 'address.country',
          index: '',
          name: 'person_country',
          what: 'person'
        }
      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '582.708µs'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'category',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'array<string>',
          name: 'colours',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'colours[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'currency',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'array<string>',
          name: 'details',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'details[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'array<object>',
          name: 'images',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'object',
          name: 'images[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'number',
          name: 'images[*].position',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          assert: 'string::is::url($value)',
          flex: false,
          kind: 'string',
          name: 'images[*].url',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'number',
          name: 'price',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'record<seller>',
          name: 'seller',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'array<string>',
          name: 'sizes',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'sizes[*]',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'string',
          name: 'sub_category',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'product'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '609.75µs'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'colour',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'in',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'out',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'number',
          name: 'quantity',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'string',
          name: 'size',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'product_sku'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'product_sku'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '556.167µs'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'in',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'out',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          assert: '$value > 0 AND $value < 6',
          flex: false,
          kind: 'number',
          name: 'rating',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          flex: false,
          kind: 'string',
          name: 'review_text',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'review'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'review'
        }
      ],
      indexes: [
        {
          cols: 'review_text',
          index: 'SEARCH ANALYZER blank_snowball BM25(1.2,0.75) DOC_IDS_ORDER 100 DOC_LENGTHS_ORDER 100 POSTINGS_ORDER 100 TERMS_ORDER 100 DOC_IDS_CACHE 100 DOC_LENGTHS_CACHE 100 POSTINGS_CACHE 100 TERMS_CACHE 100 HIGHLIGHTS',
          name: 'review_content',
          what: 'review'
        }
      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '685.833µs'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: true,
          kind: 'object',
          name: 'addresses',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'email',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'name',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'datetime',
          name: 'time.updated_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          value: 'time::now()',
          what: 'seller'
        },
        {
          flex: false,
          kind: 'object',
          name: 'website',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'website.docs',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'website.main',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        },
        {
          flex: false,
          kind: 'string',
          name: 'website.store',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'seller'
        }
      ],
      indexes: [

      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '666.625µs'
  },
  {
    success: true,
    result: {
      events: [

      ],
      fields: [
        {
          flex: false,
          kind: 'string',
          name: 'colour',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'string',
          name: 'id',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'record<person>',
          name: 'in',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'record<product>',
          name: 'out',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'string',
          name: 'size',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'object',
          name: 'time',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          default: 'time::now()',
          flex: false,
          kind: 'datetime',
          name: 'time.created_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        },
        {
          flex: false,
          kind: 'option<datetime>',
          name: 'time.deleted_at',
          permissions: {
            create: true,
            delete: true,
            select: true,
            update: true
          },
          readonly: false,
          what: 'wishlist'
        }
      ],
      indexes: [
        {
          cols: 'in, out',
          index: 'UNIQUE',
          name: 'unique_wishlist_relationships',
          what: 'wishlist'
        }
      ],
      lives: [

      ],
      tables: [

      ]
    },
    'execution_time': '655.834µs'
  }
]
