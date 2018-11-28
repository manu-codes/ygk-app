const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]

const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
let envVar: any = null;
export const updateSigninStatus = (isSignedIn: boolean) => {
    if (isSignedIn) {
        // authorizeButton.style.display = 'none';
        // signoutButton.style.display = 'block';
        // listMajors();
    } else {
        // authorizeButton.style.display = 'block';
        // signoutButton.style.display = 'none';
    }
}
const initClient = () => {
    const gapi = window['gapi'];
    gapi.client.init({
        apiKey: envVar.REACT_APP_G_API_KEY,
        clientId: envVar.REACT_APP_G_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        // authorizeButton.onclick = handleAuthClick;
        // signoutButton.onclick = handleSignoutClick;
    }, (error: any) => {
        console.error(JSON.stringify(error, null, 2));
    });
}
const gapiLoad = () => {
    console.log('GAPI LOADED');
    const gapi = window['gapi'];
    gapi.load('client:auth2', initClient);
}

const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;
        script.id = 'gapiTag';
        script.defer = true;
        script.src = src;
        script.addEventListener('load', () => {
            resolve();
        });
        script.addEventListener('error', (e) => {
            reject(e);
        });
        document.body.appendChild(script);
    })
};
export const startGapi = (proc: any) => {
    envVar = proc;
    loadScript('https://apis.google.com/js/api.js').then(() => {
        gapiLoad();
    })
}

