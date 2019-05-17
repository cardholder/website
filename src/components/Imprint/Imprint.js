import React from "react";

import classes from "./Imprint.css";

const imprint = () => (
  <div className={classes.Imprint}>
    <h1>Impressum</h1>
    <p>
      <strong>Anbieter:</strong>
      <br />
      Max Mustermann
      <br />
      Musterstraße 1<br />
      80999 München
      <br />
    </p>

    <p>
      <strong>Kontakt:</strong> <br />
      Telefon: 089/1234567-8
      <br />
      Telefax: 089/1234567-9
      <br />
      E-Mail: mail@mustermann.de
      <br />
      Website: www.mustermann.de
    </p>

    <br />
    <p>
      <strong>Bei redaktionellen Inhalten:</strong>
      <br />
      <br />
      Verantwortlich nach § 55 Abs.2 RStV
      <br />
      Moritz Schreiberling
      <br />
      Musterstraße 2<br />
      80999 München
      <br />
    </p>

    <div className={classes.Icon}>
      <p>
        Icons made by{" "}
        <a href="https://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </p>
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/google" title="Google">
          Google
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </p>
      <p>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </p>
    </div>
  </div>
);

export default imprint;
