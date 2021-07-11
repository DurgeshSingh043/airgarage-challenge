import { Footer, Header } from '../../organisms';

import './pageTemplate.scss';

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header className="page-template__header" />
      <div className="page-template__main">{children}</div>
      <Footer className="page-template__footer" />
    </div>
  );
};

export default PageTemplate;
