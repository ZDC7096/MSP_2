import Home from "./Home";
import NavBar from "./NavBar";

function Default (html) {
    return (
        <html>
            <head>
                <title>Playlist Maker</title>
            </head>
            <body>
                <NavBar/>
               {html.children}
            </body>
        </html>
    )
}

export default Default;