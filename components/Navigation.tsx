import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/" passHref>
        <span className="text-gray-900 dark:text-white pr-6 py-4">Home</span>
      </Link>
      <Link href="/portfolio" passHref>
        <span className="text-gray-900 dark:text-white pr-6 py-4">
          Portfolio
        </span>
      </Link>
      <Link href="/about" passHref>
        <span className="text-gray-900 dark:text-white pr-6 py-4">About</span>
      </Link>
    </nav>
  );
};

export default Navigation;
