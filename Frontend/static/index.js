import { h, html, render, useState, useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js';
import { setup, styled } from 'https://unpkg.com/goober@2.0.19/dist/goober.mjs';

setup(h);
const api = "http://localhost:5001/api";

const Redhead = styled("h1")`
  color: red;
`;

function App (props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}/posts`)
      .then(res => res.json())
      .then(d => setData(d || []));
  }, []);

  return html`
    <${Redhead}>Posts</${Redhead}>
    <div>
      ${data.map(row => html`
        <p key=${row.title}>
          ${row.title}: ${row.url}
        </p>
      `)}
    </div>`;
}

render(html`<${App} name="World" />`, document.body);