// API endpoint to search emotes
export default function handler(request, response) {
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  const { q } = request.query;
  
  if (!q) {
    return response.status(400).json({
      error: 'Query parameter "q" is required'
    });
  }

  // Sample emotes data (in a real implementation, this would come from a database or external API)
  const allEmotes = [
    { id: '909000001', name: 'Icon_Emote_Hello' },
    { id: '909000002', name: 'Icon_Emote_LOL' },
    { id: '909000003', name: 'Icon_Emote_Provoke' },
    { id: '909000004', name: 'Icon_Emote_Clap' },
    { id: '909000005', name: 'Icon_Emote_DAB' },
    { id: '909000006', name: 'Icon_Emote_FunkyChicken' },
    { id: '909000007', name: 'Icon_Emote_Wave' },
    { id: '909000008', name: 'Icon_Emote_Shootdance' },
    { id: '909000009', name: 'Icon_Emote_Babyshark' },
    { id: '909000010', name: 'Icon_Emote_Valentine' }
  ];

  // Filter emotes based on the search query
  const filteredEmotes = allEmotes.filter(emote => 
    emote.id.toLowerCase().includes(q.toLowerCase()) || 
    emote.name.toLowerCase().includes(q.toLowerCase())
  );

  response.status(200).json({
    emotes: filteredEmotes,
    count: filteredEmotes.length,
    total: allEmotes.length,
    query: q
  });
}