export default {
  "$id": "#/properties/labels",
  "type": "array",
  "title": "Labels",
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
      "title": "Label",
      "description": "You need to define these labels under some label types",
      "default": "",
      "examples": [
          [
              "USA",
              "18-40 year olds"
          ]
      ]
  }
};