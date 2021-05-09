import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='forgot-creds'>
          <p>Already have an Intuit account?</p>
          <p><a href='#'>I forgot my User ID or Password</a></p>
        </div>
        <button className='btn sign-in'>
          <i className='fas fa-unlock-alt'/>
          Sign In
        </button>
      </nav>
      <div className='products'>
        <h1>
          <a href='#'>
            Intuit
          </a>
        </h1>
        <h2>
          <a href='#'>
            <i className='fas fa-leaf'/>
            mint
          </a>
          <a href='#'>
            <i className='fas fa-book'/>
            quickbooks
          </a>
          <a href='#'>
            <i className='fas fa-check-circle'/>
            turbotax
          </a>
        </h2>
      </div>
      <form action='#' method='push'>
        <fieldset>
          <legend>
            <h3>Create an Intuit account</h3>
            <h4>One account for everything Intuit, including Mint.</h4>
            <h4><a href='#'>Learn more</a></h4>
          </legend>
          <label>
            Email address
            <input type='email'/>
          </label>
          <label>
            Phone <em>(recommended)</em>
            <input type='tel'/>
            <p className='caption'>
              Standard call, messaging or data rates may apply.
            </p>
          </label>
          <label>
            Password
            <input type='password'/> 
          </label>
          <button className='btn create-account'>
            <i className='fas fa-unlock-alt'/>
            Create Account
          </button>
        </fieldset>
        <p className='legal'>
          By selecting Create Account, you agree to our 
          <a href='#'> Terms </a> 
          and have read and acknowledge our 
          <a href='#'> Global Privacy Statement. </a>
        </p>
        <div className='recaptcha'>
          Invisible reCAPTCHA by Google
          <a href='#'> Privacy Policy </a> 
          and 
          <a href='#'> Terms of Use.</a>
        </div>
      </form>
      <div className='more-legal'>
        <a href='#'>Legal</a>
        <a href='#'>Privacy</a>
        <a href='#'>Security</a>
      </div>
      <div className='copyright'>
        <p>
          © 2021 Intuit, Inc. All rights reserved. Intuit, QuickBooks, QB, TurboTax,
          ProConnect and Mint are registered trademarks of Intuit Inc.
        </p>
        <p>
          Terms and conditions, features, support, pricing, and service options subject
          to change without notice.
        </p>
      </div>
      <footer>
        <a href='#'>Privacy Settings</a>
      </footer>
    </div>
  );
}

export default App;