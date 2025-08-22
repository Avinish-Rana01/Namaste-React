const heading = React.createElement(
  "div",               
  { id: "parent" },[
      React.createElement(
    "div",               
    { id: "child" },     
    [                    
      React.createElement(
        "h1",            
        { id: "heading" },
        "React1"
      ),
      React.createElement(
        "h2",            
        { id: "heading" },
        "React1"
      )
    ]
  ),
    React.createElement(
    "div",               
    { id: "child" },     
    [                    
      React.createElement(
        "h1",            
        { id: "heading" },
        "React2"
      ),
      React.createElement(
        "h2",            
        { id: "heading" },
        "React2"
      )
    ]
  )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

let count = 0;
const counterEl = document.querySelector('#counter');
document.querySelector('#increment').addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
});

