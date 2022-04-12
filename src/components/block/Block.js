import BlockFooter from './BlockFooter';
import BlockCount from './BlockCount';
import BlockHeader from './BlockHeader';
import PropTypes from 'prop-types';

const Block = ({ block }) => {
  return (
    <>
      <div className="explorer__blocks__wrapper__item">
        <BlockHeader block={block} />
        <BlockCount block={block} />
        <BlockFooter block={block} />
      </div>
    </>
  );
};

export default Block;

Block.propTypes = {
  block: PropTypes.object
};
