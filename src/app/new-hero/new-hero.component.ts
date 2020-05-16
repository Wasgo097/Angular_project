import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../service/serv.service';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  public form: FormGroup
  constructor(private fb: FormBuilder, private service: HeroService) {
    this.form = fb.group({
      id: new FormControl(null),
      nick: new FormControl(null),
      img: new FormControl(null),
      prof: new FormControl(null)
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    let newHero = this.form.value as Hero;
    //let temp=newHero.img;
    //newHero.img="../../assets/"+temp;
    this.service.addHero(newHero).subscribe(result => { console.log(result) });
    console.log(newHero);
  }
}
