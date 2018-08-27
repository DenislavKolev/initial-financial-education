$(document).ready(function () {

    function clock() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if(hours<10){
            hours = '0' + hours;
        }

        if(minutes<10){
            minutes = '0' + minutes;
        }

        if(seconds<10){
            seconds = '0' + seconds;
        }
        $('.hours').html(hours + ':' + minutes + ':' + seconds)
    }
    clock();
    setInterval(clock, 1000)
});