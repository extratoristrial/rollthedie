function result() {
    var result =           
    document.getElementById("result").innerHTML = Math.floor(Math.random()* 20) + 1;
    if ( result === 20 ) {
        setTimeout(() => {
            alert('✨✨Critical success!!!✨✨')
        }, 05)
    }

    if ( result === 1 ) {
        setTimeout(() => { 
            alert('⚠️💀Critical fail!!!💀⚠️️')    
            }, 05);
        }
    }  

    document
        .getElementById("roll")
        .addEventListener('click', result);