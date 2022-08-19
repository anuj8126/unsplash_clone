import React from "react";

function Header({ handleInputchnage, handleSearch }) {
    return (
        <div className='banner'>
            <div className='banner-container'>
                <div className='banner-content'>
                    <h1>Unsplash</h1>
                    <p>
                        The internet’s source of freely useable images.<br />
                        Powered by creators everywhere.
                    </p>
                    <div className="banner-search">

                        <input type="text" placeholder="Search free high-resolution photos" onChange={(e) => {
                            handleInputchnage(e.target.value);
                        }} />
                        <button className='search_button' onClick={handleSearch}>Search</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;