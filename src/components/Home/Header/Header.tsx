import './Header.scss';

interface Social {
  name: string;
  link: string;
}

const Header: React.FC = () => {
  const socials: Social[] = [
    {
      name: 'Telegram',
      link: 'https://t.me/ivansedov',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/ivansedov'
    },
    {
      name: 'Resume',
      link: 'https://hh.ru/resume/f662dba7ff05024f940039ed1f387445706644'
    }
  ];

  return (
    <header className="home-head">
      <div className="home-head__logo">ИС</div>
      <div className="home-head__col">
        <div className="home-head__name">Иван Седов</div>
        <div className="home-head__socials">
          {socials.map((social, index) => (
            <a className="home-head__social" href={social.link} key={index} target="_blank">{social.name}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;