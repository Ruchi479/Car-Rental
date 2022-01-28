import React from 'react';

function Navbar(props){
    return (
        <div>
            <div className= 'header shadow'>
                <div className='menu'>
                    <h1> Savaari Car Rentals</h1>
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