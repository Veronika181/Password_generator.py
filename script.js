document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Zabránit výchozímu odeslání formuláře

    // Získání délky hesla od uživatele
    const length = parseInt(document.getElementById('length').value);

    if (length && length > 0) {
        // Definování znaků
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const num = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        // Všechny možné znaky
        const all = lower + upper + num + symbols;

        // Generování hesla
        let password = '';
        for (let i = 0; i < length; i++) {
            password += all.charAt(Math.floor(Math.random() * all.length));
        }

        // Zobrazení výsledku
        document.getElementById('generatedPassword').textContent = `Generated Password: ${password}`;
    } else {
        document.getElementById('generatedPassword').textContent = "Please enter a valid length.";
    }
});
