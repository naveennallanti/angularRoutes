import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-department-list-component',
  templateUrl: './department-list-component.component.html',
  styleUrls: ['./department-list-component.component.css']
})
export class DepartmentListComponentComponent implements OnInit {
  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  departments = [
    {'id': 1, 'name': 'angular'},
    {'id': 2, 'name': 'node'},
    {'id': 3, 'name': 'express'},
    {'id': 4, 'name': 'mongodb'}
  ];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.selectedId = id;
    });
  }

  onSelect(department) {
    //absolute path
    // this.router.navigate(['/departments', department.id]);
    //relative path
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }


}
