import type { INodeProperties } from 'n8n-workflow';

export const rulesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					]
				}
			},
			"options": [
				{
					"name": "GET Apps Rules",
					"value": "GET Apps Rules",
					"action": "Lists Reactor rules",
					"description": "Lists the rules for the application specified by the application ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/rules"
						}
					}
				},
				{
					"name": "POST Apps Rules",
					"value": "POST Apps Rules",
					"action": "Creates a Reactor rule",
					"description": "Creates a rule for the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/rules"
						}
					}
				},
				{
					"name": "DELETE Apps Rules",
					"value": "DELETE Apps Rules",
					"action": "Deletes a Reactor rule",
					"description": "Deletes a Reactor rule",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/rules/{{$parameter[\"rule_id\"]}}"
						}
					}
				},
				{
					"name": "PATCH Apps Rules",
					"value": "PATCH Apps Rules",
					"action": "Updates a Reactor rule",
					"description": "Updates a Reactor rule",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/rules/{{$parameter[\"rule_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apps/{app_id}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"GET Apps Rules"
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
						"Rules"
					],
					"operation": [
						"GET Apps Rules"
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
						"Rules"
					],
					"operation": [
						"GET Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"POST Apps Rules"
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
						"Rules"
					],
					"operation": [
						"POST Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/rules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"POST Apps Rules"
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
						"Rules"
					],
					"operation": [
						"POST Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apps/{app_id}/rules/{rule_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"DELETE Apps Rules"
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
						"Rules"
					],
					"operation": [
						"DELETE Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "rule_id",
			"required": true,
			"description": "The rule ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"DELETE Apps Rules"
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
						"Rules"
					],
					"operation": [
						"DELETE Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /apps/{app_id}/rules/{rule_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"PATCH Apps Rules"
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
						"Rules"
					],
					"operation": [
						"PATCH Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "rule_id",
			"required": true,
			"description": "The rule ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"PATCH Apps Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /apps/{app_id}/rules/{rule_id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"PATCH Apps Rules"
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
						"Rules"
					],
					"operation": [
						"PATCH Apps Rules"
					]
				}
			}
		},
];
