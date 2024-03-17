import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  fetchProjects(): Project[] {
    return [
      {
        name: 'Code Labellar',
        links: ['#', 'https://github.com/sourav15102/CodeLabeller'],
        description: 'Platform allowing admins to create and publish surveys and students to review and tag code smells.',
        img: 'https://via.placeholder.com/300'
      },
      {
        name: 'Trivia Game',
        links: ['https://drive.google.com/file/d/1J4nOjxKud8gAsWOPWmI3dBZdb9OdnPwD/view?usp=drive_link', 'https://github.com/sourav15102/Trivia-Game'],
        description: 'Multiplayer cloud-based quiz game.',
        img: 'https://via.placeholder.com/300'
      },
      {
        name: 'Course Alert',
        links: ['https://drive.google.com/file/d/1DUe5HaBMwypBVs-k77bsulwgsdwdt5Vq/view?usp=drive_link', 'https://github.com/sourav15102/Course-Alert'],
        description: 'Cloud-based application for students to subscribe and receive customized update notifications.',
        img: 'https://via.placeholder.com/300'
      }
    ];
  }
}
