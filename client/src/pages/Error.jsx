import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if(error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found"></img>
          <h3>
            Oops! The page you're looking for does not exist.
          </h3>
          <p>
            we could not find the page you were looking for.
          </p>
          <Link to="/dashboard">Go to Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3> Something Went Wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error
