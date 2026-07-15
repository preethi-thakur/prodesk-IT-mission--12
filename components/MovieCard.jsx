import Image from "next/image";
import { getImageUrl } from "@/lib/omdb";

export default function MovieCard({
  movie,
  isFavorite = false,
  onToggleFavorite,
}) {
  if (!movie) return null;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Image
        src={getImageUrl(movie.Poster)}
        alt={`${movie.Title || "Movie"} poster`}
        width={500}
        height={750}
        loading="lazy"
        className="h-[300px] w-full object-cover"
      />

      <div className="p-4">
        <h3
          className="truncate font-semibold text-white"
          title={movie.Title}
        >
          {movie.Title}
        </h3>

        <p className="text-sm text-slate-400">
          {movie.Year || "Unknown"}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onToggleFavorite?.(movie)}
        aria-label={
          isFavorite
            ? `Remove ${movie.Title} from favorites`
            : `Add ${movie.Title} to favorites`
        }
        title={isFavorite ? "Remove Favorite" : "Add Favorite"}
        className="absolute right-2 top-2 rounded-full bg-black/60 p-2 text-2xl transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
