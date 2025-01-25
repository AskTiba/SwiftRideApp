import Cog from '~/assets/svgs/cog';
import RightChevron from '~/assets/svgs/right_chevron';
import SheildCheck from '~/assets/svgs/sheild_check';
import HeartHandshake from '~/assets/svgs/heart_handshake';
import MessageDot from '~/assets/svgs/message_square_dot';
import HandHelping from '~/assets/svgs/hand_helping';
import Scale from '~/assets/svgs/scale';
import BadgeInfo from '~/assets/svgs/badge_info';
import UserRound from '~/assets/svgs/user_round';
import Briefcase from '~/assets/svgs/briefcase';
import Bike from '~/assets/svgs/bike';
import UserCheck from '~/assets/svgs/user_check';

export const Items = [
  {
    text: 'Settings',
    leftIcon: <Cog color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  {
    text: 'Login and security',
    leftIcon: <SheildCheck color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  {
    text: 'Visit help centre',
    leftIcon: <HeartHandshake color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  {
    text: 'Give us feedback',
    leftIcon: <MessageDot color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  {
    text: 'Safety & support',
    leftIcon: <HandHelping color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  { text: 'Legal', leftIcon: <Scale color={'#fff'} />, rightIcon: <RightChevron color={'#fff'} /> },
  {
    text: 'About',
    leftIcon: <BadgeInfo color={'#fff'} />,
    rightIcon: <RightChevron color={'#fff'} />,
  },
  { text: 'Logout', rightIcon: undefined, center: true },
];

export const features = [
  {
    icon: <Briefcase color="#FFF" />,
    title: 'Take a ride',
    description: 'Your workplace will pay for it',
  },
  {
    icon: <Bike color="#FFF" />,
    title: 'Order a ride for you',
    description: 'Your workplace will pay for it',
  },
  {
    icon: <UserCheck color="#FFF" />,
    title: 'Order a ride for friends',
    description: 'A ride for you to anywhere anytime',
  },
];
