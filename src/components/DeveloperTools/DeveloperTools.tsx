import React, { memo } from 'react';
import ReactSVG from 'react-svg';
import styles from './DeveloperTools.scss';
import { icon } from '../../styles/icons.scss';

const tools = [
  'csharp',
  'fsharp',
  'dotnet',
  'docker',
  'git',
  'css3',
  'html5',
  'sass',
  'python',
  'javascript',
  'typescript',
  'nodejs',
  'react',
  'java',
  'haskell',
];

const DeveloperTools = memo(() => (
  <div className={styles.developerTools}>
    {tools.map(iconname => (
      <ReactSVG
        key={iconname}
        src={`../../icons/${iconname}.svg`}
        svgClassName={`${icon} ${styles.icon}`}
      />
    ))}
  </div>
));

export default DeveloperTools;
