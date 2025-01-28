import input from './Input.module.scss'

const Input = () => {
  return (
    <div>
      <input
        className={input.active}
        type="number"
        placeholder="Enter number"/>
    </div>
  );
};

export default Input;