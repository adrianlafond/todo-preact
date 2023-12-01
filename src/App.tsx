import { JSX, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import './App.css'

function App (): JSX.Element {
  // Create the count state.
  const [count, setCount] = useState(0)
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  // Return the App component.

  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3010')
      .then(async response => {
        if (response.ok) {
          const rawText = await new Response(response.body).text()
          const xmlText = rawText
            .replace(/<meta\b([^>]*)>/gi, '<meta$1 />')
            .replace(/<link\b([^>]*)>/gi, '<link$1 />')
            .replace(/<br\b([^>]*)>/gi, '<br$1 />')
            .replace(/<hr\b([^>]*)>/gi, '<hr$1 />')
          const parser = new DOMParser()
          const xml = parser.parseFromString(xmlText, 'text/xml')

          xml.querySelectorAll('style,br').forEach(el => el.remove())
          setHtml(xml.querySelector('body')?.innerHTML || '');
        } else {
          console.error('ERROR')
        }
      })
  }, [])

  console.log(html);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://preactjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Preact
          </a>
        </p>
      </header>

      <section dangerouslySetInnerHTML={{ __html: html }}>{html}</section>
    </div>
  )
}

export default App
