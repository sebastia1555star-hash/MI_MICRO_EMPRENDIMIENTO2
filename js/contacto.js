// Detectar qué producto quiere el usuario si viene de una página de producto
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('producto');
    
    if (producto) {
        const select = document.getElementById('productSelect');
        select.value = producto;
    }
};

// Efecto de envío (Simulación)
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-send');
    btn.innerHTML = "Enviando...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("¡Pedido recibido! El equipo de 2do Informática se contactará contigo pronto.");
        window.location.href = "index.html";
    }, 1500);
});