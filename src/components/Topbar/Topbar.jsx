import React from 'react';
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="data:image/jpeg;base64,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" alt="user" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}