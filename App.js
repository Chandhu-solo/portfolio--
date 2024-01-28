import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>G.Gopi chand</h1>
        <img src='/gopi.jpg' alt='Profile' className='Profile-image' height={650} />
        <p className='solo'> Web Developer</p>
        <div className='Phote'>
        </div>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>Welcome to my portfolio ! I am a passionate web Developer with 
          expertise in HTML,CSS,and JavaScript.I love creating 
          user-friendly and visually appealing websites.</p>
      </section>
      <div className='Skills'>
         <p>
          <h3 className='hello'>Skills</h3>
            <ul className='Technical skills'> 
            <h4>Technical skills</h4>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>BootStrap</li>
              <li>React JavaScript</li>
            </ul>
            <p> 
              <ul className='Communication skills'>
                <h4>Communication Skills</h4> 
                <li>communication</li>
                <li> leadership</li>
                <li>confidence</li>
              </ul>
            </p>
          </p>
        </div>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Weather App</h3>
          <p>
            I have developed a specific website which shows the weather of the particular place or aregion of a country.
            I have done this web development course in AD infocomm Systems pvt ltd .</p>
        </div>
        <div className="Project">
          <h3>Data Science</h3>
          <p>
            I have done a Data Science project in bharath intern as part of one month of training.
          </p>
        </div>
      </section>
      <footer className="App-footer">
        <h2>Contact</h2>
        <p>gmail: gunjigopichand89@gmail.com</p>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <p>LinkedIn: linkedin.com/in/Gunji Gopichand</p>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <p>GitHub: github.com/solo-chandhu</p>
      </footer>
    </div>
  );
}

export default App;
