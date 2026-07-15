import Image from "next/image";
import { getImageUrl } from "@/lib/omdb";

export default function MovieDetailClient({ movie }) {
  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-xl bg-slate-800 p-6 text-center text-slate-300">
          Movie details are unavailable.
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <Image
          src={getImageUrl(movie.Poster)}
          alt={`${movie.Title || "Movie"} poster`}
          width={400}
          height={600}
          loading="lazy"
          className="rounded-xl object-cover shadow-lg"
        />

        <section className="flex-1">
          <h1 className="text-4xl font-bold text-white">
            {movie.Title || "Untitled"}
          </h1>

          <p className="mt-2 text-slate-400">
            {[movie.Year, movie.Rated].filter(Boolean).join(" • ") || "Information unavailable"}
          </p>

          <p className="mt-6 leading-7 text-slate-300">
            {movie.Plot && movie.Plot !== "N/A"
              ? movie.Plot
              : "No plot summary is available for this movie."}
          </p>
        </section>
      </div>
    </main>
  );
}
