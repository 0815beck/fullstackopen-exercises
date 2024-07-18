Exercise 0.6: Adding a new note in the single page version of the app.

The difference is, that the browser changes its local data immediately and redraws the page.
After that it sends a POST-request to the server to ask it to update its remote data.

```mermaid
sequenceDiagram
    participant browser
    participant server
    Note over browser: adds note to local data, <br/> redraws notes, <br/>sends a POST-request to the server
    browser->>server: POST .../exampleapp/new_note_spa
    activate server 
    Note over server: adds the new note (payload <br/>of the html-request) to its data
    server-->>browser: 201 created
    deactivate server
    Note over browser: redraws the notes again, <br/>for some reason
```