/** @jsx React.DOM */

var names = ["Charles", "Sandy", "Francis", "Will", "Amy", "Armando", "Vico"]
var age = [3, 8];

var createCorgi = function(i) {
    return {
        id: i,
        name: _.sample(names, 1)[0],
        age: _.sample(age, 1)[0]
    }
}

var corgis = _.map(_.range(20), function(i) {
    return createCorgi(i);
});

var App = React.createClass({

    render: function() {
        return <div> Hello World {2000 + 15}! </div>;
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    var app = React.createElement(App, {});
    React.render(app, document.getElementById("body"));
});