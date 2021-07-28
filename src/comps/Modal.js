import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="deleted" 
        initial={{ y: "-50vh" }}
        animate={{ y: 0 }}
      />
       <div>
            👍
            <button className="button" 
            onClick={() => console.log("yey joe")}
            >
              like
            </button>
            👎
            <button 
            onClick={() => console.log("boo joe")}
            >
              dislike
            </button>
      </div>
    </motion.div>
  )
}

export default Modal;