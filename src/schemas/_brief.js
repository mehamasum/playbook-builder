import fieldValuesSchema from './_field_values';

export default {
  "$id": "#/properties/brief",
  "type": "object", // TODO: "object"
  "title": "Brief",
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
          "title": "Template name",
          "description": "You need to define a template for this campaign with same name",
          "default": "",
          "examples": [
              "Campaign Brief"
          ]
      },
      "title": {
          "$id": "#/properties/brief/properties/title",
          "type": "string",
          "title": "Brief Title",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Brief - Basketball"
          ]
      },
      "field_values": fieldValuesSchema
  }
}