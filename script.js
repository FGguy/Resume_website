const projects = [
    {
        name: 'WikiFly', 
        description: 'chrome extension to get a words definition.',
        image: './assets/images/wikifly.png',
        github: 'https://github.com/kailaidescope/Wiki-Fly'
    },
    {
        name: 'Chip-8', 
        description: 'a retro computer emulator project',
        image: './assets/images/chip8.png',
        github: 'https://github.com/FGguy/Chip8Emulator'
    }
]

function navigateTo(destination){
    fetch(destination)
    .then(response => {
        if (!response.ok) {
            throw new Error("Page not found");
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('dyn').innerHTML = html;
        if(destination === 'pages/projects.html'){
            loadProjects();
        }
    })
    .catch(error => {
        document.getElementById('dyn').innerHTML = "<h2>Error loading content</h2>";
    });
}

function loadProjects(){
    const target = document.getElementById("projects");  
    target.innerHTML = projects.map((project)=>{
        return (
            `

                <div class="project-card glass">
                        <div class="project-card-image">
                            <a href="${project.github}" >
                                <img src="${project.image}" alt="project">
                            </a>
                        </div>
                    <div class="project-card-text">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>

            `
        );
    }).join(' ')
}
