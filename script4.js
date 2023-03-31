function displayImageInModal(imageUrl) {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  modalOverlay.addEventListener('click', closeModal);
  const modalImage = document.createElement('img');
  modalImage.src = imageUrl;
  modalImage.classList.add('modal-image');
  modalImage.style.maxWidth = '400px';
  modalImage.style.maxHeight = '400px';
  modalImage.style.display = 'block';
  modalImage.style.margin = '0 auto';
  modalContainer.appendChild(modalOverlay);
  modalContainer.appendChild(modalImage);
  document.body.appendChild(modalContainer);
  function closeModal() {
    modalContainer.remove();
  }
}

displayImageInModal('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80');
