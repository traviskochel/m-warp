var React = require('react');
var Helpers = require('../Utils/Helpers');


var WarpLayer = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      x: Helpers.randomFloat(-500, 500),
      y: Helpers.randomFloat(-500, 500),
      speedX: Helpers.randomFloat(-1,1),
      speedY: Helpers.randomFloat(-2,2),
    };
  },
  componentDidMount: function() {
    setInterval(this.moveBg, 50);
  },
  moveBg: function(){
    this.setState({
      x: this.state.x + this.state.speedX,
      y: this.state.y + this.state.speedY
    });
  },
  render: function() {
    var styles = {
      backgroundImage: 'url(/images/m-warp-' + this.props.color + '.jpg)',
      backgroundPosition: this.state.x + 'px ' + this.state.y + 'px'
    }
    return (
      <div 
        style={styles}
        className={'warp--layer warp--layer-' + this.props.color} />
    );
  }

});

module.exports = WarpLayer;