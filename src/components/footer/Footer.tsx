import React from 'react';
import './Footer.css';

interface IProps {
  children: React.ReactNode;
}

interface IPropsBody {
  children: React.ReactNode;
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
    {children}
  </div>
);

Footer.Copyright = ({ children }: IPropsCopyright) => (
  <p className="footer__copyright">{children}</p>
);

export default Footer;
