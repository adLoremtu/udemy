type Props = {
  color: string,
  children: string,
}

const ColorfulMessage = (props: Props) => {
  const {color, children} = props
  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage