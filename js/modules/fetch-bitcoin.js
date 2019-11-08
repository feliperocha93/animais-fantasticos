export default async function initFetchBitcoin() {
  const btcPreco = document.querySelector('.btc-preco');

  async function fetchBitcoins(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoins('https://blockchain.info/ticker');
}
