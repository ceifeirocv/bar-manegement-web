import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return(
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">{error.status}</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> {error.statusText}.</p>
                <p className="lead">
                    {error.data}.
                  </p>
                <Link to={'/'} className="btn btn-primary">Go Home</Link>
            </div>
        </div>
  )
}

export default ErrorPage