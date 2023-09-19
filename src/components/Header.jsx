export const Header = (props) => {
  return (
    <div className="bg-image">
      <div className="text-content">
        <h1 className="header-title">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};
