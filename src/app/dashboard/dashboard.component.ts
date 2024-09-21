import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  email = "palakhazare@gmail.com";
  showScrollButton = false;

  scrollTo(val:string) {
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
}
