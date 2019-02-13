import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';


@Component({
  selector: 'app-department-detail-component',
  templateUrl: './department-detail-component.component.html',
  styleUrls: ['./department-detail-component.component.css']
})
export class DepartmentDetailComponentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  public departmentId;

  // ngOnInit() {
  //   let id = this.route.snapshot.params['id'];
  //   this.departmentId = id;
  // }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departmentsList', previousId]);
    this.router.navigate([{id: previousId}], {relativeTo: this.route});

  }

  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    // this.router.navigate(['/departmentsList', nextId]);
    this.router.navigate([{id: nextId}], {relativeTo: this.route});

  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});

  }

}
