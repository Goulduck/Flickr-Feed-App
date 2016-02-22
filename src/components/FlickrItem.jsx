var React = require('react');

var FlickrItem = React.createClass({
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="inner-col">
          <div className="image-frame">
            <img src={this.props.media.m} />
          </div>
          <h4><a href={this.props.link} >{this.props.title}</a> by <a href={"https://www.flickr.com/photos/" + this.props.profile} >{ this.props.author.slice(19,(this.props.author.length - 1))}</a></h4>
          <div><p>Date taken: {this.props.description}</p></div>
          <div><p><strong>Tags:</strong> {this.props.tags}</p></div>
        </div>
      </div>
    );
  }
});

module.exports = FlickrItem;
