//D20 Function
var side = 4;
var percentile = false;

function roll() {
    console.log(percentile)

    var percent = percentile === 'true' ? '%' : ''

    // var result =           
    document.getElementById("result").innerHTML = Math.floor(Math.random()* side) + 1 + percent
    
   /* if ( result === 20 ) {
        setTimeout(() => {
            alert('✨✨Critical success!!!✨✨')
        }, 05)
    }

    if ( result === 1 ) {
        setTimeout(() => { 
            alert('⚠️💀Critical fail!!!💀⚠️️')    
            }, 05);
        }
    */ }

    document
        .getElementById("roll")
        .addEventListener('click', roll);
    document.querySelectorAll('.die').forEach(die => die.addEventListener('click', (event)=> {
        console.log(event, percentile)
        side = event.target.attributes.value.value
        percentile = event.target.attributes[3].value
    }))
