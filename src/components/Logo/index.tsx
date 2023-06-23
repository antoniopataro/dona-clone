interface Props {
  color?: string;
  size?: number;
}

function Logo({ color, size }: Props) {
  return (
    <div
      className="pointer-events-none aspect-square"
      style={{
        height: size ?? 24,
        width: size ?? 24,
      }}
    >
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180 60H120C86.8629 60 60 86.8629 60 120V180C60 213.137 86.8629 240 120 240H180C213.137 240 240 213.137 240 180V120C240 86.8629 213.137 60 180 60ZM120 0C53.7258 0 0 53.7258 0 120V180C0 246.274 53.7258 300 120 300H180C246.274 300 300 246.274 300 180V120C300 53.7258 246.274 0 180 0H120Z"
          fill={color ?? "#1992FA"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140 100C117.909 100 100 117.909 100 140V160C100 182.091 117.909 200 140 200H160C182.092 200 200 182.091 200 160V140C200 117.909 182.092 100 160 100H140Z"
          fill={color ?? "#1992FA"}
        />
      </svg>
    </div>
  );
}

export default Logo;
