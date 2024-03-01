import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container px-4">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link className="cursor-pointer text-blue-700 underline" to='/'>Back to Home</Link>
        </div>
    )
}

export default NotFoundPage;