import React, { useState, cloneElement, useRef, useEffect } from 'react';
import Link from '../Link/Link';
import cs from 'classnames';
import cx from 'classnames';
import './Dropdown.module.scss';
import Flex from '../Flex/Flex';

const Dropdown = ({ data, className, opener }) => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      };

      useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    return (
        <div ref={node} className={cx("dropdown", { ["active"]: open }, className)}>
            {cloneElement(opener, {
                className: cs(
                    opener.props.className,
                    "opener"
                ),
                onClick: () => setOpen(!open),
            })}
            {open ? (
                <Flex className={"boxContainer"}>
                    <ul className={"sous-menu-item"}>
                        {data.map((item) => (
                            <li key={item.id} className="sous-menu-item-list">
                                <Link href={item.href} label={item.label} />
                            </li>
                            ))
                        }
                    </ul>
                </Flex>
            ) : ""}
        </div>
    );
}

export default Dropdown;
