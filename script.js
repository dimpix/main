document.getElementById('connect-wallet-btn').addEventListener('click', async () => {
    try {
        // Ініціалізація TonConnect
        const connector = new TonConnect({
            manifestUrl: 'https://yourwebsite.com/tonconnect-manifest.json',
        });

        // Підключення гаманця
        const walletConnection = await connector.connectWallet();
        
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
