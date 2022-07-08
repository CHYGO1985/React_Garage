import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav>
                <img src='./react-logo.png' width='40px' />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <h1>Jingjie</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <p>© 2022 jiang development. All rights reserved.</p>
        </footer>
    )
}

function IndexPage() {
    return (
        <div>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <IndexPage />, 
    document.getElementById("root")
)