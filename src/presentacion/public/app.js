document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        mensaje: document.getElementById('mensaje').value
    };

    const res = await fetch('/api/solicitudes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const json = await res.json();

    document.getElementById('respuesta').innerText =
        json.ok ? 'Solicitud enviada correctamente' : json.error;
});