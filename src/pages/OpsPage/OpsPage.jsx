import ServiceContent from '../../components/ServiceContent/ServiceContent';
import OpsImg from '../../assets/images/landing-page/landing-operations.jpg';
import interDepImg from '../../assets/images/service-page/ops/interdepartment-min.jpg';
import softwareStratImg from '../../assets/images/service-page/ops/software-strat-min.jpg';
import inventManagImg from '../../assets/images/service-page/ops/inventory-mana-min.jpg';
import infoChangeManagImg from '../../assets/images/service-page/ops/info-manag-min.jpg';
import projManagImg from '../../assets/images/service-page/ops/general-proj-min.jpg';
import './OpsPage.css';

export default function OpsPage() {
  const service = {
    name: 'Operations',
    introTxt:
      'From interdepartmental harmony to cutting-edge software and inventory management, we help your business thrive in the digital age.',
    quote:
      "With a recent statistic showing that the Fortune 500 companies had an estimated $480 billion 'lost' in inefficiencies from back office processes, taking the small steps to counter this loss is very important.",
    quoteSource: 'The Shared Services & Outsourcing Network Editor, ',
    sourceLinkText: 'Report',
    sourceLink:
      'https://www.ssonetwork.com/business-process-outsourcing/whitepapers/workforce-optimization-in-business-process-outsour',
    phrase:
      'Let us help you standardize, optimize, and document your back office processes!',
    service1Title: 'Establish Interdepartmental Processes/Policies',
    service1Txt:
      'Empower your organization with seamless collaboration. We specialize in establishing interdepartmental processes and policies, ensuring cohesive workflows that drive efficiency and unity across your entire business.',
    service2Title: 'Software Strategization',
    service2Txt:
      "Stay ahead in the digital era with our help. We scout, implement, and train on cutting-edge software that fuels your company's growth. Embrace adaptability and thrive in the ever-evolving tech landscape.",
    service3Title: 'Inventory Management',
    service3Txt:
      'Streamline your operations with our expertise in inventory management. We specialize in optimizing processes, implementing robust systems, and providing tailored solutions to ensure your inventory is efficiently managed.',
    service4Title: 'Information/Change Management',
    service4Txt:
      'Elevate internal communication and collaboration with our expertise in building customized intranet solutions. We specialize in creating user-friendly platforms that enhance team connectivity, streamline information sharing, and foster a collaborative work environment.',
    service5Title: 'General Project Management',
    service5Txt:
      'Optimize your project endeavors with our specialized project management assistance. We bring expertise in planning, execution, and monitoring to ensure your projects are delivered on time and within scope.',
  };

  return (
    <ServiceContent
      serviceName={service.name}
      serviceImg={OpsImg}
      serviceIntroTxt={service.introTxt}
      serviceQuote={service.quote}
      quoteSource={service.quoteSource}
      sourceLinkText={service.sourceLinkText}
      sourceLink={service.sourceLink}
      phrase={service.phrase}
      service1Title={service.service1Title}
      service1Img={interDepImg}
      service1Txt={service.service1Txt}
      service2Title={service.service2Title}
      service2Img={softwareStratImg}
      service2Txt={service.service2Txt}
      service3Title={service.service3Title}
      service3Txt={service.service3Txt}
      service3Img={inventManagImg}
      service4Title={service.service4Title}
      service4Img={infoChangeManagImg}
      service4Txt={service.service4Txt}
      service5Title={service.service5Title}
      service5Img={projManagImg}
      service5Txt={service.service5Txt}
    />
  );
}
