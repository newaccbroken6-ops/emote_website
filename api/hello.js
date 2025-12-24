// API endpoint for Vercel
export default function handler(request, response) {
  response.status(200).json({
    message: "Welcome to the Free Fire Emotes API",
    endpoints: {
      emotes: "/api/emotes",
      search: "/api/search?q={query}"
    },
    timestamp: new Date().toISOString()
  });
}