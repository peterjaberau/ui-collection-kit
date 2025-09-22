const updatedSchema = {
  "root": {
    "namespaces": [
      {
        "name": "demo"
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "ROOT",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$esMYHgZig+Mayv7AtthPTg$pafTBRYnQEE81fo/tl2jk5LWfbyOlChTmmMEcIGSjp0",
        "name": "admin",
        "roles": [
          "OWNER"
        ]
      },
      {
        "base": "ROOT",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$LpESn8BhORDbXbWfsFdfyw$fpps/o08PZpYYKvS1DU42YygG0P61jz21J6IVCzaJjQ",
        "name": "root",
        "roles": [
          "owner"
        ]
      }
    ]
  },
  "namespace": {
    "databases": [
      {
        "name": "demodb"
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$IbmunCHoVt5dbEk9Tu0paA$IMku+Z7vVtPWyp3op33ET+WX5hUaxQHEQpw/E7wa7Vs",
        "name": "Augustus",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$T5FoTP4TSWnclL52kdFReA$UHxvGD1BeRBg0hIB8xs4jzU11QErdQLaL+xBZiBsC7U",
        "name": "Ayesha",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$eCKxhHwYzky12YmkcK0BoA$vN2/MMkFUZZ5lAwHAw+FxCsaR32PIGg8sozr8paJSYU",
        "name": "Bernetta",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$UmS/NwNlND0vmiG+HCq9eg$yclkHYqUJUbHRaavWRg5Pq9gU95AHcIoxsBFo/n0ISA",
        "name": "Dell",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$Tu6TfmpH8Bj9Y2R5DxnxEw$in2hJL5a7NlmXTJnOug5LMNFmQVCpJtqZAyFDZspswc",
        "name": "Delmar",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$Wxy7juKH85zXKU2LYFUGfw$96X0hUvY1QjhSit9NXj/Zt8W0PhprMppglXpZUPeYnk",
        "name": "Jimmie",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YDFF6TgBAFtYRCKG+oKrMw$qf0N693IyFG5pAd6aGVlppXyicv2ewtU85YBd3ScxkA",
        "name": "Maida",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$NyGyyijgPIXzfJ1mS3IiRw$qbSQ2V8cdKy6Z4OwEZ+57wrf7qDb2ntLMotPBM26xfk",
        "name": "Porfirio",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$HW93pNURw0wPECr6o3358Q$5YnAB93YZU7UDUbH9fIOjszgZdlKbLGoRd0wQzSjHp4",
        "name": "Shavonda",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$po66Amv1R08vX0UJ+RjhiQ$0rNI4MMS6u3/K6Me+EIVJuMyou4Pto80rYB8K5M/RhA",
        "name": "Tequila",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$D+4lwMMeU73CJGrIAev0Jw$C/7fkHji7G4nrBp07juxTGvvRPVI6h7wuwMp2WM9bDY",
        "name": "gordon",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "NAMESPACE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$hPkbfttVDwa09oDcW95cUg$4HIAbRIx/oe08+rxnkBlg+1rSvX3d4pXlv6XuT3RVH4",
        "name": "john",
        "roles": [
          "EDITOR"
        ]
      }
    ]
  },
  "database": {
    "tables": [
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "address_history",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "array<object>",
            "name": "addresses",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "addresses[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].address_line_1",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "option<string>",
            "name": "addresses[*].address_line_2",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].city",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "geometry<point>",
            "name": "addresses[*].coordinates",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].country",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "addresses[*].post_code",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "person",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "address_history"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "address_history"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": false,
          "kind": {
            "kind": "ANY"
          },
          "name": "avg_product_review",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "number",
            "name": "avg_review",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "number_of_reviews",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "array<record<product>>",
            "name": "product_id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "product_id[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "avg_product_review"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "cart",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "cart"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "cart"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": false,
          "kind": {
            "kind": "ANY"
          },
          "name": "monthly_sales",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "month",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "number_of_orders",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "sum_sales",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "monthly_sales"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "order",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "order_status",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "payment_method",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "product_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": true,
            "kind": "object",
            "name": "shipping_address",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.processed_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.shipped_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "order"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "order"
          }
        ],
        "indexes": [
          {
            "cols": "order_status, time.created_at",
            "index": "",
            "name": "order_count",
            "what": "order"
          },
          {
            "cols": "product_name",
            "index": "",
            "name": "order_product",
            "what": "order"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "payment_details",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "person",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": true,
            "kind": "array<object>",
            "name": "stored_cards",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": true,
            "kind": "object",
            "name": "stored_cards[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "payment_details"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "payment_details"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "person",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": true,
            "kind": "object",
            "name": "address",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "record<address_history>",
            "name": "address_history",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "option<string>",
            "name": "company_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "assert": "string::is::email($value)",
            "flex": false,
            "kind": "string",
            "name": "email",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "first_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "last_name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "record<payment_details>",
            "name": "payment_details",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "phone",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "person"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "person"
          }
        ],
        "indexes": [
          {
            "cols": "address.country",
            "index": "",
            "name": "person_country",
            "what": "person"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "product",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "category",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "colours",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "colours[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "currency",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "details",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "details[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<object>",
            "name": "images",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "images[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "images[*].position",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "assert": "string::is::url($value)",
            "flex": false,
            "kind": "string",
            "name": "images[*].url",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "price",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "record<seller>",
            "name": "seller",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "array<string>",
            "name": "sizes",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "sizes[*]",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "sub_category",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "product"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "product"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "product_sku",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "number",
            "name": "quantity",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "product_sku"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "product_sku"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "review",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "assert": "$value > 0 AND $value < 6",
            "flex": false,
            "kind": "number",
            "name": "rating",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "review_text",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "review"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "review"
          }
        ],
        "indexes": [
          {
            "cols": "review_text",
            "index": "SEARCH ANALYZER blank_snowball BM25(1.2,0.75) DOC_IDS_ORDER 100 DOC_LENGTHS_ORDER 100 POSTINGS_ORDER 100 TERMS_ORDER 100 DOC_IDS_CACHE 100 DOC_LENGTHS_CACHE 100 POSTINGS_CACHE 100 TERMS_CACHE 100 HIGHLIGHTS",
            "name": "review_content",
            "what": "review"
          }
        ],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "kind": "NORMAL"
          },
          "name": "seller",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": true,
            "kind": "object",
            "name": "addresses",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "email",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "name",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "datetime",
            "name": "time.updated_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "value": "time::now()",
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "website",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.docs",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.main",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "website.store",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "seller"
          }
        ],
        "indexes": [],
        "events": []
      },
      {
        "schema": {
          "drop": false,
          "full": true,
          "kind": {
            "enforced": false,
            "in": [
              "person"
            ],
            "kind": "RELATION",
            "out": [
              "product"
            ]
          },
          "name": "wishlist",
          "permissions": {
            "create": false,
            "delete": false,
            "select": false,
            "update": false
          }
        },
        "fields": [
          {
            "flex": false,
            "kind": "string",
            "name": "colour",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "id",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "record<person>",
            "name": "in",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "record<product>",
            "name": "out",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "string",
            "name": "size",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "object",
            "name": "time",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "default": "time::now()",
            "flex": false,
            "kind": "datetime",
            "name": "time.created_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          },
          {
            "flex": false,
            "kind": "option<datetime>",
            "name": "time.deleted_at",
            "permissions": {
              "create": true,
              "delete": true,
              "select": true,
              "update": true
            },
            "readonly": false,
            "what": "wishlist"
          }
        ],
        "indexes": [
          {
            "cols": "in, out",
            "index": "UNIQUE",
            "name": "unique_wishlist_relationships",
            "what": "wishlist"
          }
        ],
        "events": []
      }
    ],
    "accesses": [],
    "users": [
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$1ZMzsVGNRxAaZAhTZ3Kn0g$sO23Ukw1OVNCQb2T72wNnb5bS6lqhLllmfNzcqwH9i4",
        "name": "Boris",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$AFRMmk2Ny+ZoDdG9U7nOPQ$vsSr2TfQ9K5OUhTjygkWu/Y+8WX/Dns9wfK0rdQ8cnc",
        "name": "Drusilla",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$7WjU9yp/jZ8HWkFT+1jS/Q$4fNHZXjd24crYZDtwZ05Gu3n5YmgcKCiblPiZ8Khq5I",
        "name": "Johnette",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YYcbnPmAaRsxwKq15TxfWw$vmN3L6UIranhmLPjshmHwuPeOkJzKQA0s+aF6iUjdO8",
        "name": "Latrina",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$T0shUKI0+iOzh8LX0PL9xQ$HijtsXSynH2TV23yDgvGnnyFVtsb/I1f309fU0+q5nQ",
        "name": "Leana",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$B2PYNt7rPD1ytSbE1rUAmQ$s3kIK31mf51wkcy0btK0iWVdO8z4/GtrMlrz0fEF4MU",
        "name": "Leigh",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$YL8epQ5oSK4mkK/YK+VRXA$Y3Y20x0kdRXYdDSRsm8aA+SLC7zGAg3WkbnhrEEU8y8",
        "name": "Lewis",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$b2nZIzENV5QVAP64YA6u6Q$/77qLXz8Md46Og6m58qaHaUh1DhMGKTDKzfXepPr0ec",
        "name": "Loree",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$D1NQIJiZ9CSbcJsCHMKz+g$yzKM/KWeu8Abes7mCb+hxWo+op9BxrS3VM4ezAOd/bU",
        "name": "Viki",
        "roles": [
          "VIEWER"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$c8YOGEoGzlzzRxBg/8OiRg$CYDP25Y6QjJuXL5AgftmRX3szV+a3LAP1VbfgPOlHvg",
        "name": "Winfred",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$w7aJ8kpxMxfx747XGr53qQ$Jqep+xksMkeWupiGt03pVpgGrBLHo+46VrvAqx/qgpU",
        "name": "alexa",
        "roles": [
          "EDITOR"
        ]
      },
      {
        "base": "DATABASE",
        "duration": {
          "token": "1h"
        },
        "hash": "$argon2id$v=19$m=19456,t=2,p=1$aZ3gE59dep4Qw9z6z0qEXA$gtEnTtryjFL9LPeqao3nsj0VZUC0lQ8f8nIUU5uvuwA",
        "name": "jane",
        "roles": [
          "VIEWER"
        ]
      }
    ],
    "functions": [
      {
        "args": [],
        "block": "RETURN (SELECT count() FROM order WHERE order_status NOTINSIDE ['processed', 'shipped'] GROUP ALL);",
        "name": "number_of_unfulfilled_orders",
        "permissions": true,
        "comment": "",
        "returns": ""
      },
      {
        "args": [
          [
            "price",
            "number"
          ]
        ],
        "block": "RETURN $price * 1.26f;",
        "name": "pound_to_usd",
        "permissions": true,
        "comment": "",
        "returns": ""
      }
    ],
    "models": [],
    "params": []
  }
}
