import { Component } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import {
  ColDef,
  CellClickedEvent,
  ColGroupDef,
  GetDataPath,
  GetRowIdFunc,
  GetRowIdParams,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
  IRowNode,
  ModuleRegistry,
  RowDragEndEvent,
  ValueFormatterParams,
  createGrid,
} from "ag-grid-community";
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-quartz.css";

// Row Data Interface
interface IRow {
  topic: string;
  problemTitle: string;
  difficulty: string;
  problemLink: string;
}

@Component({
  selector: 'app-dsa',
  standalone: true,
  imports: [AgGridAngular, AgGridModule],
  templateUrl: './dsa.component.html',
  styleUrl: './dsa.component.scss',
})
export class DsaComponent {

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { topic: "Arrays & Hashing", problemTitle: "Group Anagrams", difficulty: "Medium", problemLink: "loading..." },
    { topic: "Two Pointers", problemTitle: "Container With Most Water", difficulty:  "Medium", problemLink: "loading..." },
    { topic: "Sliding Window", problemTitle: "Longest Repeating Character Replacement", difficulty:  "Easy", problemLink: "loading..." },
    { topic: 'Stack', problemTitle: 'Daily Temperatures', difficulty:  "Medium", problemLink: "loading..." },
    { topic: 'Binary Search', problemTitle: 'Time Based Key Value Store', difficulty:  "Hard", problemLink: "loading..." },
    { topic: 'Linked List', problemTitle: 'Reorder List', difficulty:  "Medium", problemLink: "loading..." },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { 
      field: "topic",
      colId: '#',
      width: 70,
      headerName: '#',
      valueGetter: 'node.rowIndex + 1',
    },
    { 
      field: "topic",
      colId: 'TOPIC',
      width: 70,
      headerName: 'TOPIC',
      flex: 1.5 
    },
    { 
      field: "problemTitle", colId: 'PROBLEMTITLE', headerName: 'PROBLEM TITLE', flex: 1.5 
    },
    { 
      field: "difficulty",
      colId: 'DIFFICULTY',
      headerName: 'DIFFICULTY',
      width: 150,
    },
    { 
      field: "problemLink",
      colId: 'PROBLEMLINK',
      headerName: 'PROBLEM LINK',
      width: 150,
    }
  ];


  defaultColDef: ColDef = {
    filter: true,
    editable: false,
    filterParams: { maxNumConditions: 1 },
  };
  themeClass = 'ag-theme-quartz';
}
