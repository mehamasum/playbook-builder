export default {
  "$id": "#/properties/brief/properties/field_values",
  "type": "array",
  "title": "Field values",
  "description": "An explanation about the purpose of this instance.",
  "default": [],
  "examples": [
      [
          {
              "label": "Brief",
              "value": [
                  "<p><strong><span style=\"font-size: 24px;\">Swift Steph Basketball High-Top&nbsp;</span></strong><br /><br />We are launching a new product [The Swift High Top] and need to create awareness of the benefits it offers to our customers. The product allows users to [fill in your response here}. We will create awareness by [fill your in response here].</p>"
              ]
          },
          {
              "label": "Goals",
              "value": [
                  "Please edit the examples below to your specific use case:\n          1. Receive more than 10,000 website visits within 2 weeks\n          2. 10% of visitors click on the product\n          3. 20% of visitors who click on the product convert to paid customers"
              ]
          }
      ]
  ],
  "additionalItems": true,
  "items": {
      "$id": "#/properties/brief/properties/field_values/items",
      "type": "object",
      "title": "Field value items",
      "description": "An explanation about the purpose of this instance.",
      "default": {},
      "examples": [
          [
              {
                  "label": "Brief",
                  "value": [
                      "<p><strong><span style=\"font-size: 24px;\">Swift Steph Basketball High-Top&nbsp;</span></strong><br /><br />We are launching a new product [The Swift High Top] and need to create awareness of the benefits it offers to our customers. The product allows users to [fill in your response here}. We will create awareness by [fill your in response here].</p>"
                  ]
              },
              {
                  "label": "Goals",
                  "value": [
                      "Please edit the examples below to your specific use case:\n          1. Receive more than 10,000 website visits within 2 weeks\n          2. 10% of visitors click on the product\n          3. 20% of visitors who click on the product convert to paid customers"
                  ]
              },
              {
                  "label": "Success Metrics",
                  "value": [
                      "Please edit the examples below to your specific use case:\n          1. 10,000 unique visitors\n          2. 1,000 visitors click on the product\n          3. 200 new paid customers"
                  ]
              },
              {
                  "label": "Key Message",
                  "value": [
                      "New tech on high-top basketball sneakers and collaborations/partnership with NBA players"
                  ]
              },
              {
                  "label": "Type of Campaign",
                  "value": [
                      "New Product"
                  ]
              },
              {
                  "label": "Holiday Sale Description",
                  "value": [
                      "New Swift Sneaker and the holiday gift guide"
                  ]
              }
          ]
      ],
      "required": [
          "label",
          "value"
      ],
      "properties": {
          "label": {
              "$id": "#/properties/brief/properties/field_values/items/properties/label",
              "type": "string",
              "title": "Field",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                  "Brief"
              ]
          },
          "value": {
              "$id": "#/properties/brief/properties/field_values/items/properties/value",
              "type": "array",
              "title": "Values",
              "description": "An explanation about the purpose of this instance.",
              "default": [],
              "examples": [
                  [
                      "<p><strong><span style=\"font-size: 24px;\">Swift Steph Basketball High-Top&nbsp;</span></strong><br /><br />We are launching a new product [The Swift High Top] and need to create awareness of the benefits it offers to our customers. The product allows users to [fill in your response here}. We will create awareness by [fill your in response here].</p>"
                  ]
              ],
              "additionalItems": true,
              "items": {
                  "$id": "#/properties/brief/properties/field_values/items/properties/value/items",
                  "type": "string",
                  "title": "Define List of Values",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      [
                          "<p><strong><span style=\"font-size: 24px;\">Swift Steph Basketball High-Top&nbsp;</span></strong><br /><br />We are launching a new product [The Swift High Top] and need to create awareness of the benefits it offers to our customers. The product allows users to [fill in your response here}. We will create awareness by [fill your in response here].</p>"
                      ]
                  ]
              }
          }
      }
  }
}