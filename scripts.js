document.addEventListener('DOMContentLoaded', () => {
    // Function to display the modal
    function showModal(content) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = content;
        
        const closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => {
            document.body.removeChild(modal);
        };
        
        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
    
    // Add event listeners to the "Read More" buttons
    document.querySelectorAll('.blog-post button, .research-paper button').forEach(button => {
        button.addEventListener('click', (event) => {
            const postId = event.target.getAttribute('data-post-id');
            // Example content based on postId, in practice this might be fetched from a server
           
            showModal(content);
        });
    });
});
