export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The root schema",
  "description": "The root schema comprises the entire JSON document.",
  "default": {},
  "examples": [
      {
          "description": "",
          "endDate": "1 month",
          "startDate": "2 days",
          "parentCampaign": "Sample: Product Launch 2021 - Swift Sneaker",
          "title": "Basketball Subcampaign",
          "labels": [
              "USA",
              "18-40 year olds"
          ],
          "brief": {
              "templateName": "Campaign Brief",
              "title": "Brief - Basketball",
              "field_values": [
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
          }
      }
  ],
  "required": [
      "description",
      "endDate",
      "startDate",
      "title",
      "labels",
  ],
  "properties": {
      "description": {
          "$id": "#/properties/description",
          "type": "string",
          "title": "The description schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              ""
          ]
      },
      "endDate": {
          "$id": "#/properties/endDate",
          "type": "string",
          "title": "The endDate schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "1 month"
          ]
      },
      "startDate": {
          "$id": "#/properties/startDate",
          "type": "string",
          "title": "The startDate schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "2 days"
          ]
      },
      "parentCampaign": {
          "$id": "#/properties/parentCampaign",
          "type": "string",
          "title": "The parentCampaign schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Sample: Product Launch 2021 - Swift Sneaker"
          ]
      },
      "title": {
          "$id": "#/properties/title",
          "type": "string",
          "title": "The title schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Basketball Subcampaign"
          ]
      },
      "labels": {
          "$id": "#/properties/labels",
          "type": "array",
          "title": "The labels schema",
          "description": "An explanation about the purpose of this instance.",
          "default": [],
          "examples": [
              [
                  "USA",
                  "18-40 year olds"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/labels/items",
              "type": "string",
              "title": "The items schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                  [
                      "USA",
                      "18-40 year olds"
                  ]
              ]
          }
      },
      "brief": {
          "$id": "#/properties/brief",
          "type": "null", // TODO: "object"
          "title": "The brief schema",
          "description": "An explanation about the purpose of this instance.",
          "default": null,
          "examples": [
              {
                  "templateName": "Campaign Brief",
                  "title": "Brief - Basketball",
                  "field_values": [
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
              }
          ],
          "required": [
              "templateName",
              "title",
              "field_values"
          ],
          "properties": {
              "templateName": {
                  "$id": "#/properties/brief/properties/templateName",
                  "type": "string",
                  "title": "The templateName schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "Campaign Brief"
                  ]
              },
              "title": {
                  "$id": "#/properties/brief/properties/title",
                  "type": "string",
                  "title": "The title schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "Brief - Basketball"
                  ]
              },
              "field_values": {
                  "$id": "#/properties/brief/properties/field_values",
                  "type": "array",
                  "title": "The field_values schema",
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
                      "title": "The items schema",
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
                              "title": "The label schema",
                              "description": "An explanation about the purpose of this instance.",
                              "default": "",
                              "examples": [
                                  "Brief"
                              ]
                          },
                          "value": {
                              "$id": "#/properties/brief/properties/field_values/items/properties/value",
                              "type": "array",
                              "title": "The value schema",
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
                                  "title": "The items schema",
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
          }
      }
  }
};