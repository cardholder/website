import React, { Fragment } from 'react'

import classes from './Imprint.css';

const imprint = () => (
    <div className={ classes.Imprint }>
        <h1>Impressum</h1>
        <p>
            <strong>Anbieter:</strong><br/>
            Max Mustermann<br/>
            Musterstraße 1<br/>
            80999 München<br/>
        </p>

        <p>
            <strong>Kontakt:</strong> <br/>
            Telefon: 089/1234567-8<br/>
            Telefax: 089/1234567-9<br/>
            E-Mail: mail@mustermann.de<br/>
            Website: www.mustermann.de
        </p>
    
        <br/>
        <p>
            <strong>Bei redaktionellen Inhalten:</strong><br/>
            <br/>
            Verantwortlich nach § 55 Abs.2 RStV<br/>
            Moritz Schreiberling<br/>
            Musterstraße 2<br/>
            80999 München<br/>
        </p>
        
    </div>
);

export default imprint;