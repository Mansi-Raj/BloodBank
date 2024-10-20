document.addEventListener("DOMContentLoaded", () => {
    // Handling Donor Form Submission
    const donorForm = document.getElementById('donorForm');
    donorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Gather form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const bloodGroup = document.getElementById('bloodGroup').value;
      const location = document.getElementById('location').value;
      
      // Display success message or save to DB logic can go here
      alert(`Thank you ${name}, you have successfully registered!`);
      
      // Clear the form
      donorForm.reset();
    });
  
    // Blood availability mock data (this would come from a backend API)
    const bloodAvailability = [
      { bankName: 'City Blood Bank', location: 'New York', availableBlood: ['A+', 'B-', 'O+'] },
      { bankName: 'Central Blood Bank', location: 'Los Angeles', availableBlood: ['O-', 'A-', 'B+'] },
      { bankName: 'East Blood Bank', location: 'Chicago', availableBlood: ['AB+', 'B+', 'O-'] },
    ];
  
    // Display Blood Availability
    const bloodList = document.getElementById('bloodList');
    bloodAvailability.forEach(bank => {
      const bankDiv = document.createElement('div');
      bankDiv.classList.add('bank-item');
      
      bankDiv.innerHTML = `
        <h3>${bank.bankName}</h3>
        <p>Location: ${bank.location}</p>
        <p>Available Blood Groups: ${bank.availableBlood.join(', ')}</p>
      `;
      
      bloodList.appendChild(bankDiv);
    });
  });
  