document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let avatarInput = document.getElementById('avatar');
    let avatarFile = avatarInput.files[0];
    
    if (name && email && avatarFile) {
        document.getElementById('ticketName').textContent = name;
        document.getElementById('ticketEmail').textContent = email;
        
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('ticketAvatar').src = e.target.result;
        };
        reader.readAsDataURL(avatarFile);
        
        document.getElementById('ticket').classList.remove('hidden');
        document.getElementById('ticketForm').classList.add('hidden');
    }
    document.getElementById('backButton').addEventListener('click', function() {
            document.getElementById('ticket').classList.add('hidden');
            document.getElementById('ticketForm').classList.remove('hidden');
        });
});