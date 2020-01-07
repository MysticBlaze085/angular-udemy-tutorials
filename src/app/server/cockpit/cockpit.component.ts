import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnChanges {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  form: FormGroup;

  newServerName = '';
  newServerContent = '';

  constructor(private _fb: FormBuilder) {   }

    ngOnInit() {
      this.form = this._fb.group({
        serverName: ['', Validators.required],
        serverContent: ['', Validators.required]
      });
      console.log(this.form)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.form
  }

  onAddServer() {
    this.serverCreated.emit(this.form.value);
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(this.form.value);
  }

}