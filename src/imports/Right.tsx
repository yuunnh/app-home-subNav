import imgLogo from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";

export default function Right() {
  return (
    <div className="relative size-full" data-name="right">
      <div className="absolute inset-0 rounded-[8px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgLogo} />
      </div>
    </div>
  );
}