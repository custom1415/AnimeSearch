import Loader from "./Loader";


export const withLoader =
  (WrappedComponent) =>
  ({ IsLoading }) => {
    return IsLoading ? <Loader/> : 
    <WrappedComponent />;
  };
