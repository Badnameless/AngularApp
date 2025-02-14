import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  standalone: false,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() // Permite la entrada de data desde el componente padre
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(index: number):void {
    this.onDeleteCharacter.emit(index);
  }
}
