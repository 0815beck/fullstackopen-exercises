Exercise 0.5: Create a similar diagram for what happens when the user opens the single page version of the example app.

Actually, it looks pretty much the same to what happens in the other version of the app. The difference
of the single page version shows only when one adds a new note via the form at the bottom of the page (see
exercise 0.6).

```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa 
    activate server
    server-->>browser: HTML-file
    deactivate server
    Note over browser: browser parses HTML-file and <br/>  finds the linked style-sheet <br/> and the script tag
    browser->>server:  GET .../exampleapp/main.css
    activate server
    server-->>browser: CSS-file
    deactivate server
    browser->>server: GET .../exampleapp/spa.js
    activate server
    server-->>browser: javascript file
    deactivate server
    Note over browser: browser starts to execute <br/> the code in the spa.js file
    Note over browser: the codes tell the browser to <br/> send out an xhttps-request
    browser->>server: GET .../exampleapp/data.json
    activate server
    server-->>browser: JSON-file
    deactivate server
    Note over browser: browser checks status-code of the xhttps-request <br/>and executes the callback-function
    Note over browser: browser creates an unordered list and <br/> adds the notes to it. the page renders
```