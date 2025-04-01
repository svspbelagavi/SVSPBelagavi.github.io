function openDonateModal() {
  document.getElementById('donateModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

function closeDonateModal() {
  document.getElementById('donateModal').style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  var modal = document.getElementById('donateModal');
  if (event.target == modal) {
    closeDonateModal();
  }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeDonateModal();
  }
});
