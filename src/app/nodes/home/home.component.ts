import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './../../shared/components/modal/modal.component';

interface Items {
  ISSN:string;
  author:string;
  Publisher:string;
  Title:string;
  URL:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }
  records:any[]=[];
  works:any[]=[];
  items: Items[] = [];
  isLoading = true;
  // columns we will show on the table
  public displayedColumns = ['ISSN','Author','Publisher','Title','Url','Reference'];

  //the source where we will get the data
  public dataSource = new MatTableDataSource<Items>();

  ngOnInit(): void {
    this.records = this.route.snapshot.data['records'];
    if(this.records!==null || this.records!==undefined){
      this.getItems(this.records)
    }
  }

  getItems(data: any){
    if(data==null) return;
    const items = data.records;
    this.setRecords(items)
  }
  setRecords(data:any){
    const rec = data[0].message!==undefined?data[0].message:[];
    this.works = rec.items;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.works);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }

  openDialog(data:any) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '500px',
      width: '800px',
      data: {dialogData: data}
    });
  }

}
