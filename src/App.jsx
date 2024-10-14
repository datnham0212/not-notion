import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";


import './App.css'

import Home from './sections/Home';
import Todo from './sections/Todo';
import Notes from './sections/Notes';


const Sidebar = ({ onSectionClick, activeSection }) => {
  return (
    <div className="left half">
      <ul>
        <li><a href="#home" onClick={ (e) => onSectionClick(e, 'home') } className={ activeSection === 'home' ? 'active' : ''}> <FontAwesomeIcon icon={faHome} /> </a></li>
        <li><a href="#todo" onClick={ (e) => onSectionClick(e, 'todo') } className={ activeSection === 'todo' ? 'active' : '' }> <FontAwesomeIcon icon={faTasks} /> </a></li>
        <li><a href="#notes" onClick={ (e) => onSectionClick(e, 'notes') } className={ activeSection === 'notes' ? 'active' : '' }> <FontAwesomeIcon icon={faStickyNote} /> </a></li>
      </ul>
    </div>
  );
};

const Section = ({ id, isVisible }) => {
  return (
    <section id={id} style={{ display: isVisible ? 'block' : 'none' }}>
      {id === 'home' && <Home />}
      {id === 'todo' && <Todo />}
      {id === 'notes' && <Notes />}
    </section>
  );
};


function App() {
  const [visibleSection, setVisibleSection] = useState('home');

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setVisibleSection(sectionId);
  };

  return (
    <div className="app">
      <Sidebar onSectionClick={handleSectionClick} activeSection={visibleSection}/>
      <div className="right half">
        <main>
          <Section id="home" isVisible={visibleSection === 'home'} />
          <Section id="todo" isVisible={visibleSection === 'todo'} />
          <Section id="notes" isVisible={visibleSection === 'notes'} />
        </main>
      </div>
    </div>
  );
}

export default App
