'use strict';

function Homepage() {
  return ( <div>
            <h3>Welcome to Brighticorn Trading Cards!</h3>
            <a href="/cards">Click here to view the trading cards.</a>
            <img src= "/static/img/balloonicorn.jpg"></img>
        </div>
        );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
