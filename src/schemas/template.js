export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "Templates",
    "description": "Create and customize templates to better structure how work is collaboratively planned. Templates can be applied as Campaign Briefs, Task Briefs, or Request Forms.",
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
            "title": "Template Name",
            "default": "",
            "examples": [
                "Marketing Material Request"
            ]
        },
        "is_active": {
            "$id": "#/properties/is_active",
            "type": "boolean",
            "title": "Active",
            "default": false,
            "examples": [
                true
            ]
        },
        "description": {
            "$id": "#/properties/description",
            "type": "string",
            "title": "Template Description",
            "default": "",
            "examples": [
                "Please fill out this form to request marketing materials"
            ]
        },
        "types": {
            "$id": "#/properties/types",
            "type": "array",
            "title": "Applicable To",
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
                "default": "task_brief",
                "enum": [
                    "work_request",
                    "campaign_brief",
                    "task_brief"
                ],
                "examples": [
                    [
                        "work_request"
                    ]
                ]
            }
        },
        "form_fields": {
            "$id": "#/properties/form_fields",
            "type": "array",
            "title": "Form Builder",
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
                "title": "Form field",
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
                    "is_required",
                    "sort_order",
                ],
                "properties": {
                    "field_type": {
                        "$id": "#/properties/form_fields/items/properties/field_type",
                        "type": "string",
                        "title": "Field Type",
                        "default": "custom_field",
                        "enum": ["system_field", "custom_field"],
                        "examples": [
                            "custom_field"
                        ]
                    },
                    "label": {
                        "$id": "#/properties/form_fields/items/properties/label",
                        "type": "string",
                        "title": "Filed label",
                        "default": "",
                        "examples": [
                            "Department"
                        ]
                    },
                    "is_required": {
                        "$id": "#/properties/form_fields/items/properties/is_required",
                        "type": "boolean",
                        "title": "Required",
                        "default": false,
                        "examples": [
                            true
                        ]
                    },
                    "sort_order": {
                        "$id": "#/properties/form_fields/items/properties/sort_order",
                        "type": "integer",
                        "title": "Sort order",
                        "description": "0 means first, 1 is second and so on...",
                        "default": 0,
                        "examples": [
                            0
                        ]
                    },
                    "help": {
                        "$id": "#/properties/form_fields/items/properties/help",
                        "type": "string",
                        "title": "Helper text",
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