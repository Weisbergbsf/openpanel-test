import { OpenPanel } from '@openpanel/web';

if (!process.env.REACT_APP_OPENPANEL_CLIENT_ID) {
    throw new Error('REACT_APP_OPENPANEL_CLIENT_ID não está definido no .env');
}

console.log('REACT_APP_OPENPANEL_CLIENT_ID:', process.env.REACT_APP_OPENPANEL_CLIENT_ID);

export const op = new OpenPanel({
    clientId: 'SEU_CLIENT_ID_AQUI',
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
    // apiUrl: 'https://sua-vps.com/api'
});