export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The root schema",
  "description": "The root schema comprises the entire JSON document.",
  "default": {},
  "examples": [
      {
          "has_single_value": false,
          "label_type": "target_audience",
          "labels": [
              {
                  "label": "18-40 year olds"
              },
              {
                  "label": "40-60 year olds"
              },
              {
                  "label": "Gym Enthusiast"
              },
              {
                  "label": "Income <$100K"
              },
              {
                  "label": "Income >$100K"
              },
              {
                  "label": "Marathoner"
              },
              {
                  "label": "Men"
              },
              {
                  "label": "Millennials"
              },
              {
                  "label": "Weekend Warrior"
              },
              {
                  "label": "Women"
              }
          ]
      }
  ],
  "required": [
      "has_single_value",
      "label_type",
      "labels"
  ],
  "properties": {
      "has_single_value": {
          "$id": "#/properties/has_single_value",
          "type": "boolean",
          "title": "The has_single_value schema",
          "description": "An explanation about the purpose of this instance.",
          "default": false,
          "examples": [
              false
          ]
      },
      "label_type": {
          "$id": "#/properties/label_type",
          "type": "string",
          "title": "The label_type schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "target_audience"
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
                  {
                      "label": "18-40 year olds"
                  },
                  {
                      "label": "40-60 year olds"
                  }
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/labels/items",
              "type": "object",
              "title": "The items schema",
              "description": "An explanation about the purpose of this instance.",
              "default": {},
              "examples": [
                  [
                      {
                          "label": "18-40 year olds"
                      },
                      {
                          "label": "40-60 year olds"
                      },
                      {
                          "label": "Gym Enthusiast"
                      },
                      {
                          "label": "Income <$100K"
                      },
                      {
                          "label": "Income >$100K"
                      },
                      {
                          "label": "Marathoner"
                      },
                      {
                          "label": "Men"
                      },
                      {
                          "label": "Millennials"
                      },
                      {
                          "label": "Weekend Warrior"
                      },
                      {
                          "label": "Women"
                      }
                  ]
              ],
              "required": [
                  "label"
              ],
              "properties": {
                  "label": {
                      "$id": "#/properties/labels/items/properties/label",
                      "type": "string",
                      "title": "The label schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "examples": [
                          "18-40 year olds"
                      ]
                  }
              }
          }
      }
  }
};