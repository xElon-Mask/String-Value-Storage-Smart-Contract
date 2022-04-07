const stringStorageABI = [
  {
    inputs: [],
    name: "phrase",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_phrase",
        type: "string",
      },
    ],
    name: "majPhrase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPhrase",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
const stringStorageAddress = "0x0225a4a155e519396C409189f16295f21288ED26";
const web3 = new Web3("http://localhost:9545");
const stringStorage = new web3.eth.Contract(
  stringStorageABI,
  stringStorageAddress
);

document.addEventListener("DOMContentLoaded", () => {
  const $majPhrase = document.getElementById("setPhrase");
  const $phrase = document.getElementById("phrase");
  let accounts = [];

  web3.eth.getAccounts().then((_accounts) => {
    accounts = _accounts;
  });

  const $getPhrase = () => {
    stringStorage.methods
      .getPhrase()
      .call()
      .then((result) => {
        $phrase.innerHTML = result;
      });
  };

  $getPhrase();

  $majPhrase.addEventListener("submit", (e) => {
    e.preventDefault();
    const $phrase = e.target.elements[0].value;
    stringStorage.methods
      .majPhrase(phrase)
      .send({ from: accounts[0] })
      .then($getPhrase);
  });
});
