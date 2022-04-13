import BlocksWrapper from '../block/BlocksWrapper';
import ExplorerHeader from './ExplorerHeader';
import LoadButton from '../button/LoadButton';
import { useEffect, useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { web3 } from '../../web3/index';

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
  const [loadingMore, setLoadingMore] = useState('LOAD MORE');

  useEffect(() => {
    setIsLoading(true);
    web3.eth.getBlockNumber(async (error, result) => {
      if (!error) {
        const allBlocks = [];
        for (var i = 0; i < 20; i++) {
          var block = await web3.eth.getBlock(result - i);
          allBlocks.push(block);
        }
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
