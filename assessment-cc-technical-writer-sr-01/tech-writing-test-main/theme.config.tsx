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
  project: {
    link: 'https://github.com/FranDallasta/technical-assessment-with-ghost',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Created by Franco Dallasta',
  },
  head: (
    <>
        <link rel="icon" href="/img/logo.ico" />
    </>
  ),
  darkMode: false
}

export default config;
