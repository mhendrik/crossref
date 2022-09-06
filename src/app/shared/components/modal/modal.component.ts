import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  public referenceData: any;
  public displayedColumns = ['first-page','article-title'];

  public dataSource = new MatTableDataSource<any>();

  constructor(@Inject(
    MAT_DIALOG_DATA) public data:{ dialogData: ModalComponent },
    public dialogRef: MatDialogRef<ModalComponent>
  ) { 
    this.referenceData = data.dialogData;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.referenceData);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
