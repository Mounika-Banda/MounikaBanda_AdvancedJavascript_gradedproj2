let searchElement = document.querySelector("#filterJob");

searchElement.addEventListener("keypress", getResume);

function getResume(){

fetch("Data.json")
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i<data.resume.length; i++){

                let jobApplied = data.resume[i].basics.AppliedFor;
                if(searchElement.value=jobApplied){

                    let id = data.resume[i].id;
                    let name = data.resume[i].basics.name;
                    let phone = data.resume[i].basics.phone;
                    let email = data.resume[i].basics.email;
                    let address = data.resume[i].basics.location.address;
                    let postalCode = data.resume[i].basics.location.postalCode;
                    let city = data.resume[i].basics.location.city;
                    let state = data.resume[i].basics.location.state;
                    let network = data.resume[i].basics.profiles.network;
                    let url = data.resume[i].basics.profiles.url;
                    let skillsname = data.resume[i].skills.name;
                    let level = data.resume[i].skills.level;
                    let keywords = data.resume[i].skills.keywords;
                    let companyName = data.resume[i].work["Company Name"];
                    let position = data.resume[i].work.position;
                    let startDate = data.resume[i].work['Start Date'];
                    let endDate = data.resume[i].work['End Date'];
                    let summary = data.resume[i].work.Summary;
                    let icompanyName = data.resume[i].Internship["Company Name"];
                    let iposition = data.resume[i].Internship.Position;
                    let istartDate = data.resume[i].Internship["Start Date"];
                    let iEndDate = data.resume[i].Internship["End Date"];
                    let isummary = data.resume[i].Internship.Summary;
                    let pname = data.resume[i].projects.name;
                    let description = data.resume[i].projects.description;
                    let uInstitute = data.resume[i].education.UG.institute;
                    let ucourse = data.resume[i].education.UG.course;
                    let ustartDate = data.resume[i].education.UG["Start Date"];
                    let uendDate = data.resume[i].education.UG["End Date"];
                    let ucgpa = data.resume[i].education.UG.cgpa;
                    let sinstitute = data.resume[i].education["Senior Secondary"].institute;
                    let scgpa = data.resume[i].education["Senior Secondary"].cgpa;
                    let asummary = data.resume[i].achievements.Summary;
                    let hobbies = data.resume[i].interests.hobbies;
                    document.querySelector("#tb1").innerHTML += `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${phone}</td>
                        <td>${email}</td>
                        <td>${address}</td>
                        <td>${postalCode}</td>
                        <td>${city}</td>
                        <td>${state}</td>
                        <td>${network}</td>
                        <td>${url}</td>
                        <td>${skillsname}</td>
                        <td>${level}</td>
                        <td>${keywords}</td>
                        <td>${companyName}</td>
                        <td>${position}</td>
                        <td>${startDate}</td>
                        <td>${endDate}</td>
                        <td>${summary}</td>
                        <td>${icompanyName}</td>
                        <td>${iposition}</td>
                        <td>${istartDate}</td>
                        <td>${iEndDate}</td>
                        <td>${isummary}</td>
                        <td>${pname}</td>
                        <td>${description}</td>
                        <td>${uInstitute}</td>
                        <td>${ucourse}</td>
                        <td>${ustartDate}</td>
                        <td>${uendDate}</td>
                        <td>${ucgpa}</td>
                        <td>${sinstitute}</td>
                        <td>${scgpa}</td>
                        <td>${asummary}</td>
                        <td>${hobbies}</td>

                    </tr>`;
                    document.querySelector("#name").innerHTML += `${name}`;

                }
           
            }

        })
        
        }