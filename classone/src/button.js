function Button(props) {
  console.log(props);
  return (
    <button className="btn btn-dark px-5" onClick={props.click}>
      {props.btnValue}
    </button>
  );
}

export default Button;
