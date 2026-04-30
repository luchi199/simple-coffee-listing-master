import { PiStar, PiStarFill } from "react-icons/pi";

export default function ProductCard({ product = {} }) {
  const { name, image, price, rating, votes, popular, available } = product;

  return (
    <div className="m-4 flex flex-col gap-4 pb-3  w-max text-white">
      <div className="relative rounded-2xl h-44 w-auto overflow-hidden">
        <img className="h-full" src={image} alt={name} />
        {popular && (
          <p className="absolute top-2 left-2 text-xs font-medium leading-none  bg-amber-300 text-gray-900 w-min py-1.5 px-2.5 rounded-2xl">
            Popular
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{name}</h4>
          <p className="bg-emerald-100 text-gray-900 py-1 px-2 rounded font-medium text-sm">
            {price}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5 items-center">
            {rating ? (
              <PiStarFill className="text-amber-300" />
            ) : (
              <PiStar className="text-gray-500 " />
            )}
            {rating ? (
              <p className="font-medium">
                {rating}
                <span className="text-gray-500"> ({votes} votes)</span>
              </p>
            ) : (
              <p className="text-gray-500 font-medium">No ratings</p>
            )}
          </div>
          {!available && <p className="text-orange-500">Sold out</p>}
        </div>
      </div>
    </div>
  );
}
