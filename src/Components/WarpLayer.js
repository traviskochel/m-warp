var React = require('react');
var Helpers = require('../Utils/Helpers');


var WarpLayer = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      x: 0,
      y: 0,
      speedX: Helpers.randomFloat(1,10),
      speedY: Helpers.randomFloat(1,2.5),
    };
  },
  componentDidMount: function() {
    setInterval(this.moveBg, 50);
  },
  moveBg: function(){
    this.setState({
      // x: this.state.x + this.state.speedX,
      y: this.state.y + this.state.speedY
    });
  },
  render: function() {
    var styles = {
      backgroundImage: 'url(/images/m-warp-' + this.props.color + '.jpg)',
      backgroundPosition: 'center ' + this.state.y + 'px'
    }
    return (
      <div 
        style={styles}
        className={'warp--layer warp--layer-' + this.props.color} />
    );
  }

});

module.exports = WarpLayer;