const userInput = () => {
    let input = document.querySelector("#number").value;
    alert('The speed is: ' + input + ' cicle per second');
    document.querySelector(".wheel").style.animationDuration = (1/input)+'s';
    let n = document.querySelectorAll(".cabin");
    console.log(n);

    for(i=0; n.length; i++){
        n[i].style.animationDuration = (1/input)+'s';
    }
    
    
} 
