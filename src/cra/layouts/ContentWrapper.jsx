const ContentWrapper = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};

export default ContentWrapper;
