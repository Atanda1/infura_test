import BlocksWrapper from '../block/BlocksWrapper';
import ExplorerHeader from './ExplorerHeader';
import LoadButton from '../button/LoadButton';
import { useEffect, useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { web3 } from '../../web3/index';
import { config } from '../../loader/topbarConfig';
import axios from 'axios';

TopBarProgress.config(config);

const ExplorerSection = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState('LOAD MORE');

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_PROVIDER, {
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 1
      })
      .then((res) => {
        getLatestestBlock(parseInt(res.data.result, 16));
      })
      .catch((err) => console.log(err));
  }, []);

  const getLatestestBlock = async (result) => {
    const allBlocks = [];
    for (var i = 0; i < 20; i++) {
      var block = await web3.eth.getBlock(result - i);
      allBlocks.push(block);
    }
    await setBlocks(allBlocks);
    await setIsLoading(false);
  };

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
