import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CamaraService {
  // Captura una foto con la cámara
  async tomarFoto(): Promise<string | undefined> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      return image.dataUrl; // Retorna la foto en formato base64
    } catch (error) {
      console.error('Error al tomar foto:', error);
      return undefined;
    }
  }

  // Selecciona una foto desde la galería
  async seleccionarDesdeGaleria(): Promise<string | undefined> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });
      return image.dataUrl; // Retorna la foto en formato base64
    } catch (error) {
      console.error('Error al seleccionar foto:', error);
      return undefined;
    }
  }

  
}
