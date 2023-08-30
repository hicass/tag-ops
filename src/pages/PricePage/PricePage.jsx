import './PricePage.css';


export default function PricePage() {
    return (
        <section id='price-page'>
            <div id='price-headline'>
                <h1 id='price-h1'>Transparent Pricing for Tailored Solutions</h1>
                <h2 id='price-h2'>Discover our clear and competitive pricing structure that aligns with the tailored solutions we provide.<br /> 
                    At Tag Ops, we believe in transparency, ensuring you know exactly what you're getting and what 
                    you're paying for.<br /> 
                    Explore our pricing options below and find the perfect fit for your business.
                </h2>
            </div>

            <table className='price-table'>
                <tr>
                    <th></th>
                    <th className='plan-title'><span class='material-symbols-outlined th-icon'>local_fire_department</span>Ignite</th>
                    <th className='plan-title'><span class='material-symbols-outlined th-icon'>monitoring</span>Growth</th>
                    <th className='side-td'><span class='material-symbols-outlined th-icon'>handshake</span>Support</th>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'>Revenue/month vs # of employees</td>
                    <td className='top-td'>0-19 employees</td>
                    <td className='top-td'>20-99 employees</td>
                    <td className='side-td'>100+ employees</td>
                </tr>

                <tr>
                    <td className='side-td'>Small business $0-$200,000</td>
                    <td className='top-td'>
                        <span>Starting at $1,100/month</span>
                        <p>
                            Finance support = 15 hours/month
                            HR support = 5 hours/month
                            Ops support = 5 hours/month
                        </p>
                    </td>
                    <td className='top-td'></td>
                    <td className='side-td'>Contact Us!</td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'>Medium business $200,000-$500,000</td>
                    <td>
                        <span>Starting at $2,000/month</span>
                        <p>
                            Finance support = 25 hours/month
                            HR support = 10 hours/month
                            Ops support = 5 hours/month
                        </p>
                    </td>
                    <td>
                        <span>Starting at $5,000/month</span>
                        <p>
                            Finance support = 45 hours/month
                            HR support = 35 hours/month
                            Ops support = 20 hours/month
                        </p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'>Large business $500,000+</td>
                    <td>Contact Us!</td>
                    <td>Contact Us!</td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td colspan='2' className='caption'>
                        <h3>Core solutions</h3>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'><h5>Human Resources</h5></td>
                    {/* Ignite */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Dedicated HR Manager</p>
                        <p><span class='material-symbols-outlined'>check</span>Payroll</p>
                        <p><span class='material-symbols-outlined'>check</span>Employee handbook management</p>
                        <p><span class='material-symbols-outlined'>check</span>Employee onboarding & terminations</p>
                        <p><span class='material-symbols-outlined'>check</span>State Compliance</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined'>verified</span>Performance tracking & reviews</p>
                        <p><span class='material-symbols-outlined'>verified</span>Employee satisfaction reviews</p>
                        <p><span class='material-symbols-outlined'>verified</span>Benefits administration</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'><h5>Operations</h5></td>
                    {/* Ignite */}
                    <td>
                        <p>
                            <span class='material-symbols-outlined'>check</span>
                            Weekly sync with Finance and HR to align on back office status 
                            and goals to update Monday.com and leadership
                        </p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined'>verified</span>Software administration</p>
                        <p><span class='material-symbols-outlined'>verified</span>Company wide process/policy documentation</p>
                        <p><span class='material-symbols-outlined'>verified</span>Company intranet build and maintenance</p>
                        <p><span class='material-symbols-outlined'>verified</span>Hardware inventory tracking</p>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'><h5>Finance</h5></td>
                    {/* Ignite */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Monthly Reconciliations</p>
                        <p><span class='material-symbols-outlined'>check</span>Weekly Transaction categorization & basic reporting</p>
                        <p><span class='material-symbols-outlined'>check</span>AP/AR Management</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Includes everything from Ignite!</p>
                        <p><span class='material-symbols-outlined'>verified</span>Financial health dashboard</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td colspan='2' className='caption'>
                        <h3>Additional Services</h3>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'><h5>Human Resources</h5></td>
                    {/* Ignite */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Employee satisfaction reviews</p>
                        <p><span class='material-symbols-outlined'>check</span>Benefits administration</p>
                        <p><span class='material-symbols-outlined'>check</span>Performance tracking & reviews</p>
                        <p><span class='material-symbols-outlined'>check</span>Recruiting (Sourcing, pipeline management, interviews)</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>verified</span>Recruiting (Sourcing, pipeline management, interviews)</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'><h5>Operations</h5></td>
                    {/* Ignite */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Software Migration/ Integration/ Implementation/ Administration</p>
                        <p><span class='material-symbols-outlined'>check</span>Company wide Process/policy documentation</p>
                        <p><span class='material-symbols-outlined'>check</span>Project Management</p>
                        <p><span class='material-symbols-outlined'>check</span>Company intranet build and maintenance</p>
                        <p><span class='material-symbols-outlined'>check</span>Hardware inventory tracking</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>verified</span>Software Migration/ Integration/ Implementation</p>
                        <p><span class='material-symbols-outlined'>verified</span>Project Management</p>
                    </td>
                </tr>

                <tr className='tr-odd'>
                    <td className='side-td'><h5>Finance</h5></td>
                    {/* Ignite */}
                    <td>
                        <p><span class='material-symbols-outlined'>check</span>Commission calculation</p>
                        <p><span class='material-symbols-outlined'>check</span>Financial health dashboard (Cash burn, Customer churn, runway)</p>
                        <p><span class='material-symbols-outlined'>check</span>Subscription Metrics and analysis (ARR, GDR, CAC)</p>
                        <p><span class='material-symbols-outlined'>check</span>Financial audit</p>
                    </td>
                    {/* Growth */}
                    <td>
                        <p><span class='material-symbols-outlined'>verified</span>Commission calculation</p>
                        <p><span class='material-symbols-outlined'>verified</span>Financial audit</p>
                    </td>
                </tr>

                <tr>
                    <td className='side-td'></td>
                    <td>Lets Talk!</td>
                    <td>Lets Talk!</td>
                </tr>
            </table>
        </section>
    )
}