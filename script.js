document.getElementById('connect-wallet-btn').addEventListener('click', async () => {
    try {
        // Ініціалізація TonConnect
        const tonConnect = new TonConnect({
            manifestUrl: 'https://dimpix.github.io/telegram-mini-app/tonconnect-manifest.json',
        });

        // Відображення QR-коду або запиту на підключення гаманця
        const tonConnectUI = new TonConnectUI(tonConnect);
        const walletConnection = await tonConnectUI.connectWallet();

        if (walletConnection) {
            alert('Гаманець підключено успішно!');
            document.getElementById('generate-btn').style.display = 'block';
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
