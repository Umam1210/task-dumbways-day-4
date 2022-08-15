let myProject = []
function addProject(){
    let title = document.getElementById("input-name").value 
    let startDate = document.getElementById("input-start-date").value 
    let endDate = document.getElementById("input-end-date").value 
    let message = document.getElementById("input-message").value 
    let image = document.getElementById("input-image").files
    let react = document.getElementById("react").checked
    let javaScript = document.getElementById("javaScript").checked
    let node = document.getElementById("node").checked
    let docker = document.getElementById("docker").checked
    
    if (react){
      react = document.getElementById("react").value
    } else {}

    if (javaScript){
      javaScript = document.getElementById("javaScript").value
    } else{}
    
    if (node){
      node = document.getElementById("node").value
    } else{}

    if (docker){
      docker = document.getElementById("docker").value
    } else{}
    
    image = URL.createObjectURL(image[0])

    let project = {
      title, startDate, endDate, message, image, react, javaScript, node, docker,
    }
    
    myProject.push(project)  
    postNewBlog()  
    getDistanceTime()
}


function postNewBlog(){
    document.getElementById("new-post").innerHTML = ''

    console.log(myProject);

    for (let index = 0; index < myProject.length; index++)  {
        document.getElementById("new-post").innerHTML +=
        `
        <div class="card" id="new-post">
          <div class="gallery">
            <img src="${myProject[index].image}" width="100%">
            <div class="desc">
              <h3>${myProject[index].title}</h3>
              <span>
                <p>durasi: 3 bulan</p>
              </span><br>
              <p>${myProject[index].message}</p>
        
              <h3>Technologies</h3>
              <div class="icon">
                <span><i class="fa-brands ${myProject[index].react}"></i></span>
                <span><i class="fa-brands ${myProject[index].javaScript}"></i></span>
                <span><i class="fa-brands ${myProject[index].node}"></i></span>
                <span><i class="fa-brands ${myProject[index].docker}"></i></span>
              </div>
              <div class="btn-group">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
          `
    }
}

