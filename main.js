let input = document.querySelector('.repos-container input');
  let getButton = document.querySelector('.get-button');
  let reposData = document.querySelector('.show-data span');
  let data = document.querySelector('.show-data');
  let h = document.querySelector(".repos-container")



  getButton.onclick = function(){
    getRepose();

  }

  function getRepose(){

    if(input.value == ''){

        reposData.innerHTML = "<span> it Shoud Not Be Empty .</span>";

    }else{

        fetch(`https://api.github.com/users/${input.value}/repos`).then((res) => res.json())
        .then((repos)=> {
            reposData.innerHTML = '';

            repos.forEach(repo => {

                let mainDiv = document.createElement("div");
                let divText = document.createTextNode(repo.name);
       
                mainDiv.appendChild(divText);
       
       
                let url = document.createElement('a');
                let urlText = document.createTextNode('Visit');
                url.href= `https://github.com/users/${input.value}/${repo.name}`;
                url.setAttribute("target", '_blank');
                url.appendChild(urlText);
                mainDiv.appendChild(url);

                let spanStars = document.createElement("span");
                let spanText = document.createTextNode(`star${repo.stargazers_count}`)
                spanStars.appendChild(spanText);
                mainDiv.appendChild(spanStars)
                mainDiv.className = 'repo-box';
                data.appendChild(mainDiv);

                });
        });

    }
  };
