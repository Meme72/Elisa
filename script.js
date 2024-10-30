document.getElementById('submitBtn').addEventListener('click', function() {
    // Numeri corretti
    const correctNumbers = ['1', '2', '3', '4']; // Modifica questi numeri come desideri

    // Ottieni i numeri inseriti dall'utente
    const userNumbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
    ];

    // Controlla se i numeri sono corretti
    if (JSON.stringify(userNumbers) === JSON.stringify(correctNumbers)) {
        // Reindirizza alla pagina di successo
        window.location.href = 'success.html';
    } else {
        // Mostra un messaggio di errore
        document.getElementById('message').innerText = 'Numeri errati. Riprova.';
    }
});
