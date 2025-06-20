import SportIcons from '../../../assets/sportsIcon.png'
import { FeaturesHeader } from './FeaturesHeader';
import { FeatureItem } from './FeatureItem';


export function FeaturesSection() {
  const leftColumnFeatures = [
    {
      title: 'Active Learning',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e2bfb0601faea169fa11a4d40a570477fd0d1d4?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64',
      iconBgColor: '#e11d48',
      titleColor: 'text-primary-emphasis',
    },
    {
      title: 'Multimedia Class',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae83cde1ed6cf0cf495875fdb1ac9e0ea67a531e?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64',
      iconBgColor: '#f59e0b',
      titleColor: 'text-info',
    },
    {
      title: 'Full Day Programs',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2b911a174bee41db2a88893e26157ad691c2b92e?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64',
      iconBgColor: '#1e3a8a',
      titleColor: 'text-danger',
    },
  ];

  const rightColumnFeatures = [
    {
      title: 'Expert Teachers',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/64400e53bb9066c1e2dd1574580734be7f7b4e28?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64',
      iconBgColor: '#e11d48',
      titleColor: 'text-primary-emphasis',
    },
    {
      title: 'Activities',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: SportIcons,
      iconBgColor: '#f59e0b',
      titleColor: 'text-info',
    },
    {
      title: 'Infrastructure',
      description: 'Brammass is a creative skill and a joy beyond anything found dolor.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7aa739c6782c56aa7325ae9fe62496a3f9cbbc97?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64',
      iconBgColor: '#1e3a8a',
      titleColor: 'text-danger',
    },
  ];

  return (
    <section>
      <div className="position-relative d-flex flex-column align-items-center pt-5 pb-2 w-100 min-vh-100">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab2a115c0748ca57a94ca5ae1e3a73fe3206fbbf?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64"
          className="position-absolute w-100 h-100 object-fit-cover top-0 start-0"
          alt=""
        />

        <FeaturesHeader />

        <div className="position-relative z-1 mt-5 container">
          <div className="row gy-4">

            {/* Left Column */}
            <div className="col-md-4">
              {leftColumnFeatures.map((feature, index) => (
                <div className={`${index > 0 ? 'mt-4' : ''}`} key={index}>
                  <FeatureItem {...feature} alignment="right" iconPosition="right" />
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b1bbcac59fd5da2c1699744c29652b5c661fcb?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64"
                alt="Features illustration"
                className="img-fluid"
                style={{ aspectRatio: '0.93' }}
              />
            </div>

            {/* Right Column */}
            <div className="col-md-4">
              {rightColumnFeatures.map((feature, index) => (
                <div className={`${index > 0 ? 'mt-4' : ''}`} key={index}>
                  <FeatureItem {...feature} alignment="left" iconPosition="left" />
                </div>
              ))}
            </div>

          </div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba48b900aaeaf0506a33fcaf297b4400147b2a5?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64"
          className="img-fluid w-100 shadow-sm"
          alt="logo"
          style={{
            marginTop:"-5px",
            marginBottom: "-10px"
          }}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
