import { Injectable, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


  private basePath = 'userProfiles/';
  private storgaeRef = firebase.storage().ref();
  constructor(private db:AngularFireDatabase) { }



uploadFile1(fileuploaded , imageName)
{
 
  let ref = this.storgaeRef.child(this.basePath + imageName);
  return ref.put(fileuploaded);
   
}



  // get image  profile

  getImageProfile(name)
  {
     return this.storgaeRef.child(this.basePath+'/'+ name).getDownloadURL();
  }

  // delete Profile

  deletProfile(name)
  {
   let path = this.storgaeRef.child(this.basePath+'/'+ name);
   return path.delete();
  }
  














/*


//  updateProfile(oldFile , newFile)
//  {
//   let path = this.storgaeRef.child(this.basePath+'/'+ oldFile)
//  return new Promise((resolve , reject)=>{
//      path.delete()
//  }) 
  
//  }



  //upload file
  uploadFile(fileuploaded) {

    return new Promise((resolve, reject) => {
      if (fileuploaded !== null) {
        let ref = this.storgaeRef.child(this.basePath + fileuploaded.name);
        ref.put(fileuploaded).then(() => {
          resolve()
        })
          .catch(error => {
            alert("image profile  not uploaded");
            reject(error);
          });
      }
    })
  }

  // delete file
  deleteFile(filename?: string) {
    return new Promise((resolve, reject) => {
      if (filename === "") {resolve();}
      else{
        let desertRef = this.storgaeRef.child(this.basePath + filename);
        desertRef.delete().then(function () {
          resolve();
        }).catch(error => {
          reject(error);
          console.log(error);
        });
      }
    })

  }





  //update File 
  updateFile(oldFile, newFile,  uid) {

    Promise.all([this.uploadFile(newFile), this.deleteFile(oldFile)]).then(seccess => {
      alert('profile updated');
    }).catch((error) => {
      alert('sorry profile not updated try again' + error);
    });
  }




*/




}






