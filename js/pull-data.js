// Configure URLs
var url_indivTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=3&rows=false&integers=false"
var url_subcommTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=4&rows=false&integers=false"
var url_commTotal = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=5&rows=false&integers=false"
var url_badges = "http://gsx2json.com/api?id=10gcRgtFZyJAm3g02xMt8GuzTXCDzdEwoJEqD3Uiz9To&sheet=6&rows=false&integers=false"

// Get badges
$.ajax({
    url: url_badges
})
    .done(function(data){
        badges = data;
    });

// Get Individual data
$.ajax({
    url: url_indivTotal
})
    .done(function(data){
        indivTotal = data;
    });

// Get Subcomm data
$.ajax({
    url: url_subcommTotal
})
    .done(function(data){
        subcommTotal = data;
    });

// Get Comm data
$.ajax({
    url: url_commTotal
})
    .done(function(data){
        commTotal = data;
    });