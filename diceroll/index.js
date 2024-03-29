// Dice roller program


function rolldice(){

    const numOfdice = document.getElementById("numOfdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceimage = document.getElementById("diceimage");
    const values= [];
    const images = [];

    for(let i= 0; i < numOfdice; i++){
        const value  = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="diceimg/${value}.png" alt="Dice ${value}"  >`)
    }

    diceResult.textContent =`dice : ${values.join(',')}`;
    diceimage.innerHTML = images.join('');


}
