import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

@Injectable()
export class UploadImageService {

  constructor(){}

  async upload(image: File) {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${Date.now()}_${Math.random().toString(36).substring(2)}`);

      const snapshot = await uploadBytes(storageRef, image);
      return getDownloadURL(snapshot.ref);
      
    } catch (err) {
      throw err;
    }
  }
}
