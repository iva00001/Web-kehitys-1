document.addEventListener('DOMContentLoaded', function () {
    
    const clickMeBtn = document.getElementById('btnAlert');
    const showTableBtn = document.getElementById('btnTable');

    clickMeBtn.addEventListener('click', function () {
        alert('You clicked me!');
    });

    function showTable() {
        const animals = [
            { animal: 'Tiger', habitat: 'Forest', diet: 'Carnivore' },
            { animal: 'Elephant', habitat: 'Savanna', diet: 'Herbivore' },
            { animal: 'Panda', habitat: 'Bamboo Forest', diet: 'Herbivore' },
            { animal: 'Lion', habitat: 'Savanna', diet: 'Carnivore' }
        ];

        let rows = '';
        for (const item of animals) {
            const { animal, habitat, diet } = item;
            rows += `
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            `;
        }

        const tableHTML = `
            <table id="animalTable" class="display">
                <thead>
                    <tr><th>Animal</th><th>Habitat</th><th>Diet</th></tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;

        document.querySelector('#tableContainer').innerHTML = tableHTML;
    }

    showTableBtn.addEventListener('click', showTable);

    const exercise1Heading = document.querySelector('h2:nth-of-type(1)');
    const exercise2Heading = document.querySelector('h2:nth-of-type(2)');

    exercise2Heading.addEventListener('mouseover', function () {
        console.log('Stepped over me with a mouse!');
    });

    exercise1Heading.addEventListener('click', function () {
        this.style.color = 'red';
        this.innerHTML = 'Bye bye mouse!';
    });

    const feedback = document.getElementById('feedback');
    const status = document.getElementById('status');
    const charcount = document.getElementById('charcount');
    const preview = document.getElementById('preview');

    feedback.addEventListener('focus', function () {
        status.textContent = 'You are typing...';
        this.style.backgroundColor = '#e6f7ff';
    });

    feedback.addEventListener('blur', function () {
        status.textContent = '';
        this.style.backgroundColor = '';
    });

    feedback.addEventListener('input', function () {
        const length = this.value.length;
        charcount.textContent = `${length}/200`;
        preview.textContent = this.value || '(The preview will appear here)';
    });

    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const text = feedback.value.trim();

        if (text.length < 10 || text.length > 200) {
            status.textContent = 'Error: feedback must be 10–200 characters long.';
            status.style.color = 'red';
        } else {
            feedback.value = '';
            charcount.textContent = '0/200';
            preview.textContent = '(The preview will appear here)';
            status.textContent = 'Thank you for your feedback!';
            status.style.color = 'green';
        }
    });

    const keybox = document.getElementById('keybox');
    const keyinfo = document.getElementById('keyinfo');
    let keyPressCount = 0;

    document.addEventListener('keydown', function (event) {
        console.log(event);

        keyinfo.textContent = `Key: ${event.key} | Code: ${event.code}`;

        keybox.innerHTML = `<span style="font-size: 3em;">${event.key}</span>`;

        if (event.key === 'r' || event.key === 'R') {
            keybox.style.backgroundColor = '#ffcccc';
        } else if (event.key === 'g' || event.key === 'G') {
            keybox.style.backgroundColor = '#ccffcc';
        } else if (event.key === 'b' || event.key === 'B') {
            keybox.style.backgroundColor = '#ccccff';
        } else {
            keybox.style.backgroundColor = '';
        }

        keyPressCount++;
        keyinfo.textContent += ` | Presses: ${keyPressCount}`;

        const modifiers = [];
        if (event.shiftKey) modifiers.push('Shift');
        if (event.ctrlKey) modifiers.push('Ctrl');
        if (event.altKey) modifiers.push('Alt');
        if (modifiers.length > 0) {
            keyinfo.textContent += ` | Modifiers: ${modifiers.join(' + ')}`;
        }
    });


    const geoBtn = document.getElementById('geoBtn');
    geoBtn.addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const url = `https://www.google.com/maps?q=${lat},${lon}`;
                window.location.href = url;
            },
            (error) => {
                alert('Could not get the location: ' + error.message);
            }
        );
    });

});