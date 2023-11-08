import ServiceContent from '../../components/ServiceContent/ServiceContent';
import FinImg from '../../assets/images/landing-page/landing-finance.jpg';
import bookkeepingImg from '../../assets/images/service-page/finance/bookkeeping-min.jpg';
import apArManagImg from '../../assets/images/service-page/finance/ap-ar-min.jpg';
import commissionCalcImg from '../../assets/images/service-page/finance/calculator-min.jpg';
import finanHealtImg from '../../assets/images/service-page/finance/reporting-min.jpg';
import payrollImg from '../../assets/images/service-page/finance/payroll-min.jpg';
import './FinancePage.css';

export default function FinancePage() {
  const service = {
    name: 'Finance',
    introTxt:
      'From precise bookkeeping to optimized cash flow, our tailored financial solutions drive savings and streamline operations.',
    quote:
      'Inefficiencies cost many organizations as much as 20 to 30 percent of their revenue each year.',
    quoteSource: 'Stampli, ',
    sourceLinkText: 'Blog',
    sourceLink:
      'https://www.stampli.com/blog/accounts-payable/inefficient-back-office/',
    phrase:
      'Let us find these inefficiencies, provide you with data, and help you make decisions that cut costs!',
    service1Title: 'Bookkeeping',
    service1Txt:
      'Simplify your financial processes with our bookkeeping expertise. We specialize in meticulous financial record-keeping, ensuring accuracy and compliance. With our bookkeeping services, you can focus on your core business while we handle the numbers, providing you with peace of mind and financial insight.',
    service2Title: 'AP/AR Aging & management',
    service2Txt:
      'We specialize in optimizing cash flow, ensuring timely payments, and maintaining strong relationships with vendors and clients. With our tailored solutions, you can enhance efficiency, reduce risks, and maintain financial stability.',
    service3Title: 'Commission calculation',
    service3Txt:
      'We offer tailored solutions to streamline the process of calculating commissions, ensuring precision and fairness. With our assistance, you can navigate the complexities of commission calculations effortlessly, fostering a results-driven and motivated sales environment.',
    service4Title: 'Financial Health Reporting',
    service4Txt:
      'Enhance your financial transparency and strategic decision-making with our expertise in financial reporting. We specialize in creating comprehensive reports that provide a clear snapshot of your financial health. With our assistance, you can gain a deeper understanding of your finances, track key performance indicators, and communicate your financial story effectively to stakeholders.',
    service5Title: 'Payroll',
    service5Txt:
      'Simplify your payroll processes with our specialized expertise. We offer comprehensive payroll solutions tailored to your business needs, ensuring accuracy and compliance with regulations. With our payroll services, you can streamline administrative tasks, reduce errors, and ensure timely and accurate compensation for your workforce.',
  };

  return (
    <ServiceContent
      serviceName={service.name}
      serviceImg={FinImg}
      serviceIntroTxt={service.introTxt}
      serviceQuote={service.quote}
      quoteSource={service.quoteSource}
      sourceLinkText={service.sourceLinkText}
      sourceLink={service.sourceLink}
      phrase={service.phrase}
      service1Title={service.service1Title}
      service1Img={bookkeepingImg}
      service1Txt={service.service1Txt}
      service2Title={service.service2Title}
      service2Img={apArManagImg}
      service2Txt={service.service2Txt}
      service3Title={service.service3Title}
      service3Txt={service.service3Txt}
      service3Img={commissionCalcImg}
      service4Title={service.service4Title}
      service4Img={finanHealtImg}
      service4Txt={service.service4Txt}
      service5Title={service.service5Title}
      service5Img={payrollImg}
      service5Txt={service.service5Txt}
    />
  );
}
