import * as sdk from '@cognite/sdk';

const main = async () => {
    await sdk.Login.authorize({
      project: 'publicdata',
      redirectUrl: window.location.href, // where you want the user to end up after successful login
      errorRedirectUrl: window.location.href, // where you want the user to end up after failed login
    });

    const successDiv = document.createElement('div');
    successDiv.innerText = 'Success!';
    document.body.appendChild(successDiv);
}

main();

