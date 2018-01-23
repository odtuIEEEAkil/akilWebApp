import React from 'react';
import "./modal.css";

export default ({children, visible}) => 
<div className={"modal"} 
    style={{display: visible ? "block" : "none"}}>
    <div className="modal-content">
        {children}
    </div>
</div>