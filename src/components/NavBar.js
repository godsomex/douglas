import React from 'react';
import styled from '@emotion/styled';

function NavBar() {
    return (
        <NavBarStyles>
            <nav>
                <ul className="drop">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="nav-icon"></span>
                    </label>
                    <li className="logo">
                        <a href="#">TechFun</a>
                    </li>
                    <li className="item">
                        <a href="#">Home</a>
                    </li>
                    <li className="item">
                        <a href="#">About</a>
                    </li>
                    <li className="item">
                        <a href="#">Services</a>
                    </li>

                    <li className="item button">
                        <a href="#">Log In</a>
                    </li>
                    <li className="item button secondary">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </NavBarStyles>
    );
}

export default NavBar;

const NavBarStyles = styled.div`
    .menu-btn {
        display: none;
    }
    .menu-btn:checked ~ .item {
        display: block;
    }

    .menu-btn:checked ~ .menu-icon .nav-icon {
        background: transparent;
    }

    .menu-btn:checked ~ .menu-icon .nav-icon: before {
        transform: rotate(-45deg);
        top: 0;
    }
    .menu-btn:checked ~ .menu-icon .nav-icon: after {
        transform: rotate(45deg);
        top: 0;
    }
    .menu-icon {
        cursor: pointer;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }

    .nav-icon {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 18px;
    }

    .nav-icon:before {
        content: '';
        top: 5px;
        background: #333;
        display: block;
        height: 100%;
        position: absolute;
        transition: background 0.2s ease-out;
        width: 100%;
    }

    .nav-icon:after {
        content: '';
        top: -5px;
        background: #333;
        display: block;
        height: 100%;
        position: absolute;
        transition: background 0.2s ease-out;
        width: 100%;
    }

    /* Basic styling */
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    nav {
        background: #222;
        padding: 5px 20px;
    }
    ul {
        list-style-type: none;
    }
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .logo a:hover {
        text-decoration: none;
    }
    .drop li {
        font-size: 16px;
        padding: 15px 5px;
        white-space: nowrap;
    }
    .logo a {
        font-size: 20px;
    }
    .button.secondary {
        border-bottom: 1px #444 solid;
    }

    /* Mobile menu */
    .drop {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .item.button {
        order: 2;
    }
    .item {
        width: 100%;
        text-align: center;
        order: 3;
        display: none;
    }
    .item.active {
        display: block;
    }

    /* Tablet menu */
    @media all and (min-width: 468px) {
        .drop {
            justify-content: center;
        }

        .logo {
            flex: 1;
        }

        .item.button {
            width: auto;
            order: 1;
            display: block;
        }

        .button.secondary {
            border: 0;
        }
        .button a {
            padding: 7.5px 15px;
            background: teal;
            border: 1px #006d6d solid;
            border-radius: 50em;
        }
        .button.secondary a {
            background: transparent;
        }
        .button a:hover {
            text-decoration: none;
            transition: all 0.25s;
        }
        .button:not(.secondary) a:hover {
            background: #006d6d;
            border-color: #005959;
        }
        .button.secondary a:hover {
            color: #ddd;
        }
    }

    /* Desktop menu */
    @media all and (min-width: 768px) {
        .item {
            display: block;
            width: auto;
        }

        .menu-icon {
            display: none;
        }
        .logo {
            order: 0;
        }
        .item {
            order: 1;
        }
        .button {
            order: 2;
        }
        .drop li {
            padding: 15px 10px;
        }
        .drop li.button {
            padding-right: 0;
        }
    }
`;
