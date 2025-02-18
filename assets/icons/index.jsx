import React from 'react'
import HomeIcon from './HomeIcon'
import { useTheme } from './../../constants/theme';
import ReloadIcon from './ReloadIcon';
import BackArrow from './BackArrow';
import ThreeDots from './ThreeDots';
import ChatBubble from './ChatBubble';
import AccountProfile from './AccountProfile';
import HeartOutline from './HeartOutline';
import HeartFill from './HeartFill';
import BioIcon from './BioIcon';
import NotificationOutline from './NotificationOutline';
import ProfileFill from './ProfileFill';
import RightArrow from './RightArrow';
import Preference from './Preference';
import Settings from './Settings';
import Recent from './Recent';
import Search from './Search';
import AddProfile from './AddProfile';
import Phone from './Phone';

const icons = {
    home: HomeIcon,
    reload: ReloadIcon,
    back: BackArrow,
    dots: ThreeDots,
    chat: ChatBubble,
    profile: AccountProfile,
    heart: HeartOutline,
    heart_fill: HeartFill,
    bio: BioIcon,
    notification: NotificationOutline,
    profile: ProfileFill,
    right_arrow: RightArrow,
    preference: Preference,
    settings: Settings,
    recent: Recent,
    search: Search,
    requests: AddProfile,
    phone: Phone,
}

const Icon = ({ name, ...props }) => {
    const theme = useTheme();
    const IconComponent = icons[name];
    return (
        <IconComponent
            height={props.size || 24}
            width={props.size || 24}
            strokeWidth={props.strokeWidth || 2}
            color= {props.focused && theme.colors.primary}
            {...props}
        />
    )
}

export default Icon