import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { editTodo } from '../features/todo/todoSlice'

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [editedText, setEditedText] = useState('');
  const dispatch = useDispatch()


  const handleSubmit = () => {
    onSubmit(editedText);
    setEditedText('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'visible' : 'hidden'} space-y-2`}>
      <textarea
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
      <button
        onClick={onClose}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Cancel
      </button>
    </div>
  );
};

export default Modal;
