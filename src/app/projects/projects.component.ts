// projects.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  projects: Project[] = []; // Replace with your actual projects data
  currentIndex: number = 0;
  visibleProjectsCount: number = 4;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.fetchProjects();
  }

  scrollLeft(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.scrollCarousel();
  }

  scrollRight(): void {
    this.currentIndex = Math.min(this.currentIndex + 1, this.projects.length - this.visibleProjectsCount);
    this.scrollCarousel();
  }

  scrollCarousel(): void {
    const step = this.currentIndex * (this.carousel.nativeElement.firstChild.clientWidth + 20);
    this.carousel.nativeElement.style.transform = `translateX(-${step}px)`;
  }
}

