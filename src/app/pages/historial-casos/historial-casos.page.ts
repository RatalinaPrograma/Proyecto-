import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
@Component({
  selector: 'app-historial-casos',
  templateUrl: './historial-casos.page.html',
  styleUrls: ['./historial-casos.page.scss'],
})
export class HistorialCasosPage implements OnInit {

  constructor(private file: File, private fileOpener: FileOpener) {}

  // Ejemplo de datos de la tabla
  datosTabla = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 150 },
    { id: 3, nombre: 'Producto C', precio: 200 },
  ];

  ngOnInit(): void {
    console.log('HistorialCasosPage inicializado');
  }
  // Generar el archivo Excel
  generarExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.datosTabla);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.guardarYAbrirExcel(buffer);
  }

  // Guardar y abrir el archivo Excel
  async guardarYAbrirExcel(buffer: any) {
    const nombreArchivo = 'datos.xlsx';
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    try {
      // Guardar el archivo en la ruta de datos del dispositivo
      const ruta = this.file.dataDirectory;
      await this.file.writeFile(ruta, nombreArchivo, data, { replace: true });

      // Abrir el archivo con FileOpener
      await this.fileOpener.open(ruta + nombreArchivo, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      console.log('Archivo Excel abierto con éxito');
    } catch (error) {
      console.error('Error al guardar o abrir el archivo:', error);
    }
  }
}
