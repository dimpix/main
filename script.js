window.onload = async () => {
    const connector = new TonConnectSDK.TonConnect();
    const walletsList = await connector.getWallets();
    // Ваш код
};
