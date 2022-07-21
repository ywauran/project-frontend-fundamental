class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           padding: 16px;
           border-radius: 5px;
           display: flex;
           position: sticky;
           top: 10px;
           margin-right: auto;
           margin-left: auto;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           background: #2F2C44;
           border-radius: 8px;
           border: 0;
           border-bottom: 2px solid #414141;
           font-weight: bold;
           color: white;
       }
      
       .search-container > input:focus {
           outline: 0;
           background-color: #2F2C44;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
           color: white;
       }
      
       .search-container >  input::placeholder {
           color: rgba(255, 255, 255, 0.2);;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           border-radius: 8px;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #2F2C44;
           color: rgba(255, 255, 255, 0.2);
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 50%;
               margin-right: auto;
               margin-left: auto;
           }
       }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search Movie" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);