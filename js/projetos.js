function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
   
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';

    }
}


window.onclick = function(event) {
    const modal = document.getElementById('adoption-modal');
    if (event.target == modal) {
        closeModal('adoption-modal');
    }
}