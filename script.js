let bioText = "I am a passionate developer learning HTML, CSS, and JavaScript.";

        function changeBio() {
            const newBioInput = document.getElementById("newBioInput");
            const newBio = newBioInput.value;

            if (newBio) {
                bioText = newBio;
                document.getElementById("bio").innerText = bioText;
                // Optionally, clear the input field after updating the bio
                newBioInput.value = "";
            }
        }

 // Initialize an array to store skills
 const skillsArray = ['HTML', 'CSS', 'JavaScript'];

 // Function to update the skills in the HTML
 function updateSkills() {
     const skillList = document.getElementById("skillList");

     // Clear the existing content of the skillList
     skillList.innerHTML = '';

     // Loop through the skillsArray and create list items for each skill
     skillsArray.forEach(skill => {
         const newSkill = document.createElement("li");
         newSkill.innerHTML = `${skill} <button onclick="deleteSkill('${skill}')">Delete</button>`;
         skillList.appendChild(newSkill);
     });
     console.log(skillsArray)
 }

 // Initial update to display skills
 updateSkills();

 function addSkill() {
    let skillName = prompt("Enter a new skill:");
     if (skillName) {
         // Add the new skill to the skillsArray
         skillsArray.push(skillName);

         // Update the HTML to reflect the changes
         updateSkills();
     }
 }

 function deleteSkill(skillToDelete) {
     // Remove the skill from the skillsArray
     const index = skillsArray.indexOf(skillToDelete);
     if (index !== -1) {
         skillsArray.splice(index, 1);

         // Update the HTML to reflect the changes
         updateSkills();
     }
 }


function displaySquare() {
    const userInput = prompt("Enter a number to display its square:");
    if (userInput !== null) {
        const squareResult = parseInt(userInput) ** 2; // Using the exponentiation operator
        document.getElementById("squareResult").innerText = `Square of ${userInput}: ${squareResult}`;
        console.log(squareResult)
    }

}

