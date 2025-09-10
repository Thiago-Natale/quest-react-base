type UppercaseColorfulTextProps = {
  text: string;
  color: string;
};

export const UppercaseColorfulText = ({
  text,
  color,
}: UppercaseColorfulTextProps) => {

    const UppercaseText = text.toUpperCase()

  return (
    <>
      <p style={{color:color}}>{UppercaseText}</p>
    </>
  );
};
