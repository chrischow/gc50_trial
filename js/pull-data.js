// Configure URLs
var url_indivTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=3&rows=false"
var url_subcommTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=4&rows=false"
var url_commTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=5&rows=false"
var url_badges = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=6&rows=false"

// Individual Totals
var getIndivTotal = new XMLHttpRequest();
    
getIndivTotal.onreadystatechange = function(){
    if (getIndivTotal.readyState == 4){
        if (getIndivTotal.status == 200){
            var indivTotal = JSON.parse(getIndivTotal.responseText);
            console.log(indivTotal);
        } else {
            console.log("Status error: " + getIndivTotal.status);
        }
    } else {
        console.log("Ignored readyState: " + getIndivTotal.readyState);
    }
}

getIndivTotal.open("GET", url_indivTotal, true);
getIndivTotal.send();

// SubComm Totals
var getSubcommTotal = new XMLHttpRequest();
    
getSubcommTotal.onreadystatechange = function(){
    if (getSubcommTotal.readyState == 4){
        if (getSubcommTotal.status == 200){
            subcommTotal = JSON.parse(getSubcommTotal.responseText);
            console.log(subcommTotal);
        } else {
            console.log("Status error: " + getSubcommTotal.status);
        }
    } else {
        console.log("Ignored readyState: " + getSubcommTotal.readyState);
    }
}

getSubcommTotal.open("GET", url_subcommTotal, true);
getSubcommTotal.send();

// Comm Totals
var getCommTotal = new XMLHttpRequest();
    
getCommTotal.onreadystatechange = function(){
    if (getCommTotal.readyState == 4){
        if (getCommTotal.status == 200){
            var commTotal = JSON.parse(getCommTotal.responseText);
            console.log(commTotal);
        } else {
            console.log("Status error: " + getCommTotal.status);
        }
    } else {
        console.log("Ignored readyState: " + getCommTotal.readyState);
    }
}

getCommTotal.open("GET", url_commTotal, true);
getCommTotal.send();

// Badges
var getBadges = new XMLHttpRequest();
    
getBadges.onreadystatechange = function(){
    if (getBadges.readyState == 4){
        if (getBadges.status == 200){
            var badgeWinners = JSON.parse(getBadges.responseText);
            console.log(badgeWinners);
        } else {
            console.log("Status error: " + getBadges.status);
        }
    } else {
        console.log("Ignored readyState: " + getBadges.readyState);
    }
}

getBadges.open("GET", url_badges, true);
getBadges.send();