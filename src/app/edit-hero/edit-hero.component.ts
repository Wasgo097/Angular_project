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
  public load: boolean = false;
  public hero?: Hero;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: HeroService) {
    this.form = this.fb.group({
      id: new FormControl(null),
      nick: new FormControl(null),
      img: new FormControl(null),
      prof: new FormControl(null)
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.id = +params.get('id'); });
    this.service.getHero(this.id).subscribe(hero => {
    this.hero = hero; console.log(this.hero);
      this.load = true;
      this.form.controls["id"].setValue(this.hero.id);
      this.form.controls["nick"].setValue(this.hero.nick);
      this.form.controls["img"].setValue(this.hero.img);
      this.form.controls["prof"].setValue(this.hero.prof);
    });
  }
  onSubmit() {
    let newHero = this.form.value as Hero;
    console.log("Edycja");
    if (newHero.id == null) newHero.id = this.hero.id;
    if (newHero.nick == null) newHero.nick = this.hero.nick;
    if (newHero.img == null) newHero.img = this.hero.img;
    if (newHero.prof == null) newHero.prof = this.hero.prof;
    console.log(newHero);
    this.service.updateHero(this.id, newHero).subscribe(result => { console.log(result) });
  }
}