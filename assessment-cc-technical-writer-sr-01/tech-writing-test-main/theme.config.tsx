import React, { useState, useEffect } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src='/img/logo.png' alt="My Logo" width="50" height="50" />
      <span style={{ marginLeft: '10px' }}>From ghost to publisher</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Created by Franco Dallasta',
  },
}

export default config;
