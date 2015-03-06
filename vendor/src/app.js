/** @jsx React.DOM */

var names = ["Charles", "Sandy", "Francis", "Will", "Amy", "Armando", "Eli"]
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



var Card = React.createClass({

    getInitialState: function() {
        return {favorited: false}
    },

    toggleFavorite: function() {
        var fav = !this.state.favorited;
        this.setState({favorited: fav});
        this.props.addToFavorites(this.props.corgi);
    },

    render: function() {
        debugger
        var isFavoritedColor = this.state.favorited ? "red" : "black"
        var stylesHash = {color: isFavoritedColor };

        return (<div onClick={this.toggleFavorite} className={isFavoritedColor}>
                    <img src="http://placecorgi.com/260/180" />
                    <div style={stylesHash} >{this.props.corgi.name}</div>
                    <div>{this.props.corgi.age}</div>
                </div>
        );
    }
});

var App = React.createClass({

    getInitialState: function() {
        return { favorites: []}
    },

    addToFavorites: function(corgi) {
        var tempArray = this.state.favorites;
        tempArray.push(corgi)
        this.setState({favorites: tempArray})
    },

    render: function() {
        var ctx = this;

        var corgisDiv = _.map(this.props.corgis, function(corgi) {
            return <Card corgi={corgi} addToFavorites={ctx.addToFavorites} />
            //return <div> {corgi.name + " " + corgi.age} </div>
        });

        return (
            <div>
                {corgisDiv}
                <div>{this.state.favorites}</div>
            </div>
        );
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    var app = React.createElement(App,
            {corgis: corgis}
        );
    React.render(app, document.getElementById("body"));
});

