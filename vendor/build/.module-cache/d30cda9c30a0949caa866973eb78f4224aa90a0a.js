/** @jsx React.DOM */



var App = React.createClass({displayName: 'App',

    render: function() {
        return (React.createElement("div", null, " Hello World ", 2000 + 15, "! "))
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    var App = React.createElement(App, {});
    React.render(App, document.getElementById("body"));
});