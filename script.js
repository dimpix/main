document.getElementById('connect-wallet-btn').addEventListener('click', async () => {
    if (typeof TonWeb === 'undefined') {
        alert('TonWeb library is not loaded');
        return;
    }

    try {
        const provider = new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC');
        const tonweb = new TonWeb(provider);

        // Виклик для підключення гаманця
        const wallet = await connectWallet();
        if (wallet) {
            alert('Гаманець підключено успішно!');
        } else {
            alert('Не вдалося підключити гаманець');
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Сталася помилка підключення гаманця');
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('result').textContent = `Випадкове число: ${randomNumber}`;
});

// Функція для підключення гаманця
async function connectWallet() {
    if (window.ton && window.ton.isTonWallet) {
        // Використання Ton Wallet
        const provider = window.ton;
        const accounts = await provider.request({ method: 'ton_requestAccounts' });
        return accounts[0];
    } else if (window.TonWeb) {
        // Використання TonWeb для підключення Tonkeeper
        const tonWeb = new TonWeb(window.TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));
        const wallet = tonWeb.wallet.create({ publicKey: 'YOUR_PUBLIC_KEY', address: 'YOUR_WALLET_ADDRESS' });
        return wallet;
    } else {
        alert('Ton Wallet або Tonkeeper не знайдено');
        return null;
    }
}
