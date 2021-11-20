import React from 'react';
import './Footer.css';

interface IProps {
  children: JSX.Element;
}

interface IPropsBody {
  children: Array<JSX.Element> | JSX.Element;
}

interface IPropsCopyright {
  children: string;
}

const Footer = ({ children }: IProps) => (
  <footer className="footer">
    {children}
  </footer>
);

Footer.Body = ({ children }: IPropsBody) => (
  <div className="footer__body">
    {Array.isArray(children) ? children.map((item: JSX.Element) => item) : children}
  </div>
);

Footer.Copyright = ({ children }: IPropsCopyright) => (
  <p className="footer__copyright">{children}</p>
);

export default Footer;
