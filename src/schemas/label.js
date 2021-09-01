export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "Label Groups and Labels",
  "description": "Add Label Groups and their Labels here",
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
    "label_type": {
        "$id": "#/properties/label_type",
        "type": "string",
        "title": "Label Group",
        "description": "Add the name of the label group. example: target_audience",
        "default": "",
        "examples": [
            "target_audience"
        ]
    },
      "has_single_value": {
          "$id": "#/properties/has_single_value",
          "type": "boolean",
          "title": "Single Select",
          "description": "An explanation about the purpose of this instance.",
          "default": false,
          "examples": [
              false
          ]
      },
      
      "labels": {
          "$id": "#/properties/labels",
          "type": "array",
          "title": "Labels",
          "description": "Labels under this group",
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
                      "title": "Label",
                      "description": "example: 18-40 year olds",
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