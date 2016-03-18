var React = require('react');
var WarpLayer = require('./WarpLayer');
var _ = require('underscore');

var COLORS = ['purple', 'orange', 'blue'];

var WarpWrapper = React.createClass({
  renderLayers: function(){
    var layers = [];
    _.each(COLORS, function(color){
      layers.push(
        <WarpLayer
          key={'layer-' + color}
          color={color} />
      );
    });
    return layers;
  },
  render: function() {
    return (
      <div className='warp'>
        {this.renderLayers()}
      </div>
    );
  }

});

module.exports = WarpWrapper;