

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Diego-Barreto-web/Lab-Desafio-02-JS-DIO/main/assets/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}





