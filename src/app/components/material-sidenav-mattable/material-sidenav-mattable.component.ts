import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material-sidenav-mattable',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './material-sidenav-mattable.component.html',
  styleUrl: './material-sidenav-mattable.component.scss',
})
export class MaterialSidenavMattableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<any>;
  showFiller = false;
  isDrawerOpen = false;

  pokemons: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ds: DataService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.Observer();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Observer() {
    this.ds.getAllPokemons().subscribe({
      next: (data: any) => {
        this.pokemons = data.results;
        this.dataSource = new MatTableDataSource(this.pokemons);
      },
      error: (err: any) => {
        this.toastr.error(
          'Es konnten leider keine Daten geladen werden!',
          'Fehler'
        );
      },
      complete: () => {
        console.log('Daten geladen', this.pokemons);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
