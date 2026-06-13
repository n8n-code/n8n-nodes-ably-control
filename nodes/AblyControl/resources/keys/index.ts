import type { INodeProperties } from 'n8n-workflow';

export const keysDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					]
				}
			},
			"options": [
				{
					"name": "GET Apps Keys",
					"value": "GET Apps Keys",
					"action": "Lists app keys",
					"description": "Lists the API keys associated with the application ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/keys"
						}
					}
				},
				{
					"name": "POST Apps Keys",
					"value": "POST Apps Keys",
					"action": "Creates a key",
					"description": "Creates an API key for the application specified.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/keys"
						}
					}
				},
				{
					"name": "PATCH Apps Keys",
					"value": "PATCH Apps Keys",
					"action": "Updates a key",
					"description": "Update the API key with the specified key ID, for the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/keys/{{$parameter[\"key_id\"]}}"
						}
					}
				},
				{
					"name": "POST Apps Keys Revoke",
					"value": "POST Apps Keys Revoke",
					"action": "Revokes a key",
					"description": "Revokes the API key with the specified ID, with the Application ID. This deletes the key.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/keys/{{$parameter[\"key_id\"]}}/revoke"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apps/{app_id}/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"GET Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"GET Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_auth",
			"type": "string",
			"default": "",
			"description": "Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href=\"https://ably.com/documentation/control-api/#authentication\">Ably documentation</a>.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"GET Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Capabilities",
			"name": "capabilities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The capabilities that this key has. More information on capabilities can be found in the <a href=\"https://ably.com/documentation/core-features/authentication#capabilities-explained\">Ably documentation</a>.",
			"routing": {
				"send": {
					"property": "capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channels",
			"name": "channels",
			"type": "string",
			"default": "",
			"description": "Specify the channels and queues that this key can be used with.",
			"routing": {
				"send": {
					"property": "channels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name for your API key. This is a friendly name for your reference.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_auth",
			"type": "string",
			"default": "",
			"description": "Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href=\"https://ably.com/documentation/control-api/#authentication\">Ably documentation</a>.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "PATCH /apps/{app_id}/keys/{key_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Key ID",
			"name": "key_id",
			"required": true,
			"description": "The API key ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Capabilities",
			"name": "capabilities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The capabilities that this key has. More information on capabilities can be found in the <a href=\"https://ably.com/documentation/core-features/authentication#capabilities-explained\">Ably documentation</a>.",
			"routing": {
				"send": {
					"property": "capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Channels",
			"name": "channels",
			"type": "string",
			"default": "",
			"description": "Specify the channels and queues that this key can be used with.",
			"routing": {
				"send": {
					"property": "channels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name for your API key. This is a friendly name for your reference.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_auth",
			"type": "string",
			"default": "",
			"description": "Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href=\"https://ably.com/documentation/control-api/#authentication\">Ably documentation</a>.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"PATCH Apps Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/keys/{key_id}/revoke",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys Revoke"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys Revoke"
					]
				}
			}
		},
		{
			"displayName": "Key ID",
			"name": "key_id",
			"required": true,
			"description": "The key ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys Revoke"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_auth",
			"type": "string",
			"default": "",
			"description": "Control API uses bearer authentication. You need to generate an access token for use with this API. More details can be found in the <a href=\"https://ably.com/documentation/control-api/#authentication\">Ably documentation</a>.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"POST Apps Keys Revoke"
					]
				}
			}
		},
];
