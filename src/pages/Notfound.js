import { Link } from "react-router-dom"

export default function Notfound () {
    return (
        <div className = 'not-found'>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'> Back to home page... </Link>
            </div>

    );
}

// export default Notfound;