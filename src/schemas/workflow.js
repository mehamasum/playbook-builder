export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "Workflow",
    "description": "Add your workflow",
    "default": {},
    "examples": [
        {
            "name": "Article/Blog/Press Release",
            "flexibleWorkflow": true,
            "steps": [
                {
                    "label": "Complete/Distribute",
                    "duration": 1,
                    "substeps": [
                        {
                            "actions": [
                                {
                                    "actionType": "setPublishDate"
                                },
                                {
                                    "actionType": "customizePublishSettings"
                                },
                                {
                                    "actionType": "publish"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "required": [
        "name",
        "flexibleWorkflow",
        "steps"
    ],
    "properties": {
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "Name of the workflow",
            "description": "Add a name of the workflow",
            "default": "",
            "examples": [
                "Article/Blog/Press Release"
            ]
        },
        "flexibleWorkflow": {
            "$id": "#/properties/flexibleWorkflow",
            "type": "boolean",
            "title": "Flexible workflow",
            "description": "Is it a flexible workflow?",
            "default": false,
            "examples": [
                true
            ]
        },
        "steps": {
            "$id": "#/properties/steps",
            "type": "array",
            "title": "Steps",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    {
                        "label": "Complete/Distribute",
                        "duration": 1,
                        "substeps": [
                            {
                                "actions": [
                                    {
                                        "actionType": "setPublishDate"
                                    },
                                    {
                                        "actionType": "customizePublishSettings"
                                    },
                                    {
                                        "actionType": "publish"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            ],
            "additionalItems": true,
            "items": {
                "$id": "#/properties/steps/items",
                "type": "object",
                "title": "Step Items",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "examples": [
                    [
                        {
                            "label": "Complete/Distribute",
                            "duration": 1,
                            "substeps": [
                                {
                                    "actions": [
                                        {
                                            "actionType": "setPublishDate"
                                        },
                                        {
                                            "actionType": "customizePublishSettings"
                                        },
                                        {
                                            "actionType": "publish"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ],
                "required": [
                    "label",
                    "duration",
                ],
                "properties": {
                    "label": {
                        "$id": "#/properties/steps/items/properties/label",
                        "type": "string",
                        "title": "Step name",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "Complete/Distribute"
                        ]
                    },
                    "duration": {
                        "$id": "#/properties/steps/items/properties/duration",
                        "type": "integer",
                        "title": "Step duration",
                        "description": "An explanation about the purpose of this instance.",
                        "default": 0,
                        "examples": [
                            1
                        ]
                    },
                    "substeps": {
                        "$id": "#/properties/steps/items/properties/substeps",
                        "type": "array",
                        "title": "Substeps",
                        "description": "An explanation about the purpose of this instance.",
                        "default": [],
                        "examples": [
                            [
                                {
                                    "actions": [
                                        {
                                            "actionType": "setPublishDate"
                                        },
                                        {
                                            "actionType": "customizePublishSettings"
                                        },
                                        {
                                            "actionType": "publish"
                                        }
                                    ]
                                }
                            ]
                        ],
                        "additionalItems": true,
                        "items": {
                            "$id": "#/properties/steps/items/properties/substeps/items",
                            "type": "object",
                            "title": "Substep details",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                [
                                    {
                                        "actions": [
                                            {
                                                "actionType": "setPublishDate"
                                            },
                                            {
                                                "actionType": "customizePublishSettings"
                                            },
                                            {
                                                "actionType": "publish"
                                            }
                                        ]
                                    }
                                ]
                            ],
                            "required": [
                                "actions"
                            ],
                            "properties": {
                                "actions": {
                                    "$id": "#/properties/steps/items/properties/substeps/items/properties/actions",
                                    "type": "array",
                                    "title": "Actions",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": [],
                                    "examples": [
                                        [
                                            {
                                                "actionType": "setPublishDate"
                                            },
                                            {
                                                "actionType": "customizePublishSettings"
                                            }
                                        ]
                                    ],
                                    "additionalItems": true,
                                    "items": {
                                        "$id": "#/properties/steps/items/properties/substeps/items/properties/actions/items",
                                        "type": "object",
                                        "title": "Action details",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": {},
                                        "examples": [
                                            [
                                                {
                                                    "actionType": "setPublishDate"
                                                },
                                                {
                                                    "actionType": "customizePublishSettings"
                                                },
                                                {
                                                    "actionType": "publish"
                                                }
                                            ]
                                        ],
                                        "required": [
                                            "actionType"
                                        ],
                                        "properties": {
                                            "actionType": {
                                                "$id": "#/properties/steps/items/properties/substeps/items/properties/actions/items/properties/actionType",
                                                "type": "string",
                                                "title": "Action",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": "findContent",
                                                "enum": [
                                                    "findContent",
                                                    "writeEditContent",
                                                    "writeEditSocialPost",
                                                    "customizePublishSettings",
                                                    "setPublishDate",
                                                    "selectImage",
                                                    "publish",
                                                    "approve",
                                                    "editCustomFields",
                                                    "editLabels"
                                                ],
                                                "examples": [
                                                    "setPublishDate"
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
