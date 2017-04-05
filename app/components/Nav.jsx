var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <h1>React Weather</h1>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      <a href="http://www.Nicks-Net.us" target="new">Nicholas Ford - Nicks-Net</a>
    </div>
  );
}

module.exports = Nav;
