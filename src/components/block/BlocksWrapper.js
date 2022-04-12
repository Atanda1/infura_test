import Block from './Block';
import BlockPlaceholder from '../placeholder/BlockPlaceholder';
import PropTypes from 'prop-types';

const BlocksWrapper = ({ blocks, isLoading }) => {
  return (
    <div className="explorer__blocks__wrapper">
      {isLoading !== true
        ? blocks.map((block) => <Block block={block} key={block.mixhash} />)
        : [...Array(12)].map((x, i) => <BlockPlaceholder key={i + 1} />)}
    </div>
  );
};

export default BlocksWrapper;

BlocksWrapper.propTypes = {
  blocks: PropTypes.array,
  isLoading: PropTypes.bool
};
