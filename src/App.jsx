import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

import './App.css'

import Todo from './sections/Todo';
import Notes from './sections/Notes';


const Sidebar = ({ onSectionClick, activeSection }) => {
  return (
    <div className="left half">
      <ul>
        <li><a href="#todo" onClick={(e) => onSectionClick(e, 'todo')} className={activeSection === 'todo' ? 'active' : ''}><FontAwesomeIcon icon={faTasks} /></a></li>
        <li><a href="#notes" onClick={(e) => onSectionClick(e, 'notes')} className={activeSection === 'notes' ? 'active' : ''}><FontAwesomeIcon icon={faStickyNote} /></a></li>
      </ul>
    </div>
  );
};

const Section = ({ id, isVisible }) => {
  return (
    <section id={id} style={{ display: isVisible ? 'block' : 'none' }}>
      {id === 'todo' && <Todo />}
      {id === 'notes' && <Notes />}
    </section>
  );
};


function App() {
  const [visibleSection, setVisibleSection] = useState('todo');

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setVisibleSection(sectionId);
  };

  return (
    <div className="app">
      <Sidebar onSectionClick={handleSectionClick} activeSection={visibleSection}/>
      <div className="right half">
        <header>
          {/* <Profile /> */}
        </header>
        <main>
          <Section id="todo" isVisible={visibleSection === 'todo'} />
          <Section id="notes" isVisible={visibleSection === 'notes'} />
        </main>
      </div>
    </div>
  );
}

export default App
