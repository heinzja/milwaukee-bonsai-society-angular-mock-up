import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  onHome(event: any):void {
    this.router.navigate(['/home'])
  }

  onTheLatest(event: any):void {
    this.router.navigate(['/the-latest'])
  }

}
