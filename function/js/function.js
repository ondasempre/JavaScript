var msg = 'Nuovo messaggio da visualizzare';

function nuovoMess()
{
    var el = document.getElementById('message');
    el.textContent = msg;
}


setInterval(function () {nuovoMess()}, 3000);

function bye()
{
    alert("Bye bye !!")
}

/* TIMER */
setInterval(function () {bye()}, 5000);