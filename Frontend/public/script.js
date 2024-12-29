function processText(type) {
    const inputId = `${type}Input`;
    const outputId = `${type}Output`;
    const text = document.getElementById(inputId).value;

    fetch('/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, type })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById(outputId).value = data.result || 'Error processing text.';
        })
        .catch(err => console.error(err));
}

