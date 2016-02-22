var React = require('react');
var FlickrItem = require('./FlickrItem.jsx');
var HTTP = require('../services/httpservice');

var FlickrItemGrid = React.createClass({
    getInitialState: function() {
        return {flickritems:[]};
    },
    componentWillMount: function() {
      HTTP.get('/flickrItems')
        .then(function(data) {
            this.setState({flickritems: data});
        }.bind(this));
    },
    render: function() {

        var flickrItems = this.state.flickritems.map(function(item) {
            return <FlickrItem media={item.media} title={item.title} link={item.link} author={item.author} profile={item.author_id} description={item.date_taken} tags={item.tags} />;
        });

        return (<div className="row">{flickrItems}</div>);

    }
});


module.exports = FlickrItemGrid;
