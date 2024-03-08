let url = "https://api.genderize.io?name="
let wrapper = document.getElementById('wrapper');

function predictGender(){
    let name = document.getElementById('name');
    console.log(name.value);
    let finalUrl = url + name.value;
    console.log(finalUrl);

    wrapper.innerHTML = "";

    if(name.value.length > 0 && /^[A-Za-z]+$/.test(name.value)){
        fetch(finalUrl).then((resp) => resp.json()).then((data) => {
            console.log(data);

            let div = document.createElement("div");
            div.setAttribute("id","info");
            div.innerHTML = `<h2 id=result-name>${data.name}</h2> <h1>${data.gender}</h1> <h2>Probability: ${data.probability}</h2>`

            wrapper.append(div);
        });
    }
}


document.getElementById('submit').addEventListener("click",predictGender)

window.addEventListener("load",predictGender);

