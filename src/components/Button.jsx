// when pass classname stob default style
// if you need to override pass style object
// To add Some style with out remove the style that already exists
export default function Button({ onClick, className, children, style = {} }) {
  return (
    <button
      className={`${
        className
          ? className
          : `bg-primary rounded-md transition ease-in-out delay-150 hover:bg-secondary px-4 py-1`
      }`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
