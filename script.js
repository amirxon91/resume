const resumeData = {
    summary: "Highly accomplished and results-driven Senior Quality Assurance Automation Engineer with over 8 years of experience in designing, developing, and maintaining robust test automation frameworks. Proven expertise in end-to-end testing, API testing, mobile testing (manual), and Continuous Integration/Continuous Delivery (CI/CD) integration. Adept at Behavior-Driven Development (BDD), Agile methodologies, and utilizing a comprehensive tech stack including Java, Selenium WebDriver, Cucumber, Jenkins, and Jira to deliver high-quality software solutions throughout the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC).",
    experience: [
        {
            id: 'jpmc',
            company: "JPMorgan Chase & Co.",
            title: "Senior Quality Assurance Automation Engineer",
            dates: "Oct 2022 - Present",
            duration: 2.8,
            location: "Columbus, Ohio Metropolitan Area",
            details: [
                "Contributed to and maintained a robust hybrid automation framework leveraging the Page Object Model (POM) design pattern.",
                "Spearheaded the end-to-end implementation and configuration of the automated testing environment using Java, Selenium WebDriver, Jenkins, Maven, Cucumber, GitHub, and JUnit.",
                "Developed comprehensive Java automation test scripts within Step Definition classes to implement Cucumber-based feature files.",
                "Expertly crafted CSS selectors and XPath expressions for precise web element identification, enhancing test reliability.",
                "Designed and implemented Behavior-Driven Development (BDD) test scenarios using the Cucumber framework and Gherkin syntax (GIVEN, WHEN, THEN).",
                "Authored manual test cases for both iOS and Android mobile platforms, ensuring comprehensive test coverage.",
                "Executed thorough RESTful API testing by making HTTP requests via Postman.",
                "Maintained a sophisticated Java-based test automation framework for functional testing, API testing, mobile testing, reporting, logging, BDD, and Continuous Integration/Continuous Delivery (CI/CD).",
                "Performed critical regression testing cycles before each software release to ensure stability.",
                "Automated test execution on a nightly and pre-commit basis using Jenkins, significantly improving release confidence.",
                "Analyzed test execution results using HTML reports and tracked issues and bugs efficiently in Jira for issue tracking and bug reporting.",
                "Actively participated in all Agile ceremonies, including scrum meetings, sprint planning, backlog refinement, retrospectives, and sprint closure.",
                "Created detailed bug stories in the product backlog for developer remediation, streamlining the defect resolution process.",
                "Developed and maintained three widely utilized Confluence pages, providing essential support and resources for QA engineers across the Business Unit."
            ]
        },
        {
            id: 'fidelity',
            company: "Fidelity Investments",
            title: "Quality Assurance Engineer",
            dates: "Mar 2020 - Oct 2022",
            duration: 2.7,
            location: "Durham, North Carolina, United States",
            details: [
                "Contributed to a hybrid automation POM (Page Object Model) framework utilizing the Factory Design Pattern.",
                "Implemented and configured the end-to-end installation for the automated testing environment using technologies like Java, Selenium WebDriver, Jenkins, Maven, Cucumber, GitHub, and JUnit.",
                "Wrote Java automation test scripts in Step Definition classes to implement Cucumber-based feature files.",
                "Proficiently used CSS Selectors and XPath expressions to identify web elements.",
                "Developed BDD model test scenarios using Cucumber framework and Gherkin annotations such as GIVEN, WHEN, THEN.",
                "Authored manual test scenarios for iOS and Android platforms.",
                "Performed HTTP requests using Postman to test RESTful Services.",
                "Maintained a Java-based framework using open-source technology for functional, API, and mobile testing, as well as reporting, logging, BDD, and CI/CD.",
                "Conducted regression tests prior to each release cycle.",
                "Ensured all tests were executed on a nightly and pre-commit basis in Jenkins.",
                "Utilized HTML Reports to view execution reports and Jira for logging issues and bug tracking.",
                "Regularly attended Agile ceremonies such as scrum meetings, sprint planning, backlog refinement, retrospectives, and sprint closure.",
                "Created bug stories in the backlog for developers to address in the following sprints.",
                "Created and maintained 3 widely used confluence pages for QA engineers to use across the Business Unit."
            ]
        },
        {
            id: 'casper',
            company: "Casper",
            title: "Automation Engineer",
            dates: "Jul 2018 - Feb 2020",
            duration: 1.7,
            location: "New York City Metropolitan Area",
            details: [
                "Enhanced and optimized Selenium UI Automation Scripts to accommodate new features in the application.",
                "Analyzed and reviewed Business Requirements, System Specifications Documents and developed effective and detailed Test plans, Test Scenarios, and Test Cases.",
                "Gained strong expertise in building automation scripts for Rest API services and new features in the application working in Agile Methodology.",
                "Involved in process of Test Plan Preparation, Test Data preparation, Test Case Preparation, Test Data Setup, Test Execution, and Defect Reporting.",
                "Performed UAT Support, Ad-hoc testing, System testing, Regression testing.",
                "Active participation in reviews and status meetings.",
                "Preparing the status reports daily and weekly.",
                "Involved in functional specification documents to develop test cases and test scenarios.",
                "Performed Back End testing of the application using SQL queries to confirm the correctness of data."
            ]
        },
        {
            id: 'td',
            company: "TD",
            title: "Quality Assurance Analyst",
            dates: "Dec 2016 - May 2018",
            duration: 1.5,
            location: "Cherry Hill, NJ",
            details: [
                "Member of Agile Quality Assurance team focused on Banking.",
                "Involved in entire Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC).",
                "Communicate project status, issues, and project plan to management and the project team.",
                "Analyzing user stories, estimating them in hours, and developing manual test cases.",
                "Conduct Smoke, Functional, Regression, and System testing of the application regularly.",
                "Accelerated testing efforts by working with minimum documentation and effective communication.",
                "Write test cases using Cucumber framework Gherkin language.",
                "Retrieve and test data from the database using SQL statements like joins, sub-queries, clauses, and etc. for back-end testing and compare it with the front-end data.",
                "Interact with Release Management team to resolve environment-related issues.",
                "Extensive knowledge of the testing process, methodology analysis, and defect reporting tools like Jira."
            ]
        }
    ],
    skills: {
        labels: ['Automation & Frameworks', 'Testing Tools', 'CI/CD & Version Control', 'Methodologies', 'Web & API Tech', 'Databases & PM'],
        datasets: [{
            label: 'Proficiency',
            data: [9, 9, 8, 9, 8, 8],
            backgroundColor: 'rgba(2, 132, 199, 0.2)', // sky-600 with opacity
            borderColor: 'rgb(2, 132, 199)',
            pointBackgroundColor: 'rgb(2, 132, 199)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(2, 132, 199)'
        }]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    function switchTab(targetId) {
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `nav-${targetId}`) {
                btn.classList.add('active');
            }
        });
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.id.replace('nav-', '');
            switchTab(targetId);
        });
    });

    function populateData() {
        document.getElementById('summary-text').textContent = resumeData.summary;

        const timelineContainer = document.getElementById('timeline-container');
        const accordionContainer = document.getElementById('accordion-container');
        
        resumeData.experience.forEach((job, index) => {
            const isLeft = index % 2 === 0;
            const timelineItem = `
                <div class="mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-sky-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">${resumeData.experience.length - index}</h1>
                    </div>
                    <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 timeline-item cursor-pointer" data-id="${job.id}">
                        <h3 class="font-bold text-slate-800 text-xl">${job.company}</h3>
                        <p class="text-md leading-snug tracking-wide text-slate-600">${job.title}</p>
                        <p class="text-sm text-slate-500 mt-1">${job.dates}</p>
                    </div>
                </div>`;
            timelineContainer.innerHTML += timelineItem;

            const accordionItem = `
                <div class="rounded-lg border border-slate-200" id="accordion-${job.id}">
                    <button class="accordion-header w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 transition">
                        <span>${job.title} at ${job.company}</span>
                        <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="p-4 border-t border-slate-200">
                            <ul class="list-disc list-inside space-y-2 text-slate-700">
                                ${job.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            accordionContainer.innerHTML += accordionItem;
        });
    }

    function setupInteractions() {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.dataset.id;
                switchTab('details');
                const accordionItem = document.getElementById(`accordion-${targetId}`);
                accordionItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const header = accordionItem.querySelector('.accordion-header');
                const content = accordionItem.querySelector('.accordion-content');
                if (content.style.maxHeight) {
                    // Already open, do nothing
                } else {
                    header.click();
                }
            });
        });

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('svg');

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    function createCharts() {
        const expCtx = document.getElementById('experienceChart').getContext('2d');
        new Chart(expCtx, {
            type: 'bar',
            data: {
                labels: resumeData.experience.map(job => job.company).reverse(),
                datasets: [{
                    label: 'Years of Experience',
                    data: resumeData.experience.map(job => job.duration).reverse(),
                    backgroundColor: [
                        'rgba(56, 189, 248, 0.6)',
                        'rgba(14, 165, 233, 0.6)',
                        'rgba(2, 132, 199, 0.6)',
                        'rgba(3, 105, 161, 0.6)'
                    ],
                    borderColor: [
                        'rgb(56, 189, 248)',
                        'rgb(14, 165, 233)',
                        'rgb(2, 132, 199)',
                        'rgb(3, 105, 161)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += context.parsed.x + ' years';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Duration (Years)'
                        }
                    }
                }
            }
        });

        const skillsCtx = document.getElementById('skillsChart').getContext('2d');
        new Chart(skillsCtx, {
            type: 'radar',
            data: resumeData.skills,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 14
                            },
                            color: 'rgb(30, 41, 59)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    switchTab('overview');
    populateData();
    createCharts();
    setupInteractions();
});
