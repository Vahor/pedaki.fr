// TODO move icons to @pedaki/common/ui/icons
//  don't forget to remove the classnames
export const locales = [
  {
    name: 'English',
    code: 'en',
    icon: (
      <svg
        className="rounded-lg"
        width="32"
        height="32"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="m424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
        />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </svg>
    ),
  },
  {
    name: 'Français',
    code: 'fr',
    icon: (
      <svg
        className="rounded-lg"
        width="32"
        height="32"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#002654" d="M0 0h213.3v480H0z" />
        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
      </svg>
    ),
  },
];
