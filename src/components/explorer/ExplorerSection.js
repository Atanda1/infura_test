import BlocksWrapper from '../block/BlocksWrapper';
import ExplorerHeader from './ExplorerHeader';
import LoadButton from '../button/LoadButton';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    0: '#4b4082',
    '1.0': '#fff'
  },
  shadowBlur: 5
});

const ExplorerSection = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [web3, setweb3] = useState(null);
  const [loadingMore, setLoadingMore] = useState('LOAD MORE');

  useEffect(() => {
    setIsLoading(true);
    const provider = process.env.REACT_APP_PROVIDER;
    const web3Provider = new Web3.providers.HttpProvider(provider);
    const web3 = new Web3(web3Provider);
    setweb3(web3);
    web3.eth.getBlockNumber(async (error, result) => {
      if (!error) {
        console.log(result);
        const allBlocks = [];
        for (var i = 0; i < 20; i++) {
          var block = await web3.eth.getBlock(result - i);
          allBlocks.push(block);
        }
        console.log(allBlocks);
        await setBlocks(allBlocks);
        await setIsLoading(false);
      }
      if (error) {
        console.log(error);
      }
    });
  }, []);

  const loadMoreBlocks = async () => {
    setLoadingMore('LOADING MORE...');
    console.log('data');
    console.log(web3);
    console.log(blocks.slice(-1)[0].number);
    const allBlocks = [];
    for (var i = 0; i < 20; i++) {
      var block = await web3.eth.getBlock(blocks.slice(-1)[0].number - i);
      allBlocks.push(block);
    }
    await setBlocks([...blocks, ...allBlocks]);
    setLoadingMore('LOAD MORE');
  };

  return (
    <div className="explorer">
      <div>{isLoading && <TopBarProgress />}</div>
      <ExplorerHeader blockData={blocks} isLoading={isLoading} />
      <div className="explorer__blocks">
        <BlocksWrapper blocks={blocks} isLoading={isLoading} />
      </div>
      <div className="explorer__load">
        <LoadButton LoadMore={loadMoreBlocks} loadingText={loadingMore} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ExplorerSection;
