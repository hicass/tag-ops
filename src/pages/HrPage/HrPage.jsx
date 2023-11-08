import ServiceContent from '../../components/ServiceContent/ServiceContent';
import HRImg from '../../assets/images/landing-page/landing-hr.jpg';
import benefitsAdminImg from '../../assets/images/service-page/hr/benefits-admin-min.jpg';
import hrDocumentation from '../../assets/images/service-page/hr/hr-policy-min.jpg';
import hrTransitions from '../../assets/images/service-page/hr/employee-transitions-min.jpg';
import hrReporting from '../../assets/images/service-page/hr/hr-reporting-min.jpg';
import hrRecruiting from '../../assets/images/service-page/hr/recruiting-min.jpg';
import './HrPage.css';

export default function HrPage() {
  const service = {
    name: 'Human Resources',
    introTxt:
      'From benefits administration to recruiting, we offer expert solutions for your HR needs, ensuring seamless processes and the right people in your organization.',
    quote:
      "Some studies predict that every time a business replaces a salaried employee, it costs 6 to 9 months' salary on average.",
    quoteSource: 'People Keep, ',
    sourceLinkText: 'Article',
    sourceLink:
      'https://www.peoplekeep.com/blog/employee-retention-the-real-cost-of-losing-an-employee',
    phrase:
      'Let us help you build back office processes, recruit the right people, and train seamlessly!',
    service1Title: 'Benefits Administration',
    service1Txt:
      "Optimize your employee benefits with our expertise in benefits administration. We specialize in managing, enrolling, and overseeing your benefits programs to ensure they align with your organization's goals and meet regulatory requirements.",
    service2Title: 'HR Policy Documentation',
    service2Txt:
      'Refine your organizational guidelines with our expert HR policy documentation, including the creation and maintenance of a detailed employee handbook. We specialize in crafting comprehensive, compliant policies tailored to your needs.',
    service3Title: 'Employee Transitions',
    service3Txt:
      'Simplify employee transitions with our expertise. From seamless onboarding for new hires to professional and compliant termination processes, we ensure smooth workforce management.',
    service4Title: 'HR Reporting',
    service4Txt:
      'Transform your HR strategy with our reporting expertise. From performance metrics to employee morale insights, we craft comprehensive reports for a holistic view of your workforce.',
    service5Title: 'Recruiting',
    service5Txt:
      'Optimize your talent acquisition strategy with comprehensive recruiting expertise. We partner with multiple recruiting agencies to cast a wider net and ensure access to the best talent pool available. With our combined efforts, you can navigate the competitive landscape of recruitment efficiently and confidently.',
  };

  return (
    <ServiceContent
      serviceName={service.name}
      serviceImg={HRImg}
      serviceIntroTxt={service.introTxt}
      serviceQuote={service.quote}
      quoteSource={service.quoteSource}
      sourceLinkText={service.sourceLinkText}
      sourceLink={service.sourceLink}
      phrase={service.phrase}
      service1Title={service.service1Title}
      service1Img={benefitsAdminImg}
      service1Txt={service.service1Txt}
      service2Title={service.service2Title}
      service2Img={hrDocumentation}
      service2Txt={service.service2Txt}
      service3Title={service.service3Title}
      service3Txt={service.service3Txt}
      service3Img={hrTransitions}
      service4Title={service.service4Title}
      service4Img={hrReporting}
      service4Txt={service.service4Txt}
      service5Title={service.service5Title}
      service5Img={hrRecruiting}
      service5Txt={service.service5Txt}
    />
  );
}
