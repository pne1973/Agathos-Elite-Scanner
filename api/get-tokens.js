export default async function handler(req, res) {
    try {
        // A API da DexScreener é chamada pelo SERVIDOR da Vercel, não pelo browser
        const response = await fetch('https://api.dexscreener.com/latest/dex/search?q=SOL%20ETH%20BASE');
        const data = await response.json();

        // Permite que o teu index.html aceda a estes dados
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Falha ao obter dados' });
    }
}
