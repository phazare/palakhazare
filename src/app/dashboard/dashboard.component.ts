import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  email = 'palakhazare@gmail.com';
  showScrollButton = false;
  expandedIndex = 0;
  experienceList = [
    {
      title: 'Senior Consultant, CGI, Canada',
      date: 'Mar 2025 - Present',
      points: [
        'Developing the application so that investment manager can review and manage the accounts.',
        'Using Ag grid and Highcharts to convert TIBCO Spotfire visualizations by populating 200k+ records in highcharts.',
        'Engaging with product owner and agile process.',
        'Using Angular 18 and Playwright for testing.',
      ],
    },
    {
      title: 'Frontend Developer, Quaeris.ai, Canada',
      date: 'Jun 2024 - Feb 2025',
      points: [
        'Developed Spend Tracker with Highcharts in Angular.',
        'Redesigned notebook creation flow.',
        'Collaborated with UX and backend teams.',
        'Resolved bugs for better UX.',
      ],
    },
    {
      title: 'Senior Software Engineer, Luxoft Company, India',
      date: 'Oct 2022 - Nov-2023',
      points: [
        'Built investment platform for CIMB bank.',
        'Added top-up, redemption, fund switching features.',
        'Worked with Angular 15, Figma.',
        'Improved app features and bug fixes.',
      ],
    },
    {
      title: 'Senior Consultant, Capgemini Services, India & Malaysia',
      date: 'Sept 2018 - Oct 2022',
      points: [
        'Developed frontend for major CIMB banking products.',
        'Used Angular, Redux, Jasmine, Karma.',
        'Led teams and delivered client projects.',
        'Worked for clients like AIG, Morgan Stanley, UBP.',
      ],
    },
    {
      title: 'Software Engineer, Intelliswift Software, India',
      date: 'May 2017 - Sept 2018',
      points: [
        'Built UI for Kotak Bank credit card services.',
        'Developed mobile app features.',
        'Used Angular 2, HTML, CSS, JS, Bootstrap.',
      ],
    },
    {
      title: 'Software Developer, Bitstreet Technologies, India',
      date: 'Oct 2015 - May 2017',
      points: [
        'Migrated project from Hans Infotech.',
        'Developed hybrid iOS app with Cordova.',
        'Built Keywo.com web app using HTML/CSS/JS.',
      ],
    },
    {
      title: 'Junior Software Developer, Hans Infotech, India',
      date: 'Feb 2015 - Oct 2015',
      points: [
        'Worked on SearchTrade crypto platform.',
        'Built Android hybrid app from scratch.',
        'Used Cordova, HTML, CSS, JS, jQuery.',
      ],
    },
  ];
  scrollTo(val: string) {
    const scrollSection = document.getElementById(val);
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // path relative to "src/assets/"
    link.download = 'Palak_Hazare_Resume.pdf';
    link.click();
  }
}
