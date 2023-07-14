import {Component, ViewChild, OnInit} from '@angular/core';
import {CustomersService} from "../service/customers.service";
import {Customer} from "../interface/customer";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  dataSource = new MatTableDataSource<any>([]);
  customers?: Customer[];
  customerModel: Customer={};

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'telNo', 'gender', 'view'];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.empTbSort;
  }
  constructor(private customerService: CustomersService) {
  }
  ngOnInit(): void{
    this.onGetCustomers();
  }

  onGetCustomers(): void{
    this.customerService.getCustomers().subscribe(
      (response) => {console.log(response);
        this.dataSource.data = response;
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }



  protected readonly open = open;
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
