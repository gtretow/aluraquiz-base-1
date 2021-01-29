/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import NextLink from "next/link";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>{children}</a>
    </NextLink>
  );
}