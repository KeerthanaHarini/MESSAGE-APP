document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const editInput = document.getElementById('editInput');
    const editButton = document.getElementById('editButton');
    const deleteButton = document.getElementById('deleteButton');
    const saveButton = document.getElementById('saveButton');

    editButton.addEventListener('click', () => {
        editInput.value = messageElement.textContent;
        messageElement.classList.add('hidden');
        editInput.classList.remove('hidden');
        editButton.classList.add('hidden');
        deleteButton.classList.add('hidden');
        saveButton.classList.remove('hidden');
    });

    saveButton.addEventListener('click', () => {
        messageElement.textContent = editInput.value;
        messageElement.classList.remove('hidden');
        editInput.classList.add('hidden');
        editButton.classList.remove('hidden');
        deleteButton.classList.remove('hidden');
        saveButton.classList.add('hidden');
    });

    deleteButton.addEventListener('click', () => {
        messageElement.textContent = '';
    });
});
