import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/serv.service';
import { Hero } from '../hero';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  public form: FormGroup
  public id: number;
  public hero?: Hero;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: HeroService) {
    this.form = this.fb.group({
      // id: new FormControl(this.hero.id),
      // nick: new FormControl(this.hero.nick),
      // img: new FormControl(this.hero.img),
      // prof: new FormControl(this.hero.prof)
        id: new FormControl(null),
        nick: new FormControl(null),
        img:new FormControl(null),
        prof:new FormControl(null)
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.id = +params.get('id'); });
    this.service.getHero(this.id).subscribe(hero => {this.hero = hero;console.log(this.hero)});
  }
  onSubmit() {
    let newHero = this.form.value as Hero;
    this.service.updateHero(this.id, newHero).subscribe(result=>{console.log(result);console.log("Edytowano " + newHero);});
  }
}