import button from "./Button.module.scss"

const Button = () => {
  return (
    <div>
      <button className={button.active}>Click</button>
    </div>
  );
};

export default Button;