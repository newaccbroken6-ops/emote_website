// API endpoint to serve emotes data
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

  // Sample emotes data (in a real implementation, this would come from a database or external API)
  const emotes = [
    { id: '909000001', name: 'Icon_Emote_Hello' },
    { id: '909000002', name: 'Icon_Emote_LOL' },
    { id: '909000003', name: 'Icon_Emote_Provoke' },
    { id: '909000004', name: 'Icon_Emote_Clap' },
    { id: '909000005', name: 'Icon_Emote_DAB' }
  ];

  response.status(200).json({
    emotes: emotes,
    count: emotes.length,
    total: emotes.length
  });
}