export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The root schema",
  "description": "The root schema comprises the entire JSON document.",
  "default": {},
  "examples": [
      {
          "type": "multi_select_dropdown",
          "label": "Department",
          "choices": [
              {
                  "label": "Accounting and Finance"
              },
              {
                  "label": "Administration and Legal"
              },
              {
                  "label": "Call Center"
              },
              {
                  "label": "Customer Service"
              },
              {
                  "label": "Digital Marketing"
              },
              {
                  "label": "Engineering"
              },
              {
                  "label": "Field Marketing"
              },
              {
                  "label": "Human Resources"
              },
              {
                  "label": "IT"
              },
              {
                  "label": "Product"
              },
              {
                  "label": "Product Marketing"
              },
              {
                  "label": "Sales"
              }
          ]
      }
  ],
  "required": [
      "type",
      "label",
      "choices"
  ],
  "properties": {
      "type": {
          "$id": "#/properties/type",
          "type": "string",
          "title": "Type",
          "description": "An explanation about the purpose of this instance.",
          "default": "string",
          "enum": [
              "textarea",
              "multichoice",
              "date",
              "string",
              "multi_select_dropdown",
              "rich_text_field",
              "dropdown",
              "date"
          ],
          "examples": [
              "multi_select_dropdown"
          ]
      },
      "label": {
          "$id": "#/properties/label",
          "type": "string",
          "title": "The label schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Department"
          ]
      },
      "choices": {
          "$id": "#/properties/choices",
          "type": "array",
          "title": "The choices schema",
          "description": "An explanation about the purpose of this instance.",
          "default": [],
          "examples": [
              [
                  {
                      "label": "Accounting and Finance"
                  },
                  {
                      "label": "Administration and Legal"
                  }
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/choices/items",
              "type": "object",
              "title": "The items schema",
              "description": "An explanation about the purpose of this instance.",
              "default": {},
              "examples": [
                  [
                      {
                          "label": "Accounting and Finance"
                      },
                      {
                          "label": "Administration and Legal"
                      },
                      {
                          "label": "Call Center"
                      },
                      {
                          "label": "Customer Service"
                      },
                      {
                          "label": "Digital Marketing"
                      },
                      {
                          "label": "Engineering"
                      },
                      {
                          "label": "Field Marketing"
                      },
                      {
                          "label": "Human Resources"
                      },
                      {
                          "label": "IT"
                      },
                      {
                          "label": "Product"
                      },
                      {
                          "label": "Product Marketing"
                      },
                      {
                          "label": "Sales"
                      }
                  ]
              ],
              "required": [
                  "label"
              ],
              "properties": {
                  "label": {
                      "$id": "#/properties/choices/items/properties/label",
                      "type": "string",
                      "title": "The label schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "examples": [
                          "Accounting and Finance"
                      ]
                  }
              }
          }
      }
  }
}