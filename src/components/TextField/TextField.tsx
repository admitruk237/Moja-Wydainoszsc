type TextFieldPropsType = {
  placeholder: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function TextField(props: TextFieldPropsType) {
  return (
    <div className="w-full">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="w-full p-3 border rounded-2xl"
      />
    </div>
  );
}

export default TextField;
