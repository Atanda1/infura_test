import Web3 from 'web3';

const provider = process.env.REACT_APP_PROVIDER;
const web3Provider = new Web3.providers.HttpProvider(provider);
export const web3 = new Web3(web3Provider);
