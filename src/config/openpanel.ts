import { OpenPanel } from '@openpanel/web';


if (!process.env.REACT_APP_OPENPANEL_CLIENT_ID) {
    console.error('REACT_APP_OPENPANEL_CLIENT_ID não está definido no .env');
}

console.log('REACT_APP_OPENPANEL_CLIENT_ID:', process.env.REACT_APP_OPENPANEL_CLIENT_ID);

export const op = new OpenPanel({
    clientId: "50b1d5c3-4a10-4b17-b610-8e6bcedc8052",
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
    apiUrl: 'https://srv697286.hstgr.cloud/api'
});