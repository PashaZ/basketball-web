"use strict"

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();

        let formData = new FormData(form);

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            console.log("форма відправлена")
        }
        else {
            alert('Помилка')
            console.log("сталася помилка")
        }
    }
}
)