import type { INodeProperties } from 'n8n-workflow';

export const namespacesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					]
				}
			},
			"options": [
				{
					"name": "GET Apps Namespaces",
					"value": "GET Apps Namespaces",
					"action": "Lists namespaces",
					"description": "List the namespaces for the specified application ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/namespaces"
						}
					}
				},
				{
					"name": "POST Apps Namespaces",
					"value": "POST Apps Namespaces",
					"action": "Creates a namespace",
					"description": "Creates a namespace for the specified application ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/namespaces"
						}
					}
				},
				{
					"name": "DELETE Apps Namespaces",
					"value": "DELETE Apps Namespaces",
					"action": "Deletes a namespace",
					"description": "Deletes the namespace with the specified ID, for the specified application ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/namespaces/{{$parameter[\"namespace_id\"]}}"
						}
					}
				},
				{
					"name": "PATCH Apps Namespaces",
					"value": "PATCH Apps Namespaces",
					"action": "Updates a namespace",
					"description": "Updates the namespace with the specified ID, for the application with the specified application ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/apps/{{$parameter[\"app_id\"]}}/namespaces/{{$parameter[\"namespace_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apps/{app_id}/namespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"GET Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"GET Apps Namespaces"
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
						"Namespaces"
					],
					"operation": [
						"GET Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /apps/{app_id}/namespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Authenticated",
			"name": "authenticated",
			"type": "boolean",
			"default": false,
			"description": "If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href=\"https://knowledge.ably.com/authenticated-and-identified-clients\">Ably Knowledge base</a> for more details.",
			"routing": {
				"send": {
					"property": "authenticated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "namespace",
			"description": "The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Persist Last",
			"name": "persistLast",
			"type": "boolean",
			"default": false,
			"description": "If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.",
			"routing": {
				"send": {
					"property": "persistLast",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Persisted",
			"name": "persisted",
			"type": "boolean",
			"default": false,
			"description": "If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.",
			"routing": {
				"send": {
					"property": "persisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Push Enabled",
			"name": "pushEnabled",
			"type": "boolean",
			"default": false,
			"description": "If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.",
			"routing": {
				"send": {
					"property": "pushEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Tls Only",
			"name": "tlsOnly",
			"type": "boolean",
			"default": false,
			"description": "If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.",
			"routing": {
				"send": {
					"property": "tlsOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
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
						"Namespaces"
					],
					"operation": [
						"POST Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apps/{app_id}/namespaces/{namespace_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"DELETE Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"DELETE Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Namespace Id",
			"name": "namespace_id",
			"required": true,
			"description": "The namespace ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"DELETE Apps Namespaces"
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
						"Namespaces"
					],
					"operation": [
						"DELETE Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /apps/{app_id}/namespaces/{namespace_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "app_id",
			"required": true,
			"description": "The application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Namespace Id",
			"name": "namespace_id",
			"required": true,
			"description": "The namespace ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Authenticated",
			"name": "authenticated",
			"type": "boolean",
			"default": false,
			"description": "If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href=\"https://knowledge.ably.com/authenticated-and-identified-clients\">Ably knowledge base/a> for more details.",
			"routing": {
				"send": {
					"property": "authenticated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Persist Last",
			"name": "persistLast",
			"type": "boolean",
			"default": false,
			"description": "If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation.",
			"routing": {
				"send": {
					"property": "persistLast",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Persisted",
			"name": "persisted",
			"type": "boolean",
			"default": false,
			"description": "If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation.",
			"routing": {
				"send": {
					"property": "persisted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Push Enabled",
			"name": "pushEnabled",
			"type": "boolean",
			"default": false,
			"description": "If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel.",
			"routing": {
				"send": {
					"property": "pushEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
		{
			"displayName": "Tls Only",
			"name": "tlsOnly",
			"type": "boolean",
			"default": false,
			"description": "If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace.",
			"routing": {
				"send": {
					"property": "tlsOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
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
						"Namespaces"
					],
					"operation": [
						"PATCH Apps Namespaces"
					]
				}
			}
		},
];
