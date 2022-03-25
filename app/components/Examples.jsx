var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Silver%20Spring,MD'>Silver Spring, MD</Link>
        </li>
        <li>
          <Link to='/?location=Austin,TX'>Austin, TX</Link>
        </li>
        <li>
          <Link to='/?location=San%20Diego,CA'>San Diego, CA</Link>
        </li>
        <li>
          <Link to='/?location=Belize'>Belize</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
