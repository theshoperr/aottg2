let teamMembers;

function loadTeamMembers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'assets/js/team-members.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      teamMembers = JSON.parse(xhr.responseText);
    } else {
      console.error('Error loading team members:', xhr.status);
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  loadTeamMembers('assets/js/teamMembers.json');
});
    
// function to show the modal with the team member data
function showModal(teamName) {
    var jsonFile = "assets/js/Team Members/" + teamName.toLowerCase().replace(/\s/g, "-") + ".json";
    
    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = teamName;

    const filteredTeamMembers = teamMembers.filter(function(member) {
    return member.teams.includes(teamName);
    });
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';

        // create a card for each team member
        filteredTeamMembers.forEach(member => {
          const card = document.createElement('div');
          //card.classList.add('card');
          card.innerHTML = `
            <div class="col" style="text-shadow: 0px 0px 3px var(--bs-dark);">
            <div class="card border-0 shadow-none" style="background: transparent;">
            <div class="card-body text-center d-flex flex-column align-items-center p-0">
            <p class="mb-2" style="font-size: 30px;color: var(--bs-primary);font-family: 'Living Hell';border-style: none;">${member.name}<br /></p>
            <p class="mb-2" style="color: var(--bs-primary);font-size: 14px;">${member.title}<br /></p>
            <ul class="list-inline fs-6 w-100 mb-0">
                <li class="list-inline-item text-center">
                    <div class="d-flex align-items-xxl-center">
                        <img src="${member.countryFlag}" width="20px" />
                    </div>
                </li>
                <li class="list-inline-item text-center">
                    <div class="d-flex flex-column align-items-center">
                        <p style="color: var(--bs-secondary);font-family: 'JEK 5';">${member.countryName}</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
            </div>
          `;
          modalBody.appendChild(card);
        });

        const modal = document.getElementById('modal-team');
        modal.classList.add('show');
        modal.style.display = 'block';
}

function hideModal() {
    const modal = document.querySelector('.modal-team');
    modal.classList.remove('show');
    modal.style.display = 'none';
}