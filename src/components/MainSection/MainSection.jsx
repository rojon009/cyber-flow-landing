import React from 'react';
import PreviewContent from '../PreviewContent/PreviewContent';
import SideContent from '../SideContent/SideContent';

const MainSection = () => {
  return (
    <main className="row">
      <SideContent />
      <PreviewContent />
    </main>
  );
};

export default MainSection;