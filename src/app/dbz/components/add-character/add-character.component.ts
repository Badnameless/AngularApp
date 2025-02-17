import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false,
})
export class AddCharacterComponent {

    // instanciamos un objeto EventEmitter que va a permitir emitir datos al componente padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter():void{
    if(this.character.name.length == 0) return;

    this.onNewCharacter.emit({...this.character}); // Utilizamos emit(data) para emitir la informacion

    this.character.id = '';
    this.character.name = '';
    this.character.power = 0;
  }
}
