import NetworkManager from './lib/nm';

const options = {
    psk: 'password',
    ssid: 'testAP',
    nat: true
}

const networkCtl = new NetworkManager('wlan0');
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function setup(){
    await networkCtl.addWirelessConnection(options);
    console.log("Network setup complete")
}

async function waitForever(){
    await delay(1000*60*10);
    await networkCtl.teardown(); // teardown AP cleanly
}

setup();
waitForever();
