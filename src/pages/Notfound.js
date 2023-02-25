import { Link } from "react-router-dom"

export default function Notfound () {
    return (
        <div className = 'Notfound'>
            <h2>sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'> Back to home page... </Link>
            </div>

    );
}

// export default Notfound;