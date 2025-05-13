type TextFieldPropsType = {
  placeholder: string;
};

function TextField(props: TextFieldPropsType) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full p-3 border rounded-2xl"
      />
    </div>
  );
}

export default TextField;
