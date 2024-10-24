/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',  // Permitir sprites de Pokémon
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        pathname: '/**',  // Permitir cualquier ruta dentro del dominio pokeapi.co
      },
    ],
  },
}
 
module.exports = nextConfig