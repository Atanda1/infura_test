import BlockWrapper from '../block/BlockWrapper';
import ExplorerHeader from './ExplorerHeader';
import LoadButton from '../button/LoadButton';

const ExplorerSection = () => {
  return (
    <div className="explorer">
      <ExplorerHeader />
      <div className="explorer__blocks">
        <BlockWrapper />
      </div>
      <div className="explorer__load">
        <LoadButton />
      </div>
    </div>
  );
};

export default ExplorerSection;
