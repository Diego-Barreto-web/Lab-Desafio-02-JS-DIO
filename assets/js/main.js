
function updateProfileInfo(profileData) {

    const profHeader = document.getElementById('profile.header')
    return profHeader.innerHTML = `
    <img class="photo" src="${profileData.photo}" alt="Foto de ${profileData.name}">
    <h1 class="title">Olá, <br>eu sou <span>${profileData.name}</span></h1>
    <div class="information">
        <p class="job"><a href="${profileData.linkedin}" target="_blank">${profileData.job}</a></p>
        <p class="location">${profileData.location}</p>
        <p class="phone"><a href="tel:${profileData.phone}" target="_blank">${profileData.phone}</a></p>
        <p class="email"><a href="mailto:${profileData.email}" target="_blank">${profileData.email}</a></p>
    </div>`
} 

function updadeHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updadeSoftSkills(profileData) {

    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updadeLanguages(profileData) {

    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {

    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="title github"' : 'class="title"'}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>`
    }).join('')
}

function updateExperience(profileData) {

    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(exp => {
        return `<li>
                    <h3 class="title">${exp.name}</h3>
                    <p class="period">${exp.period}</p>
                    <p>${exp.description}</p>
                </li>`
    }).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updadeHardSkills(profileData)
    updadeSoftSkills(profileData)
    updadeLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()

