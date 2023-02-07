var click_change = document.getElementById('clicks');
var count = 0;

function clicked() {
    // console.log("cookie chan")
    count++
    clicks.innerHTML = count;
}

var high_cps = 0;
var cps_change = document.getElementById('cps-count')
var high_change = document.getElementById('cps-high')

function cpscount() {
    var current_count = count;
    setTimeout(function(){
        //console.log("cookie chan")
        cps_change.innerHTML = (count - current_count)/10

        if (((count - current_count)/10) > high_cps) {
            high_cps = (count - current_count)/10
            high_change.innerHTML = high_cps;
        }
    }, 10000)
}