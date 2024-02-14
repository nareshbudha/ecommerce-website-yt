

interface prosType{
    size:string;
}
const CartCountBadge: React.FC<prosType> = ({ }) => {
  return (
    <div className={"absolute bg-red-600 text-white text-[11px] ${size}-right-5 -left-100 w-4 -top-3 rounded-full grid place-items-center"}> 3</div>
  )
}

export default CartCountBadge;