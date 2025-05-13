type TitlePropsType = {
  title: string;
  subTitle?: string;
};
function Title(props: TitlePropsType) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="text-[14px] pt-4">{props.subTitle}</p>
    </div>
  );
}

export default Title;
