const LoaderHoc = (Component) => {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Hold on, Loading data...</p>;
    else return <Component {...props} />;
  };
};

export default LoaderHoc;
