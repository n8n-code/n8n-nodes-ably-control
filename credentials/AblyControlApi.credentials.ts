import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AblyControlApi implements ICredentialType {
        name = 'N8nDevAblyControlApi';

        displayName = 'Ably Control API';

        icon: Icon = { light: 'file:../nodes/AblyControl/ably-control.svg', dark: 'file:../nodes/AblyControl/ably-control.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://control.ably.net/v1',
                        required: true,
                        placeholder: 'https://control.ably.net/v1',
                        description: 'The base URL of your Ably Control API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
