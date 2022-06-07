import { Link } from 'gatsby';
import React, { FC } from 'react';
import { HeaderItemGroup } from '../../bcms/types-ts';

interface Props {
  items: HeaderItemGroup[];
}

const Header: FC<Props> = (props) => {
  return (
    <header className="header">
      <ul>
        {props.items.map((item, itemIdx) => {
          return (
            <li key={itemIdx}>
              <Link to={`/${item.ref.meta.en.slug}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
