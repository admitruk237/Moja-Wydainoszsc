type CheckboxPropsType = {
  discription: string;
};

function Checkbox(props: CheckboxPropsType) {
  return (
    <div className="flex justify-start items-center gap-2">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-gray-400 rounded-md checked:bg-amber-600 checked:border-amber-600 peer"
        />
        <span className="absolute left-1 top-0 text-white text-sm opacity-0 peer-checked:opacity-100">
          ✓
        </span>
      </label>
      <span>{props.discription}</span>
    </div>
  );
}

export default Checkbox;
