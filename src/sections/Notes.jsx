import React, { useEffect } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'froala-editor';
import './static/Notes.css';

const Notes = () => {
  useEffect(() => {
    // Initialize the Froala editor
    const editor = new FroalaEditor('#froala', {
      // Add configuration options here
    });

    // Cleanup function to destroy the editor on component unmount
    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
      <div id="froala"></div>
    </>
  );
};

export default Notes;
