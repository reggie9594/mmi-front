import React from "react";

const Header = () => {
    return (
        <div>
            {/* Header  */}
            <header class="main-header " id="header">
                <nav class="navbar navbar-static-top navbar-expand-lg">

                    {/* search form  */}
                    <div class="search-form d-none d-lg-inline-block">
                        <div class="input-group">
                            <button type="button" name="search" id="search-btn" class="btn btn-flat">
                                <i class="mdi mdi-magnify"></i>
                            </button>
                            <input type="text" name="query" id="search-input" class="form-control" placeholder="Search"
                                autofocus autocomplete="off" />
                        </div>
                        <div id="search-results-container">
                            <ul id="search-results"></ul>
                        </div>
                    </div>

                    <div class="navbar-right ">
                        <ul class="nav navbar-nav">
                        </ul>
                    </div>
                </nav>


            </header>
        </div>
    )
}

export default Header;