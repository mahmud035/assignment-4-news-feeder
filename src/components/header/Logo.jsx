import logoImage from '../../assets/logo.png';

const Logo = () => {
  return (
    <a href="/" className="transition duration-1000 ease-in-out lg:-mr-56">
      <img
        className="max-w-[100px] md:max-w-[165px] transition duration-1000 ease-in-out"
        src={logoImage}
        alt="Lws"
      />
    </a>
  );
};

export default Logo;
