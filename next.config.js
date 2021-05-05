module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/surah/al-fatihah',
        permanent: false,
      }
    ]
  },
}