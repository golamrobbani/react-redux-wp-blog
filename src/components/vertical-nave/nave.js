import React,{Fragment} from 'react';

const Nave = () => {
    return (
        <Fragment>
       
                <div class="main-menu">
                    <nav>
                        <ul class="menu-list">
                            <li class="menu-item-has-children">
                                <a href="index.html">Home</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="index.html">Standard Layout</a>
                                    </li>
                                    <li>
                                        <a href="index-grid.html">Grid Layout</a>
                                    </li>
                                    <li>
                                        <a href="index-grid-1st-large.html">Grid 1st Large</a>
                                    </li>
                                    <li>
                                        <a href="index-list.html">List Layout</a>
                                    </li>
                                    <li>
                                        <a href="index-list-1st-large.html">List 1st Large</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="#">Lifestyle</a>
                            </li>
                            <li>
                                <a href="#">Travel</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="single.html">Single</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="single.html">Image</a>
                                    </li>
                                    <li>
                                        <a href="single.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="single.html">Slideshow</a>
                                    </li>
                                    <li>
                                        <a href="single.html">Youtube Video</a>
                                    </li>
                                    <li>
                                        <a href="single.html">Vimeo Video</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
             
        
        </Fragment>
    );
}

export default Nave;
