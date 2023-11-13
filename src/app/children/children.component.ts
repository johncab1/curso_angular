import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() texto?: string;

  @Output() textoChange = new EventEmitter<string>();

  emitChange()
{
  this.textoChange.emit(this.texto);
}
}


