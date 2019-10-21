import { Skill } from './../common/skill.model';
import { Developer } from './../common/developer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  firstSkill: Skill = new Skill ('Le trico', 'OK', 'https://google.com');
  secondSkill: Skill = new Skill ('NatPlus', 'Crawl', 'https://ffn.fr');


  // tslint:disable-next-line: max-line-length
  dev: Developer = new Developer('Hellec', 'Julie', 28, 'feminin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [this.firstSkill, this.secondSkill]);


  constructor() { }

  ngOnInit() {
  }

}
