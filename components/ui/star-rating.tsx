
"use client";

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
  className?: string;
}

export const StarRating = ({
  rating = 5,
  maxStars = 5,
  className = ""
}: StarRatingProps) => {
  return (
    <div className={`flex justify-center ml-6 ${className}`}>
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 mx-1 ${
            index < rating ? "text-yellow-400" : "text-gray-400"
          }`}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ))}
    </div>
  );
};