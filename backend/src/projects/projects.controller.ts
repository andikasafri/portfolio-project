import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  getProjects() {
    return [
      {
        id: 1,
        name: 'My Portfolio Website',
        description: 'A website to showcase my projects and skills.',
      },
      {
        id: 2,
        name: 'Task Manager App',
        description: 'An app to manage daily tasks and to-do lists.',
      },
    ];
  }
}
