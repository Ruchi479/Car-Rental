import React from 'react';

function Navbar(props){
    return (
        <div>
            <div className= 'header'>
                <div className='d-flex jusity-content-between'>
                    <h1> Savaari car Rentals</h1>
                    <button>User</button> 
                </div>
            </div>

            <div className='content'>
               {props.children}

            </div>
        </div>
    );
}

export default Navbar;