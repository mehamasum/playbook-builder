export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://example.com/example.json",
  "type": "object",
  "title": "The root schema",
  "description": "The root schema comprises the entire JSON document.",
  "default": {},
  "examples": [
      {
          "name": "Marketing Material Request",
          "description": "Please fill out this form to request marketing materials",
          "types": [
              "work_request"
          ],
          "is_active": true,
          "form_fields": [
              {
                  "field_type": "custom_field",
                  "label": "Department",
                  "is_required": true,
                  "sort_order": 0,
                  "help": "Please add which department you are associated with"
              },
              {
                  "identifier": "brief_description",
                  "field_type": "system_field",
                  "is_required": true,
                  "sort_order": 1,
                  "help": "Please describe, in as much detail as possible, what kind of marketing materials you need"
              },
              {
                  "identifier": "attachment",
                  "field_type": "system_field",
                  "is_required": false,
                  "sort_order": 2,
                  "help": ""
              },
              {
                  "field_type": "label",
                  "label": "Content Format",
                  "is_required": true,
                  "sort_order": 4,
                  "help": "What content formats do you need?"
              },
              {
                  "identifier": "due_date",
                  "field_type": "system_field",
                  "is_required": true,
                  "sort_order": 5
              },
              {
                  "field_type": "custom_field",
                  "label": "Business Segments Description",
                  "is_required": false,
                  "sort_order": 6,
                  "help": "What business segments will this be used for?"
              }
          ]
      }
  ],
  "required": [
      "name",
      "description",
      "types",
      "is_active",
      "form_fields"
  ],
  "properties": {
      "name": {
          "$id": "#/properties/name",
          "type": "string",
          "title": "The name schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Marketing Material Request"
          ]
      },
      "description": {
          "$id": "#/properties/description",
          "type": "string",
          "title": "The description schema",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
              "Please fill out this form to request marketing materials"
          ]
      },
      "types": {
          "$id": "#/properties/types",
          "type": "array",
          "title": "The types schema",
          "description": "An explanation about the purpose of this instance.",
          "default": [],
          "examples": [
              [
                  "work_request"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/types/items",
              "type": "string",
              "title": "The items schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                  [
                      "work_request"
                  ]
              ]
          }
      },
      "is_active": {
          "$id": "#/properties/is_active",
          "type": "boolean",
          "title": "The is_active schema",
          "description": "An explanation about the purpose of this instance.",
          "default": false,
          "examples": [
              true
          ]
      },
      "form_fields": {
          "$id": "#/properties/form_fields",
          "type": "array",
          "title": "The form_fields schema",
          "description": "An explanation about the purpose of this instance.",
          "default": [],
          "examples": [
              [
                  {
                      "field_type": "custom_field",
                      "label": "Department",
                      "is_required": true,
                      "sort_order": 0,
                      "help": "Please add which department you are associated with"
                  },
                  {
                      "identifier": "brief_description",
                      "field_type": "system_field",
                      "is_required": true,
                      "sort_order": 1,
                      "help": "Please describe, in as much detail as possible, what kind of marketing materials you need"
                  }
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/form_fields/items",
              "type": "object",
              "title": "The items schema",
              "description": "An explanation about the purpose of this instance.",
              "default": {},
              "examples": [
                  [
                      {
                          "field_type": "custom_field",
                          "label": "Department",
                          "is_required": true,
                          "sort_order": 0,
                          "help": "Please add which department you are associated with"
                      },
                      {
                          "identifier": "brief_description",
                          "field_type": "system_field",
                          "is_required": true,
                          "sort_order": 1,
                          "help": "Please describe, in as much detail as possible, what kind of marketing materials you need"
                      },
                      {
                          "identifier": "attachment",
                          "field_type": "system_field",
                          "is_required": false,
                          "sort_order": 2,
                          "help": ""
                      },
                      {
                          "field_type": "label",
                          "label": "Content Format",
                          "is_required": true,
                          "sort_order": 4,
                          "help": "What content formats do you need?"
                      },
                      {
                          "identifier": "due_date",
                          "field_type": "system_field",
                          "is_required": true,
                          "sort_order": 5
                      },
                      {
                          "field_type": "custom_field",
                          "label": "Business Segments Description",
                          "is_required": false,
                          "sort_order": 6,
                          "help": "What business segments will this be used for?"
                      }
                  ]
              ],
              "required": [
                  "field_type",
                  "label",
                  "is_required",
                  "sort_order",
                  "help"
              ],
              "properties": {
                  "field_type": {
                      "$id": "#/properties/form_fields/items/properties/field_type",
                      "type": "string",
                      "title": "The field_type schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "examples": [
                          "custom_field"
                      ]
                  },
                  "label": {
                      "$id": "#/properties/form_fields/items/properties/label",
                      "type": "string",
                      "title": "The label schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "examples": [
                          "Department"
                      ]
                  },
                  "is_required": {
                      "$id": "#/properties/form_fields/items/properties/is_required",
                      "type": "boolean",
                      "title": "The is_required schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": false,
                      "examples": [
                          true
                      ]
                  },
                  "sort_order": {
                      "$id": "#/properties/form_fields/items/properties/sort_order",
                      "type": "integer",
                      "title": "The sort_order schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": 0,
                      "examples": [
                          0
                      ]
                  },
                  "help": {
                      "$id": "#/properties/form_fields/items/properties/help",
                      "type": "string",
                      "title": "The help schema",
                      "description": "An explanation about the purpose of this instance.",
                      "default": "",
                      "examples": [
                          "Please add which department you are associated with"
                      ]
                  }
              }
          }
      }
  }
}