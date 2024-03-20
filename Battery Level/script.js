initB();

function initB(){
    const bp = document.querySelector('#battery');
    window.navigator.getBattery().then((batt) => {
        updateB = () => {
            let level = Math.floor(batt.level * 100);
            bp.innerHTML = level + "%";
            console.log(batt);
        }
        updateB();
    })
}