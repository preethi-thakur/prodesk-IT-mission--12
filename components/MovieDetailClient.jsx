import Image from 'next/image'
import { getImageUrl } from '@/lib/omdb'

export default function MovieDetailClient({ movie }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <Image
          src={getImageUrl(movie.Poster)}
          alt={movie.Title}
          width={400}
          height={600}
          className="rounded-xl object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-white">{movie.Title}</h1>
          <p className="text-slate-400">{movie.Year} • {movie.Rated}</p>
          <p className="mt-4 text-slate-300">{movie.Plot}</p>
        </div>
      </div>
    </div>
  )
}