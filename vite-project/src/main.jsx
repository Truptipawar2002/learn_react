import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div> 
    )
    

}

// const domElement = document.createElement
// (reactElement.type)
// domElement.innerHTML = reactElement.children
// for (const prop in reactElement.props) {
//      if (prop === 'children') continue;
//      domElement.setAttribute(prop, reactElement.props[prop])
        
//      }
//       container.appendChild(domElement)
        
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target : '_blank'

//     },
//     children: 'Click me to visit google'
// }

const anotherElement = ( 
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "chai aur react"


const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target : '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
     
    reactElement

)
