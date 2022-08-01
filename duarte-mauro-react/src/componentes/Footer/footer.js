import React from 'react';
import './Footer.css';

function Footer () {
        return (
            <footer className='row'>
                <div className='links col-sm-12 col-xs-12 '>
                    <a className='LinkFooter' href='../../index.js' alt="">preguntas frecuentes</a> |
                    <a className='LinkFooter' href='../../index.js' alt="">contacto</a> |
                    <a className='LinkFooter' href='../../index.js' alt="">sobre nosotros</a>
                </div>
                <div className='copy col-sm-12 col-xs-12'>
                    Copyright © 2022
                </div>
            </footer>
        )
}

export default Footer; 