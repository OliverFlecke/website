import React, { memo } from 'react';
import styles from './DeveloperTools.module.scss';
import { ReactComponent as CsharpIcon } from '@icons/csharp.svg';
// import { ReactComponent as FsharpIcon } from '@icons/fsharp.svg';
import { ReactComponent as DotnetIcon } from '@icons/dotnet.svg';
import { ReactComponent as DockerIcon } from '@icons/docker.svg';
import { ReactComponent as GitIcon } from '@icons/git.svg';
import { ReactComponent as Css3Icon } from '@icons/css3.svg';
import { ReactComponent as Html5Icon } from '@icons/html5.svg';
import { ReactComponent as SassIcon } from '@icons/sass.svg';
import { ReactComponent as PythonIcon } from '@icons/python.svg';
import { ReactComponent as JavascriptIcon } from '@icons/javascript.svg';
import { ReactComponent as TypescriptIcon } from '@icons/typescript.svg';
import { ReactComponent as NodejsIcon } from '@icons/nodejs.svg';
import { ReactComponent as ReactIcon } from '@icons/react.svg';
import { ReactComponent as JavaIcon } from '@icons/java.svg';
import { ReactComponent as HaskellIcon } from '@icons/haskell.svg';

const DeveloperTools = memo(() => (
  <div className={styles.developerTools}>
    <CsharpIcon className={styles.icon} />
    {/* <FsharpIcon className={styles.icon} /> */}
    <DotnetIcon className={styles.icon} />
    <DockerIcon className={styles.icon} />
    <GitIcon className={styles.icon} />
    <Css3Icon className={styles.icon} />
    <Html5Icon className={styles.icon} />
    <SassIcon className={styles.icon} />
    <PythonIcon className={styles.icon} />
    <JavascriptIcon className={styles.icon} />
    <TypescriptIcon className={styles.icon} />
    <NodejsIcon className={styles.icon} />
    <ReactIcon className={styles.icon} />
    <JavaIcon className={styles.icon} />
    <HaskellIcon className={styles.icon} />
  </div>
));

export default DeveloperTools;
