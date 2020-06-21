import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/serv.service';
@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {
  private id:number;
  public success=false;
  constructor(private route: ActivatedRoute,private service:HeroService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = +params.get('id');});
    this.service.deleteHero(this.id).subscribe(result=>this.success=result);
  }
}
