type ButtonProps = {
  rating: number;
  isClicked: boolean;
  onClick: () => void;
};

function Button({ rating, isClicked, onClick }: ButtonProps) {
  return (
    <div
      className={`w-10 h-10 shadow-md flex items-center justify-center rounded-full cursor-pointer
           ${
             isClicked
               ? "bg-orange-600"
               : "bg-slate-700 hover:bg-slate-500 transition delay-90"
           }`}
      onClick={onClick}
    >
      <p className="text-white opacity-70 text-sm pt-1 select-none">{rating}</p>
    </div>
  );
}

export default Button;
