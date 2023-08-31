import { Link } from 'react-router-dom';
import './PricePage.css';


export default function PricePage() {
    return (
        <section id='price-page'>
            <div id='price-headline'>
                <h1 id='price-h1'>Pricing Solutions Tailored to Your Needs</h1>
                <p id='price-intro-txt'>
                    At Tag Ops, we believe in transparency, ensuring you know exactly what you're getting and what you're paying for.
                    Explore our pricing options below and find the perfect fit for your business.
                </p>
            </div>

            <table className='price-table'>
                <tr>
                    <th id='top-row-l'></th>
                    <th className='plan-title'><span class='material-symbols-outlined th-icon'>local_fire_department</span>Ignite</th>
                    <th className='plan-title'><span class='material-symbols-outlined th-icon'>monitoring</span>Growth</th>
                    <th id='top-row-r' className='side-td'><span class='material-symbols-outlined th-icon support-icon'>handshake</span>Support</th>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td border-r'>Revenue/month vs # of employees</td>
                    <td className='top-td border-r'>0-19 employees</td>
                    <td className='top-td border-r'>20-99 employees</td>
                    <td className='side-td'>100+ employees</td>
                </tr>

                <tr className='tr-even'>
                    <td className='side-td border-r'>Small business $0-$200,000</td>
                    <td className='top-td border-r'>
                        <p className='price-txt'>Starting at <span className='price-num'>$1,100/month</span></p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>5hrs/month of HR Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>5hrs/month of Ops Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>15hrs/month of Finance Support</p>
                    </td>
                    <td className='top-td border-r'></td>
                    <td className='side-td'></td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td border-r'>Medium business $200,000-$500,000</td>
                    <td className='border-r'>
                        <p className='price-txt'>Starting at <span className='price-num'>$2,000/month</span></p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>10hrs/month of HR Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>5hrs/month of Ops Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>25hrs/month of Finance Support</p>
                    </td>
                    <td className='border-r'>
                        <p className='price-txt'>Starting at <span className='price-num'>$5,000/month</span></p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>35hrs/month of HR Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>20hrs/month of Ops Support</p>
                        <p><span class='material-symbols-outlined table-icon'>schedule</span>45hrs/ months of Finance Support</p>
                    </td>
                    <td className='side-td'></td>
                </tr>

                <tr className='tr-even'>
                    <td id='bot-row-l' className='side-td border-r'>Large business $500,000+</td>
                    <td className='border-r center'>
                        <Link id='contact-link' className='nav-link' to='/contact'>Contact Us!</Link>
                    </td>
                    <td className='border-r center'>
                        <Link id='contact-link' className='nav-link' to='/contact'>Contact Us!</Link>
                    </td>
                    <td id='bot-row-r' className='side-td'></td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td colspan='2' className='caption'>
                        <h3>Core Services</h3>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td label-td'><h5 className='solution-label'>Human Resources</h5></td>
                    {/* Ignite */}
                    <td className='border-r'>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Dedicated HR Manager</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Payroll</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Employee handbook management</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Employee onboarding & terminations</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>State Compliance</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Performance tracking & reviews</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Employee satisfaction reviews</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Benefits administration</p>
                    </td>
                </tr>

                <tr className='tr-even'>
                    <td className='side-td label-td'><h5 className='solution-label'>Operations</h5></td>
                    {/* Ignite */}
                    <td className='border-r'>
                        <p>
                            <span class='material-symbols-outlined table-icon'>check</span>
                            Weekly sync with Finance and HR to align on back office status 
                            and goals to update Monday.com and leadership
                        </p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Software administration</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Company wide process/policy documentation</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Company intranet build and maintenance</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Hardware inventory tracking</p>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td label-td'><h5 className='solution-label'>Finance</h5></td>
                    {/* Ignite */}
                    <td className='border-r'>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Monthly Reconciliations</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Weekly Transaction categorization & basic reporting</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>AP/AR Management</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Financial health dashboard</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td colspan='2' className='caption'>
                        <h3>Additional Services</h3>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td label-td'><h5 className='solution-label'>Human Resources</h5></td>
                    {/* Ignite */}
                    <td className='border-r'>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Employee satisfaction reviews</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Benefits administration</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Performance tracking & reviews</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Recruiting (Sourcing, pipeline management, interviews)</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Recruiting (Sourcing, pipeline management, interviews)</p>
                    </td>
                </tr>

                <tr className='tr-even'>
                    <td className='side-td label-td'><h5 className='solution-label'>Operations</h5></td>
                    {/* Ignite */}
                    <td className='border-r'>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Software Migration/ Integration/ Implementation/ Administration</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Company wide Process/policy documentation</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Project Management</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Company intranet build and maintenance</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Hardware inventory tracking</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Software Migration/ Integration/ Implementation</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Project Management</p>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td label-td'><h5 className='solution-label'>Finance</h5></td>
                    {/* Ignite */}
                    <td id='bot-row-l' className='border-r'>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Commission calculation</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Financial health dashboard (Cash burn, Customer churn, runway)</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Subscription Metrics and analysis (ARR, GDR, CAC)</p>
                        <p><span class='material-symbols-outlined table-icon'>check</span>Financial audit</p>
                    </td>
                    {/* Growth */}
                    <td id='bot-row-r'>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Commission calculation</p>
                        <p><span class='material-symbols-outlined table-icon'>verified</span>Financial audit</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td id='link-row' className='center'>
                        <Link className='lets-talk-link' to='/contact'>Let's Talk!</Link>
                    </td>
                    <td id='link-row' className='center'>
                        <Link className='lets-talk-link' to='/contact'>Let's Talk!</Link>
                    </td>
                </tr>
            </table>
        </section>
    )
}