import { OpenPanel } from '@openpanel/web';


if(process.env.NODE_ENV !== 'production') {
    console.log(`Ambiente de desenvolvimento: ${process.env.NODE_ENV} `);
}
else {
    console.log(`Ambiente de produção: ${process.env.NODE_ENV} `);
}


console.log('REACT_APP_OPENPANEL_CLIENT_ID:', process.env.REACT_APP_OPENPANEL_CLIENT_ID);

export const op = new OpenPanel({
    clientId: 'SEU_CLIENT_ID_AQUI',
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
    // apiUrl: 'https://sua-vps.com/api'
});