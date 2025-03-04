import PropTypes from 'prop-types';
import React from 'react';
import Style from './IconLink.module.scss';

export default function IconLink({ link, icon, label }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label} className={Style.iconLink}>
            <i className={icon} aria-hidden="true"></i>
        </a>
    );
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
